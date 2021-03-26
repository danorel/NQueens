import unittest

from .impl import PrologResolverController
from ..constraints.impl import PrologConstraintController
from .....domain.entity.models.board.impl import BoardHolder


class PrologResolverControllerTestCase(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        cls._constraint_controller = PrologResolverController(
            constraint_controller=PrologConstraintController())

        cls._board_holder_empty = BoardHolder(board=[[0, 0, 0, 0],
                                                     [0, 0, 0, 0],
                                                     [0, 0, 0, 0],
                                                     [0, 0, 0, 0]]).board()

    def test_resolver_search_empty(self):
        self.assertEqual(self._constraint_controller.search(
            board=self._board_holder_empty), True)


if __name__ == '__main__':
    unittest.main()
