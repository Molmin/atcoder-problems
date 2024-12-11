Score : $200$ points

## Problem Statement

You are given an integer sequence $A=(A_1,A_2,\ldots,A_N)$ of length $N$ and integers $L$ and $R$ such that $L\leq R$.

For each $i=1,2,\ldots,N$, find the integer $X_i$ that satisfies both of the following conditions. Note that the integer to be found is always uniquely determined.

- $L\leq X_i \leq R$.
- For every integer $Y$ such that $L \leq Y \leq R$, it holds that $|X_i - A_i| \leq |Y - A_i|$.

## Constraints

- $1\leq N\leq 2\times 10^5$
- $1\leq L\leq R \leq 10^9$
- $1\leq A_i\leq 10^9$
- All input values are integers.

## Input

The input is given from Standard Input in the following format:

> $N$ $L$ $R$
> 
> $A_1$ $\ldots$ $A_N$

## Output

Print $X_i$ for $i=1,2,\ldots,N$, separated by spaces.

```input1
5 4 7
3 1 4 9 7
```

```output1
4 4 4 7 7
```

For $i=1$:

- $|4-3|=1$
- $|5-3|=2$
- $|6-3|=3$
- $|7-3|=4$

Thus, $X_i = 4$.

```input2
3 10 10
11 10 9
```

```output2
10 10 10
```