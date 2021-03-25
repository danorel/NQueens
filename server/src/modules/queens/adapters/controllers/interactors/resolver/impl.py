from .....domain.entity.models.board.interface import Abstract2DBoardHolder
from .....domain.entity.models.motion.impl import MotionHolder
from ..constraints.interface import AbstractConstraintController
from .....adapters.controllers.interactors.resolver.interface import AbstractResolverController


class NativeResolverController(AbstractResolverController):
    def __init__(self,
                 board_holder: Abstract2DBoardHolder,
                 constraint_controller: AbstractConstraintController):
        self.__board_holder = board_holder
        self.__constraint_controller = constraint_controller

    def search(self) -> MotionHolder:
        move: MotionHolder = MotionHolder(0, 0)
        found: bool = False

        for i in range(0, len(self.__board_holder.board())):
            for j in range(0, len(self.__board_holder.board()[i])):
                if self.__constraint_controller.valid_constraints(i, j):
                    move = MotionHolder(i, j)
                    found = True
                    break
            if found:
                break

        return move
