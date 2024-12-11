Score : $200$ points

## Problem Statement

You are given an integer sequence $A=(A_1,\ldots,A_N)$ of length $N$. Here, $A_1, A_2, \ldots, A_N$ are all distinct.

Which element in $A$ is the second largest?

## Constraints

- $2 \leq N \leq 100$
- $1 \leq A_i \leq 10^9$
- $A_1, A_2, \ldots, A_N$ are all distinct.
- All input values are integers.

## Input

The input is given from Standard Input in the following format:

> $N$ 
> 
> $A_1$ $A_2$ $\ldots$ $A_{N}$

## Output

Print the integer $X$ such that the $X$-th element in $A$ is the second largest.

```input1
4
8 2 5 1
```

```output1
3
```

The second largest element in $A$ is $A_3$, so print $3$.

```input2
8
1 2 3 4 5 10 9 11
```

```output2
6
```