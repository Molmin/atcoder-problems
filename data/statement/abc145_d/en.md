Score : $400$ points

## Problem Statement

There is a knight - the chess piece - at the origin $(0, 0)$ of a two-dimensional grid.

When the knight is at the square $(i, j)$, it can be moved to either $(i+1,j+2)$ or $(i+2, j+1)$.

In how many ways can the knight reach the square $(X, Y)$?

Find the number of ways modulo $10^9 + 7$.

## Constraints

- $1 \leq X \leq 10^6$
- $1 \leq Y \leq 10^6$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $X$ $Y$

## Output

Print the number of ways for the knight to reach $(X, Y)$ from $(0, 0)$, modulo $10^9 + 7$.

```input1
3 3
```

```output1
2
```

There are two ways: $(0,0) \to (1,2) \to (3,3)$ and $(0,0) \to (2,1) \to (3,3)$.

```input2
2 2
```

```output2
0
```

The knight cannot reach $(2,2)$.

```input3
999999 999999
```

```output3
151840682
```

Print the number of ways modulo $10^9 + 7$.