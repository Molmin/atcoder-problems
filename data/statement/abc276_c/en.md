Score : $300$ points

## Problem Statement

You are given a permutation $P = (P_1, \dots, P_N)$ of $(1, \dots, N)$, where $(P_1, \dots, P_N) \neq (1, \dots, N)$.

Assume that $P$ is the $K$-th lexicographically smallest among all permutations of $(1 \dots, N)$. Find the $(K-1)$-th lexicographically smallest permutation.

 What are permutations?

A **permutation** of $(1, \dots, N)$ is an arrangement of $(1, \dots, N)$ into a sequence.

 What is lexicographical order?

For sequences of length $N$, $A = (A_1, \dots, A_N)$ and $B = (B_1, \dots, B_N)$, $A$ is said to be **strictly lexicographically smaller** than $B$ if and only if there is an integer $1 \leq i \leq N$ that satisfies both of the following.

- $(A_{1},\ldots,A_{i-1}) = (B_1,\ldots,B_{i-1}).$
- $A_i &lt; B_i$.

## Constraints

- $2 \leq N \leq 100$
- $1 \leq P_i \leq N \, (1 \leq i \leq N)$
- $P_i \neq P_j \, (i \neq j)$
- $(P_1, \dots, P_N) \neq (1, \dots, N)$
- All values in the input are integers.

## Input

The input is given from Standard Input in the following format:

> $N$
> 
> $P_1$ $\ldots$ $P_N$

## Output

Let $Q = (Q_1, \dots, Q_N)$ be the sought permutation. Print $Q_1, \dots, Q_N$ in a single line in this order, separated by spaces.

```input1
3
3 1 2
```

```output1
2 3 1
```

Here are the permutations of $(1, 2, 3)$ in ascending lexicographical order.

- $(1, 2, 3)$
- $(1, 3, 2)$
- $(2, 1, 3)$
- $(2, 3, 1)$
- $(3, 1, 2)$
- $(3, 2, 1)$

Therefore, $P = (3, 1, 2)$ is the fifth smallest, so the sought permutation, which is the fourth smallest $(5 - 1 = 4)$, is $(2, 3, 1)$.

```input2
10
9 8 6 5 10 3 1 2 4 7
```

```output2
9 8 6 5 10 2 7 4 3 1
```