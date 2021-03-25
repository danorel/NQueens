from ...domain.entity.models.motion.impl import MotionHolder
from ...adapters.controllers.interactors.resolver.interface import AbstractResolverController


class QueensMotionUseCase:
    def __init__(self,
                 resolver_controller: AbstractResolverController):
        self._resolver_controller = resolver_controller

    def find(self) -> MotionHolder:
        move: MotionHolder = self._resolver_controller.search()
        return move
