import copy

from ..constraints.interface import AbstractConstraintController
from .....adapters.controllers.interactors.resolver.interface import AbstractResolverController
from .....domain.entity.structures.types import BoardType


class NativeResolverController(AbstractResolverController):
    def __init__(self, constraint_controller: AbstractConstraintController):
        self._constraint_controller = constraint_controller
        self.__collection = []

    def search(self, board: BoardType) -> list:
        self._backtracking(
            board=copy.deepcopy(board),
            column=0,
            n=len(board))

        return self.__collection

    def _backtracking(self, board: [[int]], column: int, n: int):
        if column >= n:
            return True

        for i in range(len(board)):
            if self._constraint_controller.valid_constraints(board, i, column):
                board[i][column] = 1

                if column == n - 1:
                    self.__memorize(board)
                    board[i][column] = 0
                    return

                self._backtracking(board, column + 1, n)  # Recursive call

                # Backtrack
                board[i][column] = 0

        return True

    def __memorize(self, board: BoardType):
        self.__collection.append(copy.deepcopy(board))
