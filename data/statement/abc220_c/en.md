Score : $300$ points

## Problem Statement

We have a sequence of $N$ positive integers: $A=(A_1,\dots,A_N)$.<br>
Let $B$ be the concatenation of $10^{100}$ copies of $A$.

Consider summing up the terms of $B$ from left to right. When does the sum exceed $X$ for the first time?<br>
In other words, find the minimum integer $k$ such that:

$\displaystyle{\sum_{i=1}^{k} B_i \gt X}$.

## Constraints

- $1 \leq N \leq 10^5$
- $1 \leq A_i \leq 10^9$
- $1 \leq X \leq 10^{18}$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $A_1$ $\ldots$ $A_N$
> 
> $X$

## Output

Print the answer.

```input1
3
3 5 2
26
```

```output1
8
```

We have $B=(3,5,2,3,5,2,3,5,2,\dots)$.<br>
$\displaystyle{\sum_{i=1}^{8} B_i = 28 \gt 26}$ holds, but the condition is not satisfied when $k$ is $7$ or less, so the answer is $8$.

```input2
4
12 34 56 78
1000
```

```output2
23
```