import abc


class AbstractCombinationHolder(abc.ABC):

    _latest: list = []
    _collection: list = []

    @abc.abstractmethod
    def init(self, collection: list) -> None:
        pass

    @abc.abstractmethod
    def next(self) -> list:
        pass

    @abc.abstractmethod
    def collection(self) -> int:
        pass
