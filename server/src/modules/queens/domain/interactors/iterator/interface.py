import abc

from ...entity.models.motion.impl import MotionHolder
from ....domain.entity.models.combination.interface import AbstractCombinationHolder


class AbstractIteratorUseCase(abc.ABC):
    def init_combination_holder(self, combination_holder: AbstractCombinationHolder):
        pass

    def next(self) -> (bool, bool, MotionHolder or None):
        pass

    def _find_motion(self, row: list):
        pass
