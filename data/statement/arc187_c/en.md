Score : $800$ points

## Problem Statement

For a permutation $P = (P_1, \ldots, P_N)$ of $(1, \ldots, N)$, let $P' = (P'_1, \ldots, P'_N)$ be the permutation obtained by performing the following operation once.

- For $i = 1, 2, \ldots, N-1$ in this order, if $P_i &gt; P_{i+1}$, swap $P_i$ and $P_{i+1}$.

You are given a sequence $Q = (Q_1, \ldots, Q_N)$ of length $N$. Each $Q_i$ is $-1$ or an integer between $1$ and $N$, inclusive.

Find the number, modulo $998244353$, of permutations $P$ of $(1, \ldots, N)$ such that, for every $i$, if $Q_i \neq -1$ then $Q_i = P'_i$.

## Constraints

- All input numbers are integers.
- $2 \leq N \leq 5000$
- Each $Q_i$ is $-1$ or an integer between $1$ and $N$.
- Each of $1,2,\ldots,N$ appears at most once in $Q$.

## Input

The input is given from Standard Input in the following format:

> $N$ 
> 
> $Q_1$ $\ldots$ $Q_N$

## Output

Print the answer.

```input1
4
-1 -1 2 4
```

```output1
6
```

For example, $P = (3,1,4,2)$ satisfies the conditions. This can be confirmed by the following behavior of the operation.

- For $i=1$, since $P_1 &gt; P_2$, swap $P_1$ and $P_2$, resulting in $P = (1,3,4,2)$.
- For $i=2$, since $P_2 &lt; P_3$, do nothing.
- For $i=3$, since $P_3 &gt; P_4$, swap $P_3$ and $P_4$, resulting in $P = (1,3,2,4)$.
- Thus, $P' = (1,3,2,4)$, satisfying $P'_3=2$ and $P'_4=4$.

There are six permutations $P$ that satisfy the conditions:

- $(1,3,4,2)$
- $(1,4,3,2)$
- $(3,1,4,2)$
- $(3,4,1,2)$
- $(4,1,3,2)$
- $(4,3,1,2)$

```input2
6
-1 -1 -1 -1 2 -1
```

```output2
120
```

```input3
15
-1 -1 -1 -1 -1 4 -1 -1 -1 -1 7 -1 -1 -1 -1
```

```output3
237554682
```

Remember to find the count modulo $998244353$.