Score : $400$ points

## Problem Statement

You are given a positive integer $N$ and a sequence of $M$ positive integers $A = (A_{1}, A_{2}, \dots, A_{M})$.

Here, all elements of $A$ are distinct integers between $1$ and $N$, inclusive.

A permutation $P = (P_{1}, P_{2}, \dots, P_{N})$ of $(1, 2, \dots, N)$ is called a **good permutation** when it satisfies the following condition for all integers $i$ such that $1 \leq i \leq M$:

- No contiguous subsequence of $P$ is a permutation of $(1, 2, \dots, A_{i})$.

Determine whether a **good permutation** exists, and if it does, find the lexicographically smallest **good permutation**.

 What is lexicographical order?

A sequence $S = (S_1, S_2, \ldots, S_{|S|})$ is said to be **lexicographically smaller** than a sequence $T = (T_1, T_2, \ldots, T_{|T|})$ if one of the following conditions holds.
Here, $|S|$ and $|T|$ denote the lengths of $S$ and $T$, respectively.

1. $|S| \lt |T|$ and $(S_1, S_2, \ldots, S_{|S|}) = (T_1, T_2, \ldots, T_{|S|})$.
2. There exists an integer $1 \leq i \leq \min\lbrace |S|, |T| \rbrace$ such that both of the following hold:
1.    - $(S_1, S_2, \ldots, S_{i-1}) = (T_1, T_2, \ldots, T_{i-1})$.
2.    - $S_i$ is smaller than $T_i$ (as a number).

## Constraints

- $1 \leq M \leq N \leq 2 \times 10^{5}$
- $1 \leq A_{i} \leq N$
- All elements of $A$ are distinct.
- All input values are integers.

## Input

The input is given from Standard Input in the following format:

> $N$ $M$
> 
> $A_{1}$ $A_{2}$ $\cdots$ $A_{M}$

## Output

If a **good permutation** does not exist, print `-1`.

If it exists, print the lexicographically smallest **good permutation**, separated by spaces.

```input1
4 1
2
```

```output1
1 3 2 4
```

For example, $(4, 2, 1, 3)$ is not a **good permutation** because it contains $(2, 1)$ as a contiguous subsequence.

Other non-**good permutations** are $(1, 2, 3, 4)$ and $(3, 4, 2, 1)$.

Some **good permutations** are $(4, 1, 3, 2)$ and $(2, 3, 4, 1)$. Among these, the lexicographically smallest one is $(1, 3, 2, 4)$, so print it separated by spaces.

```input2
5 3
4 3 2
```

```output2
1 3 4 5 2
```

Examples of **good permutations** include $(3, 4, 1, 5, 2)$, $(2, 4, 5, 3, 1)$, and $(4, 1, 5, 2, 3)$.

Examples of non-**good permutations** include $(1, 2, 5, 3, 4)$, $(2, 3, 4, 1, 5)$, and $(5, 3, 1, 2, 4)$.

```input3
92 4
16 7 1 67
```

```output3
-1
```

If a **good permutation** does not exist, print `-1`.

```input4
43 2
43 2
```

```output4
-1
```