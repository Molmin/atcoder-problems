Score : $800$ points

## Problem Statement

Let us consider the problem below for a permutation $P = (P_1, P_2, \ldots, P_N)$ of $(1, 2, \ldots, N)$, and denote the answer by $f(P)$.

We have an $(N+2)\times (N+2)$ grid, where the rows are numbered $0, 1, \ldots, N+1$ from top to bottom and the columns are numbered $0, 1, \ldots, N+1$ from left to right. Let $(i,j)$ denote the square at the $i$-th row and $j$-th column.

Consider paths from $(0, 0)$ to $(N+1, N+1)$ where we repeatedly move one square right or one square down. However, for each $1\leq i\leq N$, we must not visit the square $(i, P_i)$. How many such paths are there?

You are given a positive integer $N$ and an integer sequence $A = (A_1, A_2, \ldots, A_N)$, where each $A_i$ is $-1$ or an integer between $1$ and $N$ (inclusive).

Consider all permutations $P = (P_1, P_2, \ldots, P_N)$ of $(1, 2, \ldots, N)$ satisfying $A_i\neq -1 \implies P_i = A_i$. Find the sum of $f(P)$ over all such $P$, modulo $998244353$.

## Constraints

- $1\leq N\leq 200$
- $A_i = -1$ or $1\leq A_i\leq N$.
- $A_i\neq A_j$ if $A_i\neq -1$ and $A_j\neq -1$, for $i\neq j$.

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $A_1$ $A_2$ $\ldots$ $A_N$

## Output

Print the answer.

```input1
4
1 -1 4 -1
```

```output1
41
```

We want to find the sum of $f(P)$ over two permutations $P = (1,2,4,3)$ and $P = (1,3,4,2)$. The figure below shows the impassable squares for each of them, where `.` and `#` represent a passable and impassable square, respectively.

```output1
......         ......
  .#....         .#....
  ..#...         ...#..
  ....#.         ....#.
  ...#..         ..#...
  ......         ......
P=(1,2,4,3)    P=(1,3,4,2)
```

- For $P = (1,2,4,3)$, we have $f(P) = 18$.
- For $P = (1,3,4,2)$, we have $f(P) = 23$.

The answer is the sum of them: $41$.

```input2
4
4 3 2 1
```

```output2
2
```

In this sample, we want to compute $f(P)$ for just one permutation $P = (4,3,2,1)$.

```input3
3
-1 -1 -1
```

```output3
48
```

- For $P = (1,2,3)$, we have $f(P) = 10$.
- For $P = (1,3,2)$, we have $f(P) = 6$.
- For $P = (2,1,3)$, we have $f(P) = 6$.
- For $P = (2,3,1)$, we have $f(P) = 12$.
- For $P = (3,1,2)$, we have $f(P) = 12$.
- For $P = (3,2,1)$, we have $f(P) = 2$.

The answer is the sum of them: $48$.