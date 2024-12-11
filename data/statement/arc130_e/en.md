Score : $800$ points

## Problem Statement

Consider doing the operation below on a sequence of $N$ positive integers $A = (A_1, A_2, \ldots, A_N)$ to obtain a sequence $I = (i_1, i_2, \ldots, i_K)$.

- For each $k = 1, 2, \ldots, K$ in this order, do the following.-   - Choose an $i$ such that $A_i = \min\{A_1, A_2, \ldots, A_N\}$.
-   - Let $i_k = i$.
-   - Add $1$ to $A_i$.

You are given integers $N$, $K$, and a sequence $I$.

Determine whether there exists a sequence of positive integers $A$ for which it is possible to obtain $I$ from the operation. If it exists, find the lexicographically smallest such sequence.

## Constraints

- $1\leq N, K\leq 3\times 10^5$
- $1\leq i_k\leq N$

## Input

Input is given from Standard Input in the following format:

> $N$ $K$
> 
> $i_1$ $i_2$ $\ldots$ $i_K$

## Output

If there is no sequence of positive integers $A$ for which it is possible to obtain $I$ from the operation, print `-1`.
If it exists, print the lexicographically smallest among such sequences $A$, in one line, with spaces in between.

```input1
4 6
1 1 4 4 2 1
```

```output1
1 3 3 2
```

Some of the sequences for which it is possible to obtain $I = (1,1,4,4,2,1)$ from the operation are $(1, 3, 3, 2)$ and $(2, 4, 5, 3)$. The lexicographically smallest among them is $(1, 3, 3, 2)$.

```input2
4 6
2 2 2 2 2 2
```

```output2
6 1 6 6
```

```input3
4 6
1 1 2 2 3 3
```

```output3
-1
```