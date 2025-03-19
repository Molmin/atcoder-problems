Score : $350$ points

## Problem Statement

This problem is a simplified version of Problem F.

You are given an integer sequence of length $N$: $A = (A_1, A_2, \ldots, A_N)$.

When splitting $A$ at one position into two non-empty (contiguous) subarrays, find the maximum possible sum of the counts of distinct integers in those subarrays.

More formally, find the maximum sum of the following two values for an integer $i$ such that $1 \leq i \leq N-1$: the count of distinct integers in $(A_1, A_2, \ldots, A_i)$, and the count of distinct integers in $(A_{i+1}, A_{i+2}, \ldots, A_N)$.

## Constraints

- $2 \leq N \leq 3 \times 10^5$
- $1 \leq A_i \leq N$ ($1 \leq i \leq N$)
- All input values are integers.

## Input

The input is given from Standard Input in the following format:

> $N$
> 
> $A_1$ $A_2$ $\ldots$ $A_N$

## Output

Print the answer.

```input1
5
3 1 4 1 5
```

```output1
5
```

- For $i=1$, $(3)$ contains $1$ distinct integer, and $(1,4,1,5)$ contains $3$ distinct integers, for a total of $4$.
- For $i=2$, $(3,1)$ contains $2$ distinct integers, and $(4,1,5)$ contains $3$ distinct integers, for a total of $5$.
- For $i=3$, $(3,1,4)$ contains $3$ distinct integers, and $(1,5)$ contains $2$ distinct integers, for a total of $5$.
- For $i=4$, $(3,1,4,1)$ contains $3$ distinct integers, and $(5)$ contains $1$ distinct integer, for a total of $4$.

Therefore, the maximum sum is $5$ for $i=2,3$.

```input2
10
2 5 6 5 2 1 7 9 7 2
```

```output2
8
```