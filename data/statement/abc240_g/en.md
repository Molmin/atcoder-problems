Score : $600$ points

## Problem Statement

Takahashi is in the square $(0, 0, 0)$ in an infinite three-dimensional grid.

He can teleport between squares.
From the square $(x, y, z)$, he can move to $(x+1, y, z)$, $(x-1, y, z)$, $(x, y+1, z)$, $(x, y-1, z)$, $(x, y, z+1)$, or $(x, y, z-1)$ in one teleport. (Note that he cannot stay in the square $(x, y, z)$.)

Find the number of routes ending in the square $(X, Y, Z)$ after exactly $N$ teleports.

In other words, find the number of sequences of $N+1$ triples of integers $\big( (x_0, y_0, z_0), (x_1, y_1, z_1), (x_2, y_2, z_2), \ldots, (x_N, y_N, z_N)\big)$ that satisfy all three conditions below.

- $(x_0, y_0, z_0) = (0, 0, 0)$.
- $(x_N, y_N, z_N) = (X, Y, Z)$.
- $|x_i-x_{i-1}| + |y_i-y_{i-1}| + |z_i-z_{i-1}| = 1$ for each $i = 1, 2, \ldots, N$.

Since the number can be enormous, print it modulo $998244353$.

## Constraints

- $1 \leq N \leq 10^7$
- $-10^7 \leq X, Y, Z \leq 10^7$
- $N$, $X$, $Y$, and $Z$ are integers.

## Input

Input is given from Standard Input in the following format:

> $N$ $X$ $Y$ $Z$

## Output

Print the number modulo $998244353$.

```input1
3 2 0 -1
```

```output1
3
```

There are three routes ending in the square $(2, 0, -1)$ after exactly $3$ teleports:

- $(0, 0, 0) \rightarrow (1, 0, 0) \rightarrow (2, 0, 0) \rightarrow(2, 0, -1)$
- $(0, 0, 0) \rightarrow (1, 0, 0) \rightarrow (1, 0, -1) \rightarrow(2, 0, -1)$
- $(0, 0, 0) \rightarrow (0, 0, -1) \rightarrow (1, 0, -1) \rightarrow(2, 0, -1)$

```input2
1 0 0 0
```

```output2
0
```

Note that exactly $N$ teleports should be performed, and they do not allow him to stay in the same position.

```input3
314 15 92 65
```

```output3
106580952
```

Be sure to print the number modulo $998244353$.