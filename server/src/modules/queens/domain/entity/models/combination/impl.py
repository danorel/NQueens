from .interface import AbstractCombinationHolder


class CombinationHolder(AbstractCombinationHolder):
    def __init__(self):
        self._latest: list = []
        self._collection: list = []

    def init(self, collection: list) -> None:
        self._collection = collection
        return None

    def next(self) -> list:
        if self._collection:
            self._latest = self._collection.pop()
        return self._latest

    def collection(self) -> list:
        return self._collection
