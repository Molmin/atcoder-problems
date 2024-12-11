Score: $425$ points

## Problem Statement

You are given integers $N$ and $M$.

Print all integer sequences $(A_1, A_2, \ldots, A_N)$ of length $N$ that satisfy all of the following conditions, in lexicographical order.

- $1 \leq A_i$
- $A_{i - 1} + 10 \leq A_i$ for each integer $i$ from $2$ through $N$
- $A_N \leq M$

What is lexicographical order?

A sequence $S = (S_1, S_2, \ldots, S_N)$ of length $N$ is **smaller in lexicographical order** than a sequence $T = (T_1, T_2, \ldots, T_N)$ of length $N$ if and only if there exists an integer $1 \leq i \leq N$ such that both of the following hold:

- $(S_1, S_2, \ldots, S_{i-1}) = (T_1, T_2, \ldots, T_{i-1})$
- $S_i$ is less than $T_i$ (as a number).

## Constraints

- $2 \leq N \leq 12$
- $10N - 9 \leq M \leq 10N$
- All input values are integers.

## Input

The input is given from Standard Input in the following format:

> $N$ $M$

## Output

Let $X$ be the number of integer sequences that satisfy the conditions, and print $X + 1$ lines.

The first line should contain the value of $X$.

The $(i + 1)$-th line ($1 \leq i \leq X$) should contain the $i$-th smallest integer sequence in lexicographical order, with elements separated by spaces.

```input1
3 23
```

```output1
10
1 11 21
1 11 22
1 11 23
1 12 22
1 12 23
1 13 23
2 12 22
2 12 23
2 13 23
3 13 23
```

$(1, 11, 21), (1, 11, 22), (1, 11, 23), (1, 12, 22), (1, 12, 23), (1, 13, 23), (2, 12, 22), (2, 12, 23), (2, 13, 23), (3, 13, 23)$ are the $10$ sequences that satisfy the conditions.