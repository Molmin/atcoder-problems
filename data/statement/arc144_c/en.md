Score : $600$ points

## Problem Statement

You are given positive integers $N$ and $K$.
Find the lexicographically smallest permutation $A = (A_1, A_2, \ldots, A_N)$ of the integers from $1$ through $N$ that satisfies the following condition:

- $\lvert A_i - i\rvert \geq K$ for all $i$ ($1\leq i\leq N$).

If there is no such permutation, print `-1`.

What is lexicographical order on sequences?

The following is an algorithm to determine the lexicographical order between different sequences $S$ and $T$.

Below, let $S_i$ denote the $i$-th element of $S$. Also, if $S$ is lexicographically smaller than $T$, we will denote that fact as $S \lt T$; if $S$ is lexicographically larger than $T$, we will denote that fact as $S \gt T$.

1. Let $L$ be the smaller of the lengths of $S$ and $T$. For each $i=1,2,\dots,L$, we check whether $S_i$ and $T_i$ are the same.
2. If there is an $i$ such that $S_i \neq T_i$, let $j$ be the smallest such $i$. Then, we compare $S_j$ and $T_j$. If $S_j$ is less than $T_j$ (as a number), we determine that $S \lt T$ and quit; if $S_j$ is greater than $T_j$, we determine that $S \gt T$ and quit.
3. If there is no $i$ such that $S_i \neq T_i$, we compare the lengths of $S$ and $T$. If $S$ is shorter than $T$, we determine that $S \lt T$ and quit; if $S$ is longer than $T$, we determine that $S \gt T$ and quit.

## Constraints

- $2\leq N\leq 3\times 10^5$
- $1\leq K\leq N - 1$

## Input

Input is given from Standard Input in the following format:

> $N$ $K$

## Output

Print the lexicographically smallest permutation $A = (A_1, A_2, \ldots, A_N)$ of the integers from $1$ through $N$ that satisfies the condition, in the following format:

> $A_1$ $A_2$ $\ldots$ $A_N$

If there is no such permutation, print `-1`.

```input1
3 1
```

```output1
2 3 1
```

Two permutations satisfy the condition: $(2, 3, 1)$ and $(3, 1, 2)$. For instance, the following holds for $(2, 3, 1)$:

- $\lvert A_1 - 1\rvert = 1 \geq K$
- $\lvert A_2 - 2\rvert = 1 \geq K$
- $\lvert A_3 - 3\rvert = 2 \geq K$

```input2
8 3
```

```output2
4 5 6 7 8 1 2 3
```

```input3
8 6
```

```output3
-1
```