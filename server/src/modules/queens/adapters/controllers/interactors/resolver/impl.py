from .....domain.entity.models.board.interface import Abstract2DBoardHolder
from .....domain.entity.models.motion.impl import MotionHolder
from ..constraints.interface import AbstractConstraintController
from .....adapters.controllers.interactors.resolver.interface import AbstractResolverController


class NativeResolverController(AbstractResolverController):
    def __init__(self,
                 board_holder: Abstract2DBoardHolder,
                 constraint_controller: AbstractConstraintController):
        self._board_holder = board_holder
        self._constraint_controller = constraint_controller

    def search(self) -> MotionHolder:
        motions: [MotionHolder] = []
        self._backtracking(motions, 0)
        for motion in motions:
            print(motion)
        return motions[0]

    def _backtracking(self, motions: [MotionHolder], column) -> bool:
        if column == len(self._board_holder.board()):
            print("Found!")
            return True

        for i in range(0, len(self._board_holder.board())):
            if self._constraint_controller.valid_constraints(i, column):
                motions.append(MotionHolder(i, column))

                if self._backtracking(motions, column + 1):
                    return True

                motions.pop()

        return False
