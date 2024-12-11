Score : $1200$ points

## Problem Statement

You are given integers $N$, $M$, $X$, and $Y$.

Find the number, modulo $998244353$, of pairs $(A, B)$ of sequences $A=(a_1,\ldots,a_N)$ and $B=(b_1,\ldots,b_N)$ that satisfy all of the following conditions:

- $A = (a_1, \ldots, a_N)$ is a sequence of non-negative integers.
- $B = (b_1, \ldots, b_N)$ is a subsequence of $(0, 1, \ldots, M - 1)$.
- $\sum\limits_{i=1}^{N} a_i = X$.
- $\sum\limits_{i=1}^{N} a_i b_i = Y$.

## Constraints

- $1 \leq N \leq M \leq 2 \times 10^5$
- $1 \leq X, Y \leq 2 \times 10^5$
- All input values are integers.

## Input

The input is given from Standard Input in the following format:

> $N$ $M$ $X$ $Y$

## Output

Print the answer modulo $998244353$.

```input1
3 4 3 4
```

```output1
5
```

Here are the five pairs $(A, B)$ satisfying the conditions:

- $A = (0, 2, 1)$, $B = (0, 1, 2)$
- $A = (1, 0, 2)$, $B = (0, 1, 2)$
- $A = (1, 1, 1)$, $B = (0, 1, 3)$
- $A = (1, 2, 0)$, $B = (0, 2, 3)$
- $A = (2, 1, 0)$, $B = (1, 2, 3)$

```input2
1 1 1 1
```

```output2
0
```

There are no pairs $(A, B)$ satisfying the conditions.

```input3
12345 67890 9876 54321
```

```output3
150392014
```

Find the count modulo $998244353$.