Score : $400$ points

## Problem Statement

There are $N$ cells arranged in a row, numbered $1, 2, \ldots, N$ from left to right.

Tak lives in these cells and is currently on Cell $1$. He is trying to reach Cell $N$ by using the procedure described below.

You are given an integer $K$ that is less than or equal to $10$, and $K$ non-intersecting segments $[L_1, R_1], [L_2, R_2], \ldots, [L_K, R_K]$.
Let $S$ be the union of these $K$ segments.
Here, the segment $[l, r]$ denotes the set consisting of all integers $i$ that satisfy $l \leq i \leq r$.

- When you are on Cell $i$, pick an integer $d$ from $S$ and move to Cell $i + d$. You cannot move out of the cells.

To help Tak, find the number of ways to go to Cell $N$, modulo $998244353$.

## Constraints

- $2 \leq N \leq 2 \times 10^5$
- $1 \leq K \leq \min(N, 10)$
- $1 \leq L_i \leq R_i \leq N$
- $[L_i, R_i]$ and $[L_j, R_j]$ do not intersect ($i \neq j$)
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$ $K$
> 
> $L_1$ $R_1$
> 
> $L_2$ $R_2$
> 
> $:$
> 
> $L_K$ $R_K$

## Output

Print the number of ways for Tak to go from Cell $1$ to Cell $N$, modulo $998244353$.

```input1
5 2
1 1
3 4
```

```output1
4
```

The set $S$ is the union of the segment $[1, 1]$ and the segment $[3, 4]$, therefore $S = \{ 1, 3, 4 \}$ holds.

There are $4$ possible ways to get to Cell $5$:

- $1 \to 2 \to 3 \to 4 \to 5$,
- $1 \to 2 \to 5$,
- $1 \to 4 \to 5$ and
- $1 \to 5$.

```input2
5 2
3 3
5 5
```

```output2
0
```

Because $S = \{ 3, 5 \}$ holds, you cannot reach to Cell $5$.
Print $0$.

```input3
5 1
1 2
```

```output3
5
```

```input4
60 3
5 8
1 3
10 15
```

```output4
221823067
```

Note that you have to print the answer modulo $998244353$.