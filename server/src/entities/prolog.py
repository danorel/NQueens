from pyswip import Prolog
from ..pl.dirs import resolver_path

prolog = Prolog()

prolog.consult(resolver_path)
