% Prolog Next Queen Move Solver (C) 2021 Danyil Orel (mail.ordan@gmail.com)
% Public domain code.

:- use_module(library(bounds)).

% Calculate the next possible move for queen

move(X, Y) :-
    X is 1,
    Y is 1,
    .
