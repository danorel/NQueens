from ..entity.models.motion.impl import MotionHolder
from ...domain.entity.models.combination.interface import AbstractCombinationHolder


class QueensIteratorUseCase:
    def __init__(self, combination_holder: AbstractCombinationHolder):
        self._index: int = 0
        self._combination: list = []
        self._combination_holder = combination_holder

    def next(self) -> MotionHolder or None:
        if not self._combination:
            self._index = 0
            self._combination = self._combination_holder.next()

        # Extract row by row within combination
        row, self._combination = self._combination[0], self._combination[1:]

        # Extract the MotionHolder move
        move: MotionHolder or None = self._search(row)
        self._index += 1

        return move

    def _search(self, row: list) -> MotionHolder or None:
        for index, slot in enumerate(row):
            if slot:
                return MotionHolder(index, self._index)

        return None
