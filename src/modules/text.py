import base
from pyee import EventEmitter

class Text(Base):
    def __init__(self, start):
        super().__init__(start)

    async def alan(self, data):
        response = await self.fetch('text/alan', data)
        return response

    async def anthropic(self, data):
        response = await self.fetch('text/anthropic', data)
        return response

    async def filter(self, data):
        response = await self.fetch('text/filter', data)
        return response

    async def google(self, data):
        response = await self.fetch('text/google', data)
        return response

    async def gpt(self, data):
        response = await self.fetch('text/gpt-new', data)
        return response

    async def huggingface(self, data):
        response = await self.fetch('text/huggingface', data)
        return response

    async def openchat(self, data):
        response = await self.fetch('text/openchat', data)
        return response
