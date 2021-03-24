from flask_restful import Resource


class QueensMotionRouter(Resource):
    def get(self):
        return {'hello': 'world'}

    def post(self):
        return {'x': 2, 'y': 1}
