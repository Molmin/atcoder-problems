Score : $900$ points

## Problem Statement

Define the **cost** of a sequence $X$ as (the maximum value of $X$ minus the minimum value of $X$).

You are given sequences $A = (A_1, \ldots, A_N)$ and $B = (B_1, \ldots, B_N)$ of length $N$. Solve the following problem for $k = 1, 2, \ldots, N$.

- Find the minimum possible cost of the sequence $C = (C_1, \ldots, C_k)$ whose $i$-th element $C_i$ is $A_i$ or $B_i$.

## Constraints

- All input numbers are integers.
- $1 \leq N \leq 5 \times 10^5$
- $1 \leq A_i, B_i \leq 10^9$

## Input

The input is given from Standard Input in the following format:

> $N$ 
> 
> $A_1$ $\ldots$ $A_N$
> 
> $B_1$ $\ldots$ $B_N$

## Output

Print $N$ lines.

The $i$-th line $(1 \leq i \leq N)$ should contain the minimum possible cost of sequence $C$ for $k = i$.

```input1
3
8 11 10
7 6 1
```

```output1
0
1
3
```

For $k=1$, if we choose $C = (8)$, the cost of $C$ is $0$, which is the minimum.

For $k=2$, if we choose $C = (7,6)$, the cost of $C$ is $1$, which is the minimum.

For $k=3$, if we choose $C = (8,11,10)$, the cost of $C$ is $3$, which is the minimum.

```input2
10
43 35 36 58 25 7 61 4 96 3
55 29 88 15 99 49 67 57 92 49
```

```output2
0
8
8
23
28
33
36
36
64
64
```