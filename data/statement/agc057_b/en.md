Score : $700$ points

## Problem Statement

You are given a sequence $A = (A_1, A_2, \ldots, A_N)$ of positive integers and a positive integer $X$.
You can perform the operation below any number of times, possibly zero:

- Choose an index $i$ ($1\leq i\leq N$) and a non-negative integer $x$ such that $0\leq x\leq X$. Change $A_i$ to $2A_i+x$.

Find the smallest possible value of $\max\{A_1,A_2,\ldots,A_N\}-\min\{A_1,A_2,\ldots,A_N\}$ after your operations.

## Constraints

- $2\leq N\leq 10^5$
- $1\leq X\leq 10^9$
- $1\leq A_i\leq 10^9$

## Input

Input is given from Standard Input in the following format:

> $N$ $X$
> 
> $A_1$ $A_2$ $\ldots$ $A_N$

## Output

Print the smallest possible value of $\max\{A_1,A_2,\ldots,A_N\}-\min\{A_1,A_2,\ldots,A_N\}$ after your operations.

```input1
4 2
5 8 12 20
```

```output1
6
```

Let $(i, x)$ denote an operation that changes $A_i$ to $2A_i+x$. An optimal sequence of operations is

- $(1,0)$, $(1,1)$, $(2,2)$, $(3,0)$

which yields $A = (21, 18, 24, 20)$, achieving $\max\{A_1,A_2,A_3,A_4\}-\min\{A_1,A_2,A_3,A_4\} = 6$.

```input2
4 5
24 25 26 27
```

```output2
0
```

An optimal sequence of operations is

- $(1,5)$, $(1,5)$, $(2,5)$, $(2,1)$, $(3,2)$, $(3,3)$, $(4,0)$, $(4,3)$

which yields $A = (111,111,111,111)$, achieving $\max\{A_1,A_2,A_3,A_4\}-\min\{A_1,A_2,A_3,A_4\} = 0$.

```input3
4 1
24 25 26 27
```

```output3
3
```

Performing no operations achieves $\max\{A_1,A_2,A_3,A_4\}-\min\{A_1,A_2,A_3,A_4\} = 3$.

```input4
10 5
39 23 3 7 16 19 40 16 33 6
```

```output4
13
```