import copy

from ..constraints.interface import AbstractConstraintController
from .....adapters.controllers.interactors.resolver.interface import AbstractResolverController
from .....domain.entity.structures.types import BoardType
from .......entities.prolog import prolog


def __to_list(solution_dict: dict) -> list:
    solution_list = []

    for output in solution_dict:
        solution_list.append(output.get('Y'))

    return solution_list


solution_dict = {
    4: __to_list(prolog.query("n_queen(4,Y)")),
    5: __to_list(prolog.query("n_queen(5,Y)")),
    6: __to_list(prolog.query("n_queen(6,Y)")),
    7: __to_list(prolog.query("n_queen(7,Y)")),
    8: __to_list(prolog.query("n_queen(8,Y)")),
    9: __to_list(prolog.query("n_queen(9,Y)")),
    10: __to_list(prolog.query("n_queen(10,Y)")),
}


class NativeResolverController(AbstractResolverController):

    def __init__(self, constraint_controller: AbstractConstraintController):
        self._collection = []
        self._constraint_controller = constraint_controller

    def search(self, board: BoardType) -> list:
        self._backtracking(
            board=copy.deepcopy(board),
            column=0,
            n=len(board))

        # Erase the rest soltuions
        collection = self._collection.copy()
        self._collection = []

        return collection

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

    def __memorize(self, board: BoardType) -> None:
        self._collection.append(copy.deepcopy(board))
        return None


class PrologResolverController(AbstractResolverController):

    def __init__(self, constraint_controller: AbstractConstraintController):
        self._collection = []
        self._constraint_controller = constraint_controller

    def search(self, board: BoardType) -> list:
        self._collection = solution_dict.get(len(board))
        return self._collection
