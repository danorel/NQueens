from .....domain.entity.structures.types import BoardType

from .....adapters.controllers.interactors.constraints.interface import \
    AbstractConstraintController


class NativeConstraintController(AbstractConstraintController):

    @classmethod
    def valid_constraints(cls, board: BoardType, row: int, column: int) -> bool:
        if cls._valid_constraint_diagonals(board, row, column) and cls._valid_constraint_row(board, row) and cls._valid_constraint_column(board, column):
            return True

        return False

    @classmethod
    def _valid_constraint_diagonals(cls, board: BoardType, row: int, column: int) -> bool:
        if cls._valid_constraint_forward_diagonal(board, row, column) and cls._valid_constraint_backward_diagonal(board, row, column):
            return True

        return False

    @classmethod
    def _valid_constraint_forward_diagonal(cls, board: BoardType, row: int, column: int) -> bool:
        # Check left part of diagonal
        i, j = row, column
        while i >= 0 and j >= 0:
            if board[i][j] == 1:
                return False
            i -= 1
            j -= 1

        # Check right part of diagonal
        i, j = row, column
        while i < len(board) and j < len(board):
            if board[i][j] == 1:
                return False
            i += 1
            j += 1

        return True

    @classmethod
    def _valid_constraint_backward_diagonal(cls, board: BoardType, row: int, column: int) -> bool:
        # Check left part of diagonal
        i, j = row, column
        while i >= 0 and j < len(board):
            if board[i][j] == 1:
                return False
            i -= 1
            j += 1

        # Check right part of diagonal
        i, j = row, column
        while i < len(board) and j >= 0:
            if board[i][j] == 1:
                return False
            i += 1
            j -= 1

        return True

    @classmethod
    def _valid_constraint_column(cls, board: BoardType, column: int) -> bool:
        for j in range(0, len(board)):
            if board[j][column] == 1:
                return False

        return True

    @classmethod
    def _valid_constraint_row(cls, board: BoardType, row: int) -> bool:
        for i in range(0, len(board)):
            if board[row][i] == 1:
                return False

        return True


class PrologConstraintController(AbstractConstraintController):

    @classmethod
    def valid_constraints(cls, board: BoardType, row: int, column: int):
        return True

    @classmethod
    def _valid_constraint_diagonals(cls, board: BoardType, row: int, column: int):
        return True

    @classmethod
    def _valid_constraint_forward_diagonal(cls, board: BoardType, row: int, column: int):
        return True

    @classmethod
    def _valid_constraint_backward_diagonal(cls, board: BoardType, row: int, column: int):
        return True

    @classmethod
    def _valid_constraint_row(cls, board: BoardType, row: int):
        return True

    @classmethod
    def _valid_constraint_column(cls, board: BoardType, column: int):
        return True
