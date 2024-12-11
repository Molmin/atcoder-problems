Score : $300$ points

## Problem Statement

You are given a sequence of $N$ numbers: $A=(A_1,\ldots,A_N)$.

Determine whether there is a pair $(i,j)$ with $1\leq i,j \leq N$ such that $A_i-A_j=X$.

## Constraints

- $2 \leq N \leq 2\times 10^5$
- $-10^9 \leq A_i \leq 10^9$
- $-10^9 \leq X \leq 10^9$
- All values in the input are integers.

## Input

The input is given from Standard Input in the following format:

> $N$ $X$
> 
> $A_1$ $\ldots$ $A_N$

## Output

Print `Yes` if there is a pair $(i,j)$ with $1\leq i,j \leq N$ such that $A_i-A_j=X$, and `No` otherwise.

```input1
6 5
3 1 4 1 5 9
```

```output1
Yes
```

We have $A_6-A_3=9-4=5$.

```input2
6 -4
-2 -7 -1 -8 -2 -8
```

```output2
No
```

There is no pair $(i,j)$ such that $A_i-A_j=-4$.

```input3
2 0
141421356 17320508
```

```output3
Yes
```

We have $A_1-A_1=0$.