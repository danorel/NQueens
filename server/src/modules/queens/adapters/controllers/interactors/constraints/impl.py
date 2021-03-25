from .......entities import prolog

from .....domain.entity.models.board.interface import Abstract2DBoardHolder
from .....adapters.controllers.interactors.constraints.interface import \
    AbstractConstraintController


class NativeConstraintController(AbstractConstraintController):
    def __init__(self, board_holder: Abstract2DBoardHolder):
        self._board_holder = board_holder

    def valid_constraints(self, row: int, column: int) -> bool:
        if (not self._constraint_diagonal(row, column)) or (not self._constraint_row(row)) or (not self._constraint_column(column)):
            return False
        return True

    def _constraint_diagonal(self, row: int, column: int) -> bool:
        if not self._constraint_forward_diagonal(row, column) or not self._constraint_backward_diagonal(row, column):
            return False
        return True

    def _constraint_forward_diagonal(self, row: int, column: int) -> bool:
        # Check left part of diagonal
        i, j = row, column
        while i != 0 and j != 0:
            i -= 1
            j -= 1
            if self._board_holder.board()[i][j]:
                return False

        # Check right part of diagonal
        i, j = row, column
        while i != len(self._board_holder.board()) - 1 and j != len(self._board_holder.board()) - 1:
            i += 1
            j += 1
            if self._board_holder.board()[i][j]:
                return False

        return True

    def _constraint_backward_diagonal(self, row: int, column: int) -> bool:
        # Check left part of diagonal
        i, j = row, column
        while i != 0 and j != len(self._board_holder.board()) - 1:
            i -= 1
            j += 1
            if self._board_holder.board()[i][j]:
                return False

        # Check right part of diagonal
        i, j = row, column
        while i != len(self._board_holder.board()) - 1 and j != 0:
            i += 1
            j -= 1
            if self._board_holder.board()[i][j]:
                return False

        return True

    def _constraint_column(self, column: int) -> bool:
        for j in range(0, len(self._board_holder.board())):
            if self._board_holder.board()[j][column]:
                return False
        return True

    def _constraint_row(self, row: int) -> bool:
        for i in range(0, len(self._board_holder.board())):
            if self._board_holder.board()[row][i]:
                return False
        return True


class PrologConstraintController(AbstractConstraintController):
    def __init__(self, pl):
        self.__pl = pl

    def valid_constraints(self, row: int, column: int):
        """
        prolog.consult(self.__pl)
        list(prolog.query("L=%s,sudoku(L)" % p, maxresult=1))
        for soln in prolog.query("father(X,Y)"):
            print(soln["X"], "is the father of", soln["Y"])
        """
        pass

    def _constraint_diagonal(self, row: int, column: int):
        pass

    def _constraint_forward_diagonal(self, row: int, column: int):
        pass

    def _constraint_backward_diagonal(self, row: int, column: int):
        pass

    def _constraint_row(self, row: int):
        pass

    def _constraint_column(self, column: int):
        pass
