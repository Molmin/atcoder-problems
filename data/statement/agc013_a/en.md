Score : $300$ points

## Problem Statement

You are given an array $A$ of length $N$.
Your task is to divide it into several contiguous subarrays.
Here, all subarrays obtained must be sorted in either non-decreasing or non-increasing order.
At least how many subarrays do you need to divide $A$ into?

## Constraints

- $1 \leq N \leq 10^5$
- $1 \leq A_i \leq 10^9$
- Each $A_i$ is an integer.

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $A_1$ $A_2$ $...$ $A_N$

## Output

Print the minimum possible number of subarrays after division of $A$.

```input1
6
1 2 3 2 2 1
```

```output1
2
```

One optimal solution is to divide the array into $[1,2,3]$ and $[2,2,1]$.

```input2
9
1 2 1 2 1 2 1 2 1
```

```output2
5
```

```input3
7
1 2 3 2 1 999999999 1000000000
```

```output3
3
```