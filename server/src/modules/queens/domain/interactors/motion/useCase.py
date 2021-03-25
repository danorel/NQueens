from ......entities import prolog
from ....domain.entity.motion import Motion


def find_move():
    return Motion(0, 0)


def constraints(board: [[int]], row: int, column: int) -> bool:
    if (not constraint_diagonal(board, row, column)) or (not constraint_row(board, row)) or (not constraint_column(board, column)):
        return False
    return True


def constraint_diagonal(board: [[int]], row: int, column: int) -> bool:
    if not constraint_forward_diagonal(board, row, column) or not constraint_backward_diagonal(board, row, column):
        return False
    return True


def constraint_forward_diagonal(board: [[int]], row: int, column: int) -> bool:
    # Check left part of diagonal
    i, j = row, column
    while i != 0 and j != 0:
        i -= 1
        j -= 1
        if board[i][j]:
            return False

    # Check right part of diagonal
    i, j = row, column
    while i != len(board) - 1 and j != len(board) - 1:
        i += 1
        j += 1
        if board[i][j]:
            return False

    return True


def constraint_backward_diagonal(board: [[int]], row: int, column: int) -> bool:
    # Check left part of diagonal
    i, j = row, column
    while i != 0 and j != len(board) - 1:
        i -= 1
        j += 1
        if board[i][j]:
            return False

    # Check right part of diagonal
    i, j = row, column
    while i != len(board) - 1 and j != 0:
        i += 1
        j -= 1
        if board[i][j]:
            return False

    return True


def constraint_column(board: [[int]], column: int) -> bool:
    for j in range(0, len(board)):
        if board[j][column]:
            return False
    return True


def constraint_row(board: [[int]], row: int) -> bool:
    for i in range(0, len(board)):
        if board[row][i]:
            return False
    return True


class QueensMotionUseCase:
    def __init__(self, pl: str):
        self.__pl: str = pl

    def next_queen_location(self, board: [[int]]) -> Motion:
        move: Motion = Motion(0, 0)
        found: bool = False

        for i in range(0, len(board)):
            for j in range(0, len(board[i])):
                if constraints(board, i, j):
                    print(i, j)
                    move = Motion(i, j)
                    found = True
                    break
            if found:
                break

        """
        prolog.consult(self.__pl)
        list(prolog.query("L=%s,sudoku(L)" % p, maxresult=1))
        for soln in prolog.query("father(X,Y)"):
            print(soln["X"], "is the father of", soln["Y"])
        """

        return move
