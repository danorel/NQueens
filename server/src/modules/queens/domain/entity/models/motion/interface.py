import abc


class Abstract2DMotionHolder(abc.ABC):
    @abc.abstractmethod
    def x(self) -> int:
        pass

    @abc.abstractmethod
    def y(self) -> int:
        pass
