from ..entity.models.board.interface import Abstract2DBoardHolder
from ...adapters.controllers.interactors.resolver.interface import AbstractResolverController


class QueensResolverUseCase:
    def __init__(self,
                 board_holder: Abstract2DBoardHolder,
                 resolver_controller: AbstractResolverController):
        self._board_holder = board_holder
        self._resolver_controller = resolver_controller

    def init_holder(self, board_holder: Abstract2DBoardHolder):
        self._board_holder = board_holder

    def init_resolver(self, resolver_controller: AbstractResolverController):
        self._resolver_controller = resolver_controller

    def find(self) -> list:
        return self._resolver_controller.search(self._board_holder.board())

