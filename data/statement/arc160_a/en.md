Score : $400$ points

## Problem Statement

You are given a permutation $A = (A_1, A_2, \dots, A_N)$ of $(1, 2, \dots, N)$.<br>
For a pair of integers $(L, R)$ such that $1 \leq L \leq R \leq N$, let $f(L, R)$ be the permutation obtained by reversing the $L$-th through $R$-th elements of $A$, that is, replacing $A_L, A_{L+1}, \dots, A_{R-1}, A_R$ with $A_R, A_{R-1}, \dots, A_{L+1}, A_{L}$ simultaneously.

There are $\frac{N(N + 1)}{2}$ ways to choose $(L, R)$ such that $1 \leq L \leq R \leq N$.<br>
If the permutations $f(L, R)$ for all such pairs $(L, R)$ are listed and sorted in lexicographical order, what is the $K$-th permutation from the front?

 What is lexicographical order on sequences?

A sequence $S = (S_1,S_2,\ldots,S_{|S|})$ is said to be **lexicographically smaller** than a sequence $T = (T_1,T_2,\ldots,T_{|T|})$ if and only if 1. or 2. below holds.
Here, $|S|$ and $|T|$ denote the lengths of $S$ and $T$, respectively.

1. $|S| \lt |T|$ and $(S_1,S_2,\ldots,S_{|S|}) = (T_1,T_2,\ldots,T_{|S|})$.
2. There is an integer $1 \leq i \leq \min\lbrace |S|, |T| \rbrace$ that satisfies both of the following.
1.    - $(S_1,S_2,\ldots,S_{i-1}) = (T_1,T_2,\ldots,T_{i-1})$.
2.    - $S_i$ is smaller than $T_i$ (as a number).

## Constraints

- $1 \leq N \leq 7000$
- $1 \leq K \leq \frac{N(N + 1)}{2}$
- $A$ is a permutation of $(1, 2, \dots, N)$.

## Input

The input is given from Standard Input in the following format:

> $N$ $K$
> 
> $A_1$ $A_2$ $\dots$ $A_N$

## Output

Let $B =(B_1, B_2, \dots, B_N)$ be the $K$-th permutation from the front in the list of the permutations $f(L, R)$ sorted in lexicographical order.<br>
Print $B$ in the following format:

> $B_1$ $B_2$ $\dots$ $B_N$

```input1
3 5
1 3 2
```

```output1
2 3 1
```

Here are the permutations $f(L, R)$ for all pairs $(L, R)$ such that $1 \leq L \leq R \leq N$.

- $f(1, 1) = (1, 3, 2)$
- $f(1, 2) = (3, 1, 2)$
- $f(1, 3) = (2, 3, 1)$
- $f(2, 2) = (1, 3, 2)$
- $f(2, 3) = (1, 2, 3)$
- $f(3, 3) = (1, 3, 2)$

When these are sorted in lexicographical order, the fifth permutation is $f(1, 3) = (2, 3, 1)$, which should be printed.

```input2
5 15
1 2 3 4 5
```

```output2
5 4 3 2 1
```

The answer is $f(1, 5)$.

```input3
10 37
9 2 1 3 8 7 10 4 5 6
```

```output3
9 2 1 6 5 4 10 7 8 3
```