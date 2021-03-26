from flask import request
from flask_restful import Resource

from ...entities.flask import api

from .domain.entity.models.board.impl import BoardHolder
from .domain.entity.models.combination.impl import CombinationHolder
from .domain.interactors.resolver import QueensResolverUseCase
from .domain.interactors.iterator import QueensIteratorUseCase
from .adapters.controllers.api.init import QueensInitController
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


class QueensInitRouter(Resource):
    @staticmethod
    def post() -> dict:
        body = QueensResolverController.post(request)

        board_holder.init(board=body.get('board'))
        resolver_use_case.init_holder(board_holder)

        if not combination_holder.collection():
            combination_holder.init(collection=resolver_use_case.find())

            return {
                'ok': True,
                'log': 'Collection with queens combinations was generated successfully!'
            }

        return {
            'ok': True
        }


class QueensResolverRouter(Resource):
    @staticmethod
    def post() -> dict:
        body = QueensInitController.post(request)

        if not combination_holder.collection():
            return {
                'move': None,
                'log': 'Server-side error! Define the collection firstly!'
            }

        move = iterator_use_case.next()
        print(move)

        if move is None:
            return {
                'move': None,
                'log': 'Game has finished successfully! Press re-play to start again.'
            }

        return {
            'move': {
                'x': move.x(),
                'y': move.y(),
            },
            'log': move.__str__()
        }


api.add_resource(QueensInitRouter, '/api/v1/queens/init')
api.add_resource(QueensResolverRouter, '/api/v1/queens/motion')
