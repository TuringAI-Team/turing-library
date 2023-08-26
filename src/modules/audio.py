import base
from pyee import EventEmitter

class Audio(Base):
    def __init__(self, start):
        super().__init__(start)

    async def music(self, data):
        response = await self.fetch('audio/music', data)
        return response

    async def stt(self, data):
        response = await self.fetch('audio/stt', data)
        return response

    async def tts(self, data):
        response = await self.fetch('audio/tts', data)
        return response
