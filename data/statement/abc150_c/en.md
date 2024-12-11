Score : $300$ points

## Problem Statement

We have two permutations $P$ and $Q$ of size $N$ (that is, $P$ and $Q$ are both rearrangements of $(1, \sim 2, \sim ..., \sim N)$).

There are $N!$ possible permutations of size $N$. Among them, let $P$ and $Q$ be the $a$-th and $b$-th lexicographically smallest permutations, respectively. Find $|a - b|$.

## Notes

For two sequences $X$ and $Y$, $X$ is said to be lexicographically smaller than $Y$ if and only if there exists an integer $k$ such that $X_i = Y_i \sim (1 \leq i &lt; k)$ and $X_k &lt; Y_k$.

## Constraints

- $2 \leq N \leq 8$
- $P$ and $Q$ are permutations of size $N$.

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $P_1$ $P_2$ $...$ $P_N$
> 
> $Q_1$ $Q_2$ $...$ $Q_N$

## Output

Print $|a - b|$.

```input1
3
1 3 2
3 1 2
```

```output1
3
```

There are $6$ permutations of size $3$: $(1, \sim 2, \sim 3)$, $(1, \sim 3, \sim 2)$, $(2, \sim 1, \sim 3)$, $(2, \sim 3, \sim 1)$, $(3, \sim 1, \sim 2)$, and $(3, \sim 2, \sim 1)$. Among them, $(1, \sim 3, \sim 2)$ and $(3, \sim 1, \sim 2)$ come $2$-nd and $5$-th in lexicographical order, so the answer is $|2 - 5| = 3$.

```input2
8
7 3 5 4 2 1 6 8
3 8 2 5 4 6 7 1
```

```output2
17517
```

```input3
3
1 2 3
1 2 3
```

```output3
0
```