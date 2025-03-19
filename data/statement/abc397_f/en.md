Score : $550$ points

## Problem Statement

This problem is a harder version of Problem C. Here, the sequence is split into three subarrays.

You are given an integer sequence of length $N$: $A = (A_1, A_2, \ldots, A_N)$.

When splitting $A$ at two positions into three non-empty (contiguous) subarrays, find the maximum possible sum of the counts of distinct integers in those subarrays.

More formally, find the maximum sum of the following three values for a pair of integers $(i,j)$ such that $1 \leq i &lt; j \leq N-1$: the count of distinct integers in $(A_1, A_2, \ldots, A_i)$, the count of distinct integers in $(A_{i+1},A_{i+2},\ldots,A_j)$, and the count of distinct integers in $(A_{j+1},A_{j+2},\ldots,A_{N})$.

## Constraints

- $3 \leq N \leq 3 \times 10^5$
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

If we let $(i,j) = (2,4)$ to split the sequence into three subarrays $(3,1)$, $(4,1)$, $(5)$, the counts of distinct integers in those subarrays are $2$, $2$, $1$, respectively, for a total of $5$. This sum cannot be greater than $5$, so the answer is $5$. Other partitions, such as $(i,j) = (1,3), (2,3), (3,4)$, also achieve this sum.

```input2
10
2 5 6 4 4 1 1 3 1 4
```

```output2
9
```