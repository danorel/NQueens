from .interface import Abstract2DBoardHolder
from ...structures.types import BoardType


class BoardHolder(Abstract2DBoardHolder):
    def __init__(self, board: BoardType):
        self.__board = board

    def board(self) -> BoardType:
        return self.__board
