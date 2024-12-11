Score : $425$ points

## Problem Statement

A sequence $X = (X_1, X_2, \ldots)$ of positive integers (possibly empty) is called a **1122 sequence** if and only if it satisfies all of the following three conditions: (The definition of a 1122 sequence is the same as in Problem F.)

- $\lvert X \rvert$ is even. Here, $\lvert X \rvert$ denotes the length of $X$.
- For each integer $i$ satisfying $1\leq i\leq \frac{|X|}{2}$, $X_{2i-1}$ and $X_{2i}$ are equal.
- Each positive integer appears in $X$ either not at all or exactly twice. That is, every positive integer contained in $X$ appears exactly twice in $X$.

Given a sequence $A = (A_1, A_2, \ldots, A_N)$ of length $N$ consisting of positive integers, print the maximum length of a **(contiguous) subarray** of $A$ that is a 1122 sequence.

## Constraints

- $1\leq N \leq 2 \times 10^5$
- $1\leq A_i \leq N$
- All input values are integers.

## Input

The input is given from Standard Input in the following format:

> $N$
> 
> $A_1$ $A_2$ $\ldots$ $A_N$

## Output

Print the maximum length of a (contiguous) subarray of $A$ that is a 1122 sequence.

```input1
8
2 3 1 1 2 2 1 1
```

```output1
4
```

For example, taking the subarray from the $3$-rd to $6$-th elements of $A$, we get $(1, 1, 2, 2)$, which is a 1122 sequence of length $4$.<br>
There is no longer (contiguous) subarray that satisfies the conditions for a 1122 sequence, so the answer is $4$.

```input2
3
1 2 2
```

```output2
2
```

```input3
1
1
```

```output3
0
```

Note that a sequence of length $0$ also satisfies the conditions for a 1122 sequence.