from flask import request
from flask_restful import Resource

from ..domain.entity.models.board.impl import BoardHolder
from ..domain.entity.models.motion.impl import MotionHolder
from ..domain.interactors.motion import QueensMotionUseCase
from ..adapters.controllers.api.motion import QueensMotionController
from ..adapters.controllers.interactors.resolver.impl import NativeResolverController
from ..adapters.controllers.interactors.constraints.impl import NativeConstraintController


class QueensMotionRouter(Resource):
    def post(self):
        body = QueensMotionController.post(request)
        move: MotionHolder = QueensMotionUseCase(
            resolver_controller=NativeResolverController(
                board_holder=BoardHolder(board=body.get('board')),
                constraint_controller=NativeConstraintController(
                    board_holder=BoardHolder(board=body.get('board'))))).find()
        return {
            'move': {
                'x': move.x(),
                'y': move.y(),
            },
            'log': move.__str__()
        }
