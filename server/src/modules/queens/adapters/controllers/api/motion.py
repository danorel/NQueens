class QueensMotionController:
    @staticmethod
    def post(request):
        """
        Extracting the post parameters:
            - board: the current location of queens on the board.
        :param request: { board }
        :return:
        """
        return request.get_json(force=True)
