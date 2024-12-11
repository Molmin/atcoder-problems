Points: $350$ points

## Problem Statement

You are given a string $S$. Find the number of strings that can result from performing the following operation **exactly once**.

- Let $N$ be the length of $S$. Choose a pair of integers $(i,j)$ such that $1\leq i&lt;j\leq N$ and swap the $i$-th and $j$-th characters of $S$.

It can be proved that you can always perform it under the constraints of this problem.

## Constraints

- $S$ is a string of length between $2$ and $10^6$, inclusive, consisting of lowercase English letters.

## Input

The input is given from Standard Input in the following format:

> $S$

## Output

Print the number of strings that can result from performing the operation in the problem statement exactly once on $S$.

```input1
abc
```

```output1
3
```

The length of $S$ is $3$, so $1\leq i&lt;j\leq 3$ is satisfied by three pairs of integers $(i,j)$: $(1,2)$, $(1,3)$, and $(2,3)$.

- Swapping the $1$-st and $2$-nd characters of $S$ results in $S$ being `bac`.
- Swapping the $1$-st and $3$-rd characters of $S$ results in $S$ being `cba`.
- Swapping the $2$-nd and $3$-rd characters of $S$ results in $S$ being `acb`.

Therefore, the operation on `abc` results in one of the three strings: `bac`, `cba`, and `acb`, so print $3$.

```input2
aaaaa
```

```output2
1
```

Swapping any two characters results in $S$ remaining `aaaaa`. Thus, only one string can result from the operation.