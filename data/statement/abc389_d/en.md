Score : $400$ points

## Problem Statement

On the two-dimensional coordinate plane, there is an infinite tiling of $1 \times 1$ squares.

Consider drawing a circle of radius $R$ centered at the center of one of these squares. How many of these squares are completely contained inside the circle?

More precisely, find the number of integer pairs $(i,j)$ such that all four points $(i+0.5,j+0.5)$, $(i+0.5,j-0.5)$, $(i-0.5,j+0.5)$, and $(i-0.5,j-0.5)$ are at a distance of at most $R$ from the origin.

## Constraints

- $1 \leq R \leq 10^{6}$
- All input values are integers.

## Input

The input is given from Standard Input in the following format:

> $R$

## Output

Print the answer.

```input1
2
```

```output1
5
```

There are a total of five squares completely contained in the circle: the square whose center matches the circle’s center, plus the four squares adjacent to it.

```input2
4
```

```output2
37
```

```input3
26
```

```output3
2025
```