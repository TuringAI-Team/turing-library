import requests
import eventlet
import json

class Base:
    def __init__(self, start):
        self.apiKey = start['apiKey']
        self.captchaKey = start['captchaKey']
        self.superKey = start.get('superKey', None)
        self.options = {
            'stream': start['options'].get('stream', None),
            'host': start['options'].get('host', 'https://api.turing.sh')
        } if 'options' in start else {}

    def fetch(self, url, options):
        isStream = options.get('stream', self.options.get('stream', False))
        headers = {
            'Content-Type': 'application/json',
            'Authorization': self.apiKey,
            'x-captcha-token': self.captchaKey
        }
        if self.superKey:
            headers['secret'] = self.superKey
        del options['stream']

        if isStream:
            event = eventlet.Event()

            def on_message(msg):
                ev = json.loads(msg.data)
                event.send(ev)

            with eventlet.Timeout(180):
                with eventlet.Timeout(3 * 60):
                    with eventlet.Timeout(3 * 60):
                        eventlet.spawn(fetchEventSource, url, {
                            'method': 'POST',
                            'headers': headers,
                            'body': json.dumps({**options, 'stream': True}),
                            'onopen': lambda: None,
                            'onmessage': on_message
                        })
                        return event.wait()
        else:
            res = requests.post(url, headers=headers, data=json.dumps({**options, 'stream': False}), timeout=180)
            return res.json()

    async def model(self, data):
        return await self.fetch('https://api.turing.sh/', data)
