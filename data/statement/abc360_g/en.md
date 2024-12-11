Score : $625$ points

## Problem Statement

You are given an integer sequence $A$ of length $N$. Takahashi will perform the following operation exactly once:

- Choose an integer $x$ between $1$ and $N$, inclusive, and an arbitrary integer $y$. Replace $A_x$ with $y$.

Find the maximum possible length of a longest increasing subsequence (LIS) of $A$ after performing the operation.

What is longest increasing subsequence?

A subsequence of a sequence $A$ is a sequence that can be derived from $A$ by extracting some elements without changing the order.

A longest increasing subsequence of a sequence $A$ is a longest subsequence of $A$ that is strictly increasing.

## Constraints

- $1 \leq N \leq 2 \times 10^5$
- $1 \leq A_i \leq 10^9$

## Input

The input is given from Standard Input in the following format:

> $N$
> 
> $A_1$ $A_2$ $\cdots$ $A_N$

## Output

Print the answer on a single line.

```input1
4
3 2 2 4
```

```output1
3
```

The length of a LIS of the given sequence $A$ is $2$. For example, if you replace $A_1$ with $1$, the length of a LIS of $A$ becomes $3$, which is the maximum.

```input2
5
4 5 3 6 7
```

```output2
4
```