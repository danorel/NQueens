import abc

from .....domain.entity.structures.types import BoardType
from .....adapters.controllers.interactors.constraints.interface import \
    AbstractConstraintController


class AbstractResolverController(abc.ABC):
    _memorize_: list
    _constraint_controller: AbstractConstraintController

    @abc.abstractmethod
    def search(self, board: BoardType):
        pass
