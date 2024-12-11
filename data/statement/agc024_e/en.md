Score : $1200$ points

## Problem Statement

Find the number of the possible tuples of sequences $(A_0,A_1,...,A_N)$ that satisfy all of the following conditions, modulo $M$:

- For every $i$ $(0\leq i\leq N)$, $A_i$ is a sequence of length $i$ consisting of integers between $1$ and $K$ (inclusive);
- For every $i$ $(1\leq i\leq N)$, $A_{i-1}$ is a subsequence of $A_i$, that is, there exists $1\leq x_i\leq i$ such that the removal of the $x_i$-th element of $A_i$ would result in a sequence equal to $A_{i-1}$;
- For every $i$ $(1\leq i\leq N)$, $A_i$ is lexicographically larger than $A_{i-1}$.

## Constraints

- $1 \leq N,K \leq 300$
- $2 \leq M \leq 10^9$
- $N$, $K$ and $M$ are integers.

## Input

Input is given from Standard Input in the following format:

> $N$ $K$ $M$

## Output

Print the number of the possible tuples of sequences $(A_0,A_1,...,A_N)$, modulo $M$.

```input1
2 2 100
```

```output1
5
```

Five tuples below satisfy the conditions:

- $(),(1),(1,1)$
- $(),(1),(1,2)$
- $(),(1),(2,1)$
- $(),(2),(2,1)$
- $(),(2),(2,2)$

```input2
4 3 999999999
```

```output2
358
```

```input3
150 150 998244353
```

```output3
186248260
```