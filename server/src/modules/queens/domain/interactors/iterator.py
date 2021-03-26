from ..entity.models.motion.impl import MotionHolder
from ...domain.entity.models.combination.interface import AbstractCombinationHolder


class QueensIteratorUseCase:
    def __init__(self, combination_holder: AbstractCombinationHolder):
        """
        Solution iterator.
        :param combination_holder: Combination storage with all possible solutions.
        """
        self._combination_holder = combination_holder
        # Data for MotionHolder next control
        self.__index: int = 0
        self.__combination: list = []

    def next(self) -> (bool, bool, MotionHolder or None):
        """
        Find next motion from current solution.
        :return: (If is solution ended, If next solution exist, MotionHolder or None)
        """
        exist = True

        if not self.__combination:
            self.__index = 0
            self.__combination = self._combination_holder.next()
            exist = self.__combination is not None

        # Extract row by row within combination
        row, self.__combination = self.__combination[0], self.__combination[1:]

        # Check if solution is ended
        done = not self.__combination

        # Extract the MotionHolder move
        move: MotionHolder or None = self._find_motion(row)
        self.__index += 1

        return done, exist, move

    def _find_motion(self, row: list) -> MotionHolder or None:
        for index, slot in enumerate(row):
            if slot:
                return MotionHolder(index, self.__index)

        return None
