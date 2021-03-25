from flask import request
from flask_restful import Resource

from ..domain.entity.motion import Motion
from ..adapters.controllers.motion import QueensMotionController
from ..domain.interactors.motion.useCase import QueensMotionUseCase


class QueensMotionRouter(Resource):
    def post(self):
        body = QueensMotionController.post(request)
        move: Motion = QueensMotionUseCase('algorithm.pl').next_queen_location(board=body.get('board'))
        return {
            'move': {
                'x': move.x(),
                'y': move.y(),
            },
            'log': move.__str__()
        }
