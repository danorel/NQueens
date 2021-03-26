from flask import request
from flask_restful import Resource

from ...entities.flask import api

from .domain.entity.models.board.impl import BoardHolder
from .domain.entity.models.combination.impl import CombinationHolder
from .domain.interactors.resolver import QueensResolverUseCase
from .domain.interactors.iterator import QueensIteratorUseCase
from .adapters.controllers.api.resolver import QueensResolverController
from .adapters.controllers.interactors.resolver.impl import NativeResolverController
from .adapters.controllers.interactors.constraints.impl import NativeConstraintController


# Domain level
combination_holder = CombinationHolder()
board_holder = BoardHolder(board=[])

# Adapter level
constraint_controller = NativeConstraintController()
resolver_controller = NativeResolverController(constraint_controller)

# Interactor level
iterator_use_case = QueensIteratorUseCase(
    combination_holder=combination_holder)
resolver_use_case = QueensResolverUseCase(
    board_holder=board_holder,
    resolver_controller=resolver_controller)


class QueensInitializerRouter(Resource):
    @staticmethod
    def post() -> dict:
        body = QueensResolverController.post(request)
        board = body.get('board')

        board_holder.init(board=board)
        resolver_use_case.init_holder(board_holder)
        combination_holder.init(collection=resolver_use_case.find())

        return {
            'ok': True,
            'log': f'Hi, Neo! You\'ve chosen to conquer the {len(board)}D matrix... Let\'s hack it!'
        }


class QueensResolverRouter(Resource):
    @staticmethod
    def post() -> dict:

        if not combination_holder.collection():
            return {
                'ok': False,
                'move': None,
                'exist': False,
                'log': 'Neo! The matrix is need to be reloaded.'
            }

        done, exist, move = iterator_use_case.next()

        if move is None:
            return {
                'ok': False,
                'done': False,
                'move': None,
                'exist': False,
                'log': 'Game has finished successfully! Press re-play to start again.'
            }

        return {
            'ok': True,
            'done': done,
            'exist': exist,
            'move': {
                'x': move.x(),
                'y': move.y(),
            },
            'log': move.__str__()
        }


api.add_resource(QueensResolverRouter, '/api/v1/queens/resolve')
api.add_resource(QueensInitializerRouter, '/api/v1/queens/initialize')
