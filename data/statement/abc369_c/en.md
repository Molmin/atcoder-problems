Score : $300$ points

## Problem Statement

You are given a sequence of $N$ positive integers $A=(A_1,A_2,\dots,A_N)$.

Find the number of pairs of integers $(l,r)$ satisfying $1\leq l\leq r\leq N$ such that the subsequence $(A_l,A_{l+1},\dots,A_r)$ forms an arithmetic progression.

A sequence $(x_1,x_2,\dots,x_{|x|})$ is an arithmetic progression if and only if there exists a $d$ such that $x_{i+1}-x_i=d\ (1\leq i &lt; |x|)$.
In particular, a sequence of length $1$ is always an arithmetic progression.

## Constraints

- $1\leq N \leq 2\times 10^5$
- $1\leq A_i \leq 10^9$
- All input values are integers.

## Input

The input is given from Standard Input in the following format:

> $N$
> 
> $A_1$ $A_2$ $\dots$ $A_N$

## Output

Print the answer.

```input1
4
3 6 9 3
```

```output1
8
```

There are eight pairs of integers $(l,r)$ satisfying the condition: $(1,1),(2,2),(3,3),(4,4),(1,2),(2,3),(3,4),(1,3)$.

Indeed, when $(l,r)=(1,3)$, $(A_l,\dots,A_r)=(3,6,9)$ is an arithmetic progression, so it satisfies the condition.
However, when $(l,r)=(2,4)$, $(A_l,\dots,A_r)=(6,9,3)$ is not an arithmetic progression, so it does not satisfy the condition.

```input2
5
1 1 1 1 1
```

```output2
15
```

All pairs of integers $(l,r)\ (1\leq l\leq r\leq 5)$ satisfy the condition.

```input3
8
87 42 64 86 72 58 44 30
```

```output3
22
```