Score : $100$ points

## Problem Statement

Snuke is giving cookies to his three goats.

He has two cookie tins. One contains $A$ cookies, and the other contains $B$ cookies. He can thus give $A$ cookies, $B$ cookies or $A+B$ cookies to his goats (he cannot open the tins).

Your task is to determine whether Snuke can give cookies to his three goats so that each of them can have the same number of cookies.

## Constraints

- $1 \leq A,B \leq 100$
- Both $A$ and $B$ are integers.

## Input

Input is given from Standard Input in the following format:

> $A$ $B$

## Output

If it is possible to give cookies so that each of the three goats can have the same number of cookies, print `Possible`; otherwise, print `Impossible`.

```input1
4 5
```

```output1
Possible
```

If Snuke gives nine cookies, each of the three goats can have three cookies.

```input2
1 1
```

```output2
Impossible
```

Since there are only two cookies, the three goats cannot have the same number of cookies no matter what Snuke gives to them.