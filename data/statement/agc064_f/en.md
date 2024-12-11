Score : $1700$ points

## Problem Statement

You are given a positive integer $N$.
Print the number, modulo $998244353$, of sequences $A$ of length $3N$ that contain each integer from $1$ through $N$ three times and satisfy the following condition.

- $A$ has no contiguous subsequence of length $N$ that is a permutation of the sequence $(1, 2, \ldots, N)$.

## Constraints

- $1 \leq N \leq 2 \times 10^5$
- All input values are integers.

## Input

The input is given from Standard Input in the following format:

> $N$

## Output

Print the answer.

```input1
3
```

```output1
132
```

For instance, $A = (1, 3, 3, 2, 2, 2, 1, 1, 3)$ satisfies the condition in the problem statement.
On the other hand, $A = (1, 3, 3, 2, 2, 3, 1, 1, 2)$ does not, because the $5$-th, $6$-th, $7$-th elements of $A$ form a contiguous subsequence that is a permutation of the sequence $(1, 2, 3)$.

```input2
123456
```

```output2
31984851
```