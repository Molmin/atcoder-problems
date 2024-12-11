Score : $300$ points

## Problem Statement

You are given a string $S$ of length $N$ consisting of lowercase English letters.
Each character of $S$ is painted in one of the $M$ colors: color $1$, color $2$, ..., color $M$; for each $i = 1, 2, \ldots, N$, the $i$-th character of $S$ is painted in color $C_i$.

For each $i = 1, 2, \ldots, M$ in this order, let us perform the following operation.

- Perform a right circular shift by $1$ on the part of $S$ painted in color $i$.
  That is, if the $p_1$-th, $p_2$-th, $p_3$-th, $\ldots$, $p_k$-th characters are painted in color $i$ from left to right, then simultaneously replace the $p_1$-th, $p_2$-th, $p_3$-th, $\ldots$, $p_k$-th characters of $S$ with the $p_k$-th, $p_1$-th, $p_2$-th, $\ldots$, $p_{k-1}$-th characters of $S$, respectively.

Print the final $S$ after the above operations.

The constraints guarantee that at least one character of $S$ is painted in each of the $M$ colors.

## Constraints

- $1 \leq M \leq N \leq 2 \times 10^5$
- $1 \leq C_i \leq M$
- $N$, $M$, and $C_i$ are all integers.
- $S$ is a string of length $N$ consisting of lowercase English letters.
- For each integer $1 \leq i \leq M$, there is an integer $1 \leq j \leq N$ such that $C_j = i$.

## Input

The input is given from Standard Input in the following format:

> $N$ $M$
> 
> $S$
> 
> $C_1$ $C_2$ $\ldots$ $C_N$

## Output

Print the answer.

```input1
8 3
apzbqrcs
1 2 3 1 2 2 1 2
```

```output1
cszapqbr
```

Initially, $S =$ `apzbqrcs`.

- For $i = 1$, perform a right circular shift by $1$ on the part of $S$ formed by the $1$-st, $4$-th, $7$-th characters, resulting in $S =$ `cpzaqrbs`.
- For $i = 2$, perform a right circular shift by $1$ on the part of $S$ formed by the $2$-nd, $5$-th, $6$-th, $8$-th characters, resulting in $S =$ `cszapqbr`.
- For $i = 3$, perform a right circular shift by $1$ on the part of $S$ formed by the $3$-rd character, resulting in $S =$ `cszapqbr` (here, $S$ is not changed).

Thus, you should print `cszapqbr`, the final $S$.

```input2
2 1
aa
1 1
```

```output2
aa
```