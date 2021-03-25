import abc

from .....domain.entity.models.board.interface import Abstract2DBoardHolder


class AbstractConstraintController(abc.ABC):
    _board_holder: Abstract2DBoardHolder

    @abc.abstractmethod
    def valid_constraints(self, row: int, column: int):
        pass

    @abc.abstractmethod
    def _valid_constraint_diagonals(self, row: int, column: int):
        pass

    @abc.abstractmethod
    def _valid_constraint_forward_diagonal(self, row: int, column: int):
        pass

    @abc.abstractmethod
    def _valid_constraint_backward_diagonal(self, row: int, column: int):
        pass

    @abc.abstractmethod
    def _valid_constraint_row(self, row: int):
        pass

    @abc.abstractmethod
    def _valid_constraint_column(self, column: int):
        pass
