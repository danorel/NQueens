from .interface import Abstract2DMotionHolder


class MotionHolder(Abstract2DMotionHolder):
    def __init__(self, x, y):
        self.__x: int = x
        self.__y: int = y

    def x(self) -> int:
        return self.__x

    def y(self) -> int:
        return self.__y

    def __str__(self):
        return f"move<{self.__x},{self.__y}>"
