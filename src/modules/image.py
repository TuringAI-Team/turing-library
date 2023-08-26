import base
from pyee import EventEmitter

class Image(Base):
    def __init__(self, start):
        super().__init__(start)

    async def anything(self, data):
        response = await self.fetch('image/anything', data)
        return response

    async def controlnet(self, data):
        response = await self.fetch('image/controlnet', data)
        return response

    async def dall(self, data):
        response = await self.fetch('image/dall-e', data)
        return response

    async def kandinsky(self, data):
        response = await self.fetch('image/kandinsky', data)
        return response

    async def sh(self, data):
        response = await self.fetch('image/sh', data)
        return response

    async def upscale(self, data):
        response = await self.fetch('image/upscale', data)
        return response

    async def vision(self, data):
        response = await self.fetch('image/vision', data)
        return response
