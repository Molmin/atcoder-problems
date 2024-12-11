Score : $300$ points

## Problem Statement

Given are three sequences of length $N$ each: $A = (A_1, A_2, \dots, A_N)$, $B = (B_1, B_2, \dots, B_N)$, and $C = (C_1, C_2, \dots, C_N)$, consisting of integers between $1$ and $N$ (inclusive).

How many pairs $(i, j)$ of integers between $1$ and $N$ (inclusive) satisfy $A_i = B_{C_j}$?

## Constraints

- $1 \leq N \leq 10^5$
- $1 \leq A_i, B_i, C_i \leq N$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $A_1$ $A_2$ $\ldots$ $A_N$
> 
> $B_1$ $B_2$ $\ldots$ $B_N$
> 
> $C_1$ $C_2$ $\ldots$ $C_N$

## Output

Print the number of pairs $(i, j)$ such that $A_i = B_{C_j}$.

```input1
3
1 2 2
3 1 2
2 3 2
```

```output1
4
```

Four pairs satisfy the condition: $(1, 1), (1, 3), (2, 2), (3, 2)$.

```input2
4
1 1 1 1
1 1 1 1
1 2 3 4
```

```output2
16
```

All the pairs satisfy the condition.

```input3
3
2 3 3
1 3 3
1 1 1
```

```output3
0
```

No pair satisfies the condition.