Score : $300$ points

## Problem Statement

You are given a positive integer $N$ and an integer sequence $A = (A_1,A_2,\dots,A_N)$ of length $N$.

Determine whether there exists a non-empty (contiguous) subarray of $A$ that has a repeated value, occurring multiple times in $A$. If such a subarray exists, find the length of the shortest such subarray.

## Constraints

- $1 \leq N \leq 2 \times 10^5$
- $1 \leq A_i \leq 10^6 \ (1 \leq i \leq N)$
- All input values are integers.

## Input

The input is given from Standard Input in the following format:

> $N$
> 
> $A_1$ $A_2$ $\dots$ $A_N$

## Output

If there is no (contiguous) subarray satisfying the condition in the problem statement, print `-1`. Otherwise, print the length of the shortest such subarray.

```input1
5
3 9 5 3 1
```

```output1
4
```

$(3,9,5,3)$ and $(3,9,5,3,1)$ satisfy the condition. The shorter one is $(3,9,5,3)$, which has length $4$.

```input2
4
2 5 3 1
```

```output2
-1
```

There is no subarray that satisfies the condition.

```input3
10
1 1 2 3 5 8 13 21 34 55
```

```output3
2
```