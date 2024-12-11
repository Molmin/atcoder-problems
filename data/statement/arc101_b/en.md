Score : $700$ points

## Problem Statement

We will define the **median** of a sequence $b$ of length $M$, as follows:

- Let $b'$ be the sequence obtained by sorting $b$ in non-decreasing order. Then, the value of the $(M / 2 + 1)$-th element of $b'$ is the median of $b$. Here, $/$ is integer division, rounding down.

For example, the median of $(10, 30, 20)$ is $20$; the median of $(10, 30, 20, 40)$ is $30$; the median of $(10, 10, 10, 20, 30)$ is $10$.

Snuke comes up with the following problem.

You are given a sequence $a$ of length $N$.
For each pair $(l, r)$ ($1 \leq l \leq r \leq N$), let $m_{l, r}$ be the median of the contiguous subsequence $(a_l, a_{l + 1}, ..., a_r)$ of $a$.
We will list $m_{l, r}$ for all pairs $(l, r)$ to create a new sequence $m$.
Find the median of $m$.

## Constraints

- $1 \leq N \leq 10^5$
- $a_i$ is an integer.
- $1 \leq a_i \leq 10^9$

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $a_1$ $a_2$ $...$ $a_N$

## Output

Print the median of $m$.

```input1
3
10 30 20
```

```output1
30
```

The median of each contiguous subsequence of $a$ is as follows:

- The median of $(10)$ is $10$.
- The median of $(30)$ is $30$.
- The median of $(20)$ is $20$.
- The median of $(10, 30)$ is $30$.
- The median of $(30, 20)$ is $30$.
- The median of $(10, 30, 20)$ is $20$.

Thus, $m = (10, 30, 20, 30, 30, 20)$ and the median of $m$ is $30$.

```input2
1
10
```

```output2
10
```

```input3
10
5 9 5 9 8 9 3 5 4 3
```

```output3
8
```