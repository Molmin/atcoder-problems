Score : $300$ points

## Problem Statement

You are given a sequence $A=(A_1,A_2,\ldots,A_N)$ of length $N$ consisting of non-negative integers.

Determine if there is an even number represented as the sum of two different elements of $A$.  If it exists, find the maximum such number.

## Constraints

- $2\leq N \leq 2\times 10^5$
- $0\leq A_i\leq 10^9$
- The elements of $A$ are distinct.
- All values in the input are integers.

## Input

The input is given from Standard Input in the following format:

> $N$
> 
> $A_1$ $A_2$ $\ldots$ $A_N$

## Output

Print `-1` if there is no even number represented as the sum of two different elements of $A$.

If such an even number exists, print the maximum such number.

```input1
3
2 3 4
```

```output1
6
```

The values represented as the sum of two distinct elements of $A$ are $5$, $6$, and $7$.  We have an even number here, and the maximum is $6$.

```input2
2
1 0
```

```output2
-1
```

The value represented as the sum of two distinct elements of $A$ is $1$.  We have no even number here, so `-1` should be printed.