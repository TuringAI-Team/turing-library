import base
from pyee import EventEmitter

class Video(Base):
    def __init__(self, start):
        super().__init__(start)

    async def zelescope(self, data):
        response = await self.fetch('video/zelescope', data)
        return response
