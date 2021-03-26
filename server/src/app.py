from .entities.flask import app
from .entities.prolog import *
from .api.router import *


def launch():
    app.run(
        host="0.0.0.0",
        port=5000,
        debug=True)
