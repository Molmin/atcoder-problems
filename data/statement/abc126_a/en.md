Score : $100$ points

## Problem Statement

You are given a string $S$ of length $N$ consisting of `A`, `B` and `C`, and an integer $K$ which is between $1$ and $N$ (inclusive).
Print the string $S$ after lowercasing the $K$-th character in it.

## Constraints

- $1 \leq N \leq 50$
- $1 \leq K \leq N$
- $S$ is a string of length $N$ consisting of `A`, `B` and `C`.

## Input

Input is given from Standard Input in the following format:

> $N$ $K$
> 
> $S$

## Output

Print the string $S$ after lowercasing the $K$-th character in it.

```input1
3 1
ABC
```

```output1
aBC
```

```input2
4 3
CABA
```

```output2
CAbA
```