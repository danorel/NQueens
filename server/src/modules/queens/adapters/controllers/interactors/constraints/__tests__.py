import unittest

from .impl import NativeConstraintController
from .impl import PrologConstraintController
from .....domain.entity.models.board.impl import BoardHolder


class NativeConstraintControllerTestCase(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        cls._constraint_controller = NativeConstraintController()

        cls._board_holder_complete = BoardHolder(board=[[0, 0, 1, 0],
                                                        [1, 0, 0, 0],
                                                        [0, 0, 0, 1],
                                                        [0, 1, 0, 0]]).board()

        cls._board_holder_first_row = BoardHolder(board=[[0, 0, 1, 0],
                                                         [0, 0, 0, 0],
                                                         [0, 0, 0, 0],
                                                         [0, 0, 0, 0]]).board()

        cls._board_holder_first_column = BoardHolder(board=[[0, 0, 0, 0],
                                                            [0, 0, 0, 0],
                                                            [1, 0, 0, 0],
                                                            [0, 0, 0, 0]]).board()

    def tests_constraint_row_complete(self) -> None:
        for i in range(0, 4):
            self.assertFalse(self._constraint_controller._valid_constraint_row(self._board_holder_complete, i))
        return None

    def tests_constraint_row_first(self) -> None:
        self.assertFalse(self._constraint_controller._valid_constraint_row(self._board_holder_first_row, 0))
        for i in range(1, 4):
            self.assertTrue(self._constraint_controller._valid_constraint_row(self._board_holder_first_row, i))
        return None

    def tests_constraint_column_complete(self) -> None:
        for i in range(0, 4):
            self.assertFalse(self._constraint_controller._valid_constraint_column(self._board_holder_complete, i))
        return None

    def tests_constraint_column_first(self) -> None:
        self.assertFalse(self._constraint_controller._valid_constraint_column(self._board_holder_first_column, 0))
        for i in range(1, 4):
            self.assertTrue(self._constraint_controller._valid_constraint_column(self._board_holder_first_column, i))
        return None

    def tests_constraint_diagonal_forward_complete(self) -> None:
        self.assertFalse(self._constraint_controller._valid_constraint_forward_diagonal(self._board_holder_complete, 0, 1))
        self.assertFalse(self._constraint_controller._valid_constraint_forward_diagonal(self._board_holder_complete, 1, 0))
        self.assertFalse(self._constraint_controller._valid_constraint_forward_diagonal(self._board_holder_complete, 0, 2))
        self.assertFalse(self._constraint_controller._valid_constraint_forward_diagonal(self._board_holder_complete, 3, 1))
        # True test cases, not crossing with figure
        self.assertTrue(self._constraint_controller._valid_constraint_forward_diagonal(self._board_holder_complete, 0, 0))
        self.assertTrue(self._constraint_controller._valid_constraint_forward_diagonal(self._board_holder_complete, 2, 2))
        self.assertTrue(self._constraint_controller._valid_constraint_forward_diagonal(self._board_holder_complete, 0, 3))
        return None

    def tests_constraint_diagonal_forward_first_row(self) -> None:
        self.assertFalse(self._constraint_controller._valid_constraint_forward_diagonal(self._board_holder_first_row, 0, 2))
        self.assertFalse(self._constraint_controller._valid_constraint_forward_diagonal(self._board_holder_first_row, 1, 3))
        # True test cases, not crossing with figure
        self.assertTrue(self._constraint_controller._valid_constraint_forward_diagonal(self._board_holder_first_row, 0, 0))
        self.assertTrue(self._constraint_controller._valid_constraint_forward_diagonal(self._board_holder_first_row, 0, 1))
        self.assertTrue(self._constraint_controller._valid_constraint_forward_diagonal(self._board_holder_first_row, 0, 3))
        return None

    def tests_constraint_diagonal_backward_first_row(self) -> None:
        self.assertFalse(self._constraint_controller._valid_constraint_backward_diagonal(self._board_holder_first_row, 0, 2))
        self.assertFalse(self._constraint_controller._valid_constraint_backward_diagonal(self._board_holder_first_row, 1, 1))
        self.assertFalse(self._constraint_controller._valid_constraint_backward_diagonal(self._board_holder_first_row, 2, 0))
        # True test cases, not crossing with figure
        self.assertTrue(self._constraint_controller._valid_constraint_backward_diagonal(self._board_holder_first_row, 0, 0))
        self.assertTrue(self._constraint_controller._valid_constraint_backward_diagonal(self._board_holder_first_row, 0, 1))
        self.assertTrue(self._constraint_controller._valid_constraint_backward_diagonal(self._board_holder_first_row, 0, 3))
        return None

    def tests_constraint_complete(self) -> None:
        for i in range(0, 4):
            for j in range(0, 4):
                self.assertFalse(self._constraint_controller.valid_constraints(self._board_holder_complete, i, j))
        return None

    def tests_constraint_first_row(self) -> None:
        self.assertFalse(self._constraint_controller.valid_constraints(self._board_holder_first_row, 0, 0))
        self.assertFalse(self._constraint_controller.valid_constraints(self._board_holder_first_row, 2, 2))
        self.assertFalse(self._constraint_controller.valid_constraints(self._board_holder_first_row, 0, 1))
        # True test cases, not crossing with figure
        self.assertTrue(self._constraint_controller.valid_constraints(self._board_holder_first_row, 2, 1))
        self.assertTrue(self._constraint_controller.valid_constraints(self._board_holder_first_row, 1, 0))
        self.assertTrue(self._constraint_controller.valid_constraints(self._board_holder_first_row, 3, 1))
        return None


class PrologConstraintControllerTestCase(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        cls._constraint_controller = PrologConstraintController()

        cls._board_holder_complete = BoardHolder(board=[[0, 0, 1, 0],
                                                        [1, 0, 0, 0],
                                                        [0, 0, 0, 1],
                                                        [0, 1, 0, 0]]).board()

        cls._board_holder_first_row = BoardHolder(board=[[0, 0, 1, 0],
                                                         [0, 0, 0, 0],
                                                         [0, 0, 0, 0],
                                                         [0, 0, 0, 0]]).board()

        cls._board_holder_first_column = BoardHolder(board=[[0, 0, 0, 0],
                                                            [0, 0, 0, 0],
                                                            [1, 0, 0, 0],
                                                            [0, 0, 0, 0]]).board()

    def tests_constraint_first_row(self) -> None:
        self.assertFalse(self._constraint_controller.valid_constraints(self._board_holder_first_row, 0, 0))
        self.assertFalse(self._constraint_controller.valid_constraints(self._board_holder_first_row, 2, 2))
        self.assertFalse(self._constraint_controller.valid_constraints(self._board_holder_first_row, 0, 1))
        # True test cases, not crossing with figure
        self.assertTrue(self._constraint_controller.valid_constraints(self._board_holder_first_row, 2, 1))
        self.assertTrue(self._constraint_controller.valid_constraints(self._board_holder_first_row, 1, 0))
        self.assertTrue(self._constraint_controller.valid_constraints(self._board_holder_first_row, 3, 1))
        return None


if __name__ == '__main__':
    unittest.main()
