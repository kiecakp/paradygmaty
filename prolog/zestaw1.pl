% ------- zadanie 2 ---------

color(red, green).
color(red, blue).
color(green, blue).
color(green, red).
color(blue, red).
color(blue, green).

obok(Po, Lu, Ma, Pd, Wm) :-
    color(Po, Lu),
    color(Lu, Ma),
    color(Lu, Pd),
    color(Lu, Po),
    color(Ma, Lu),
    color(Ma, Pd),
    color(Ma, Wm),
    color(Pd, Lu),
    color(Pd, Wm),
    color(Pd, Ma),
    color(Wm, Po),
    color(Wm, Ma).

% ?-obok(Po,Lu,Ma,Pd,Wm).

% ------- zadanie 3 ---------

nwd(X, Y, Nwd) :-
    X = Y, 
    Nwd = X.

nwd(X, Y, Nwd) :-
    X > Y,
    X1 is X - Y,
    nwd(X1, Y, Nwd).

nwd(X, Y, Nwd) :-
    X < Y,
    Y1 is Y - X,
    nwd(X, Y1, Nwd).

% ?-nwd(10, 5, Nwd).

% ------- zadanie 4 ---------

% skladnik(Produkt, Skladnik).
skladnik(p1, s1).
skladnik(p1, s2).
skladnik(p1, s3).

skladnik(p2, s2).
skladnik(p2, s4).

skladnik(p3, s1).
skladnik(p3, s3).

dostepny(s1).
dostepny(s2).
dostepny(s4).

moznaprodukowac(Produkt) :-
    \+ (skladnik(Produkt, S), \+ dostepny(S)).

potrzebuje(Produkt, Skladnik) :- skladnik(Produkt, Skladnik).

% ------- zadanie 7 ---------

nalezy(X, Lista) :- select(X, Lista, _), !.

% ------- zadanie 8 ---------

dlugosc([], 0).
dlugosc(Lista, Dl) :-
    select(_, Lista, Reszta),
    dlugosc(Reszta, Dl1),
    Dl is Dl1 + 1, !.

% ------- zadanie 9 ---------

suma([], 0).
suma(Lista, S) :-
    select(X, Lista, Reszta),
    suma(Reszta, S2),
    S is S2 + X, !.

% ------- zadanie 10 ---------

ostatni(X, [X]).
ostatni(X, [_|T]) :- ostatni(X, T), !. 

% ------- zadanie 11 ---------

odwroc([], []).
odwroc([H|T], Odwrocona) :-
    odwroc(T, OdwroconaT),
    append(OdwroconaT, [H], Odwrocona).
