Score : $300$ points

## Problem Statement

A positive integer $x$ is said to be a **beautiful integer** if and only if $x$ is a $9$-digit integer whose decimal notation $S_1\ldots S_9$ ($S_i$ is the $i$-th character) satisfies all of the following conditions:

- $S_1$ is not `0`,
- $S_1 = S_2$,
- $S_5 = S_6$, and
- $S_7 = S_9$.

For instance, $998244353$ and $333333333$ are beautiful integers, while $111112222$ is not, since $S_5 \neq S_6$.

You are given a positive integer $N$. Print the $N$-th smallest beautiful integer.

## Constraints

- $N$ is a positive integer.
- There are at least $N$ beautiful integers.

## Input

The input is given from Standard Input in the following format:

> $N$

## Output

Print the $N$-th smallest beautiful integer.

```input1
3
```

```output1
110000020
```

The beautiful integers in ascending order are $110000000, 110000010, 110000020, \ldots$.

```input2
882436
```

```output2
998244353
```

```input3
2023
```

```output3
110200222
```