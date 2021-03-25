import unittest

from .impl import NativeConstraintController
from .....domain.entity.models.board.impl import BoardHolder


class NativeConstraintControllerTestCase(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        cls._constraint_controller_complete = NativeConstraintController(
            board_holder=BoardHolder(board=[[0, 0, 1, 0],
                                            [1, 0, 0, 0],
                                            [0, 0, 0, 1],
                                            [0, 1, 0, 0]]))
        cls._constraint_controller_first_row = NativeConstraintController(
            board_holder=BoardHolder(board=[[0, 0, 1, 0],
                                            [0, 0, 0, 0],
                                            [0, 0, 0, 0],
                                            [0, 0, 0, 0]]))
        cls._constraint_controller_first_column = NativeConstraintController(
            board_holder=BoardHolder(board=[[0, 0, 0, 0],
                                            [0, 0, 0, 0],
                                            [1, 0, 0, 0],
                                            [0, 0, 0, 0]]))
        cls._constraint_controller_diagonal_forward = NativeConstraintController(
            board_holder=BoardHolder(board=[[0, 0, 0, 0],
                                            [0, 0, 0, 0],
                                            [1, 0, 0, 0],
                                            [0, 0, 0, 0]]))

    def tests_constraint_row_complete(self) -> None:
        for i in range(0, 4):
            self.assertFalse(self._constraint_controller_complete._valid_constraint_row(i))
        return None

    def tests_constraint_row_first(self) -> None:
        self.assertFalse(self._constraint_controller_first_row._valid_constraint_row(0))
        for i in range(1, 4):
            self.assertTrue(self._constraint_controller_first_row._valid_constraint_row(i))
        return None

    def tests_constraint_column_complete(self) -> None:
        for i in range(0, 4):
            self.assertFalse(self._constraint_controller_complete._valid_constraint_column(i))
        return None

    def tests_constraint_column_first(self) -> None:
        self.assertFalse(self._constraint_controller_first_column._valid_constraint_column(0))
        for i in range(1, 4):
            self.assertTrue(self._constraint_controller_first_column._valid_constraint_column(i))
        return None

    def tests_constraint_diagonal_forward_complete(self) -> None:
        self.assertFalse(self._constraint_controller_complete._valid_constraint_forward_diagonal(0, 1))
        self.assertFalse(self._constraint_controller_complete._valid_constraint_forward_diagonal(1, 0))
        self.assertFalse(self._constraint_controller_complete._valid_constraint_forward_diagonal(0, 2))
        self.assertFalse(self._constraint_controller_complete._valid_constraint_forward_diagonal(3, 1))
        # True test cases, not crossing with figure
        self.assertTrue(self._constraint_controller_complete._valid_constraint_forward_diagonal(0, 0))
        self.assertTrue(self._constraint_controller_complete._valid_constraint_forward_diagonal(2, 2))
        self.assertTrue(self._constraint_controller_complete._valid_constraint_forward_diagonal(0, 3))
        return None

    def tests_constraint_diagonal_forward_first_row(self) -> None:
        self.assertFalse(self._constraint_controller_first_row._valid_constraint_forward_diagonal(0, 2))
        self.assertFalse(self._constraint_controller_first_row._valid_constraint_forward_diagonal(1, 3))
        # True test cases, not crossing with figure
        self.assertTrue(self._constraint_controller_first_row._valid_constraint_forward_diagonal(0, 0))
        self.assertTrue(self._constraint_controller_first_row._valid_constraint_forward_diagonal(0, 1))
        self.assertTrue(self._constraint_controller_first_row._valid_constraint_forward_diagonal(0, 3))
        return None

    def tests_constraint_diagonal_backward_first_row(self) -> None:
        self.assertFalse(self._constraint_controller_first_row._valid_constraint_backward_diagonal(0, 2))
        self.assertFalse(self._constraint_controller_first_row._valid_constraint_backward_diagonal(1, 1))
        self.assertFalse(self._constraint_controller_first_row._valid_constraint_backward_diagonal(2, 0))
        # True test cases, not crossing with figure
        self.assertTrue(self._constraint_controller_first_row._valid_constraint_backward_diagonal(0, 0))
        self.assertTrue(self._constraint_controller_first_row._valid_constraint_backward_diagonal(0, 1))
        self.assertTrue(self._constraint_controller_first_row._valid_constraint_backward_diagonal(0, 3))
        return None

    def tests_constraint_complete(self) -> None:
        for i in range(0, 4):
            for j in range(0, 4):
                self.assertFalse(self._constraint_controller_complete.valid_constraints(i, j))
        return None

    def tests_constraint_first_row(self) -> None:
        self.assertFalse(self._constraint_controller_first_row.valid_constraints(0, 0))
        self.assertFalse(self._constraint_controller_first_row.valid_constraints(2, 2))
        self.assertFalse(self._constraint_controller_first_row.valid_constraints(0, 1))
        # True test cases, not crossing with figure
        self.assertTrue(self._constraint_controller_first_row.valid_constraints(2, 1))
        self.assertTrue(self._constraint_controller_first_row.valid_constraints(1, 0))
        self.assertTrue(self._constraint_controller_first_row.valid_constraints(3, 1))
        return None


if __name__ == '__main__':
    unittest.main()
