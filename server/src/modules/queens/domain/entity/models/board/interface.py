import abc

from ...structures.types import BoardType


class Abstract2DBoardHolder(abc.ABC):
    _board: BoardType

    @abc.abstractmethod
    def init(self, board: BoardType):
        pass

    @abc.abstractmethod
    def board(self) -> BoardType:
        pass

