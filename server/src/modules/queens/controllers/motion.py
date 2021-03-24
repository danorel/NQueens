from ....entities import prolog


def commit_motion():
    prolog.consult("motion.pl")
    list(prolog.query("L=%s,sudoku(L)" % p, maxresult=1))
    for soln in prolog.query("father(X,Y)"):
        print(soln["X"], "is the father of", soln["Y"])
