from ....entities.flask import api
from .motion import QueensMotionRouter

api.add_resource(QueensMotionRouter, '/api/v1/queens/motion')
