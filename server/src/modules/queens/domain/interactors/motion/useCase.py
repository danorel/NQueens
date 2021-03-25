from ......entities import prolog
from ....domain.entity.motion import Motion


class QueensMotionUseCase:
    def __init__(self, pl: str):
        self.__pl: str = pl

    def next_queen_location(self, board: [[int]]) -> Motion:
        move: Motion = Motion(2, 3)

        """
        prolog.consult(self.__pl)
        list(prolog.query("L=%s,sudoku(L)" % p, maxresult=1))
        for soln in prolog.query("father(X,Y)"):
            print(soln["X"], "is the father of", soln["Y"])
        """

        return move
