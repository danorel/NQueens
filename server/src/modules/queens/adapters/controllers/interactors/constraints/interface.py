import abc

from .....domain.entity.structures.types import BoardType


class AbstractConstraintController(abc.ABC):

    @abc.abstractmethod
    def valid_constraints(self, board: BoardType, row: int, column: int):
        pass

    @abc.abstractmethod
    def _valid_constraint_diagonals(self, board: BoardType, row: int, column: int):
        pass

    @abc.abstractmethod
    def _valid_constraint_forward_diagonal(self, board: BoardType, row: int, column: int):
        pass

    @abc.abstractmethod
    def _valid_constraint_backward_diagonal(self, board: BoardType, row: int, column: int):
        pass

    @abc.abstractmethod
    def _valid_constraint_row(self, board: BoardType, row: int):
        pass

    @abc.abstractmethod
    def _valid_constraint_column(self, board: BoardType, column: int):
        pass
