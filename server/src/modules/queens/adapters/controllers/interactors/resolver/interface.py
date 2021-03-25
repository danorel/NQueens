import abc

from .....domain.entity.models.board.interface import Abstract2DBoardHolder
from .....adapters.controllers.interactors.constraints.interface import \
    AbstractConstraintController


class AbstractResolverController(abc.ABC):
    _board_holder: Abstract2DBoardHolder
    _constraint_controller: AbstractConstraintController

    @abc.abstractmethod
    def search(self):
        pass
