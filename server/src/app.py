from flask import Flask, request
from flask_restful import Resource, Api

from pyswip import Prolog

app = Flask(__name__)
api = Api(app)

port = 5100

prolog = Prolog()


class HelloWorld(Resource):
    def get(self):
        return {'hello': 'world'}


api.add_resource(HelloWorld, '/')


def launch():
    app.run(
        host="0.0.0.0",
        port=port,
        debug=True)
