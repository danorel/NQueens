import abc


class AbstractResolverController(abc.ABC):
    @abc.abstractmethod
    def search(self):
        pass
