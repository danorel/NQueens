from ...entities.flask import api
from ...modules.queens.motion.api import QueensMotionRouter

api.add_resource(QueensMotionRouter, '/api/v1/queens/motion')
