Score : $100$ points

## Problem Statement

You are given positive integers $X$ and $Y$.
If there exists a positive integer not greater than $10^{18}$ that is a multiple of $X$ but not a multiple of $Y$, choose one such integer and print it.
If it does not exist, print $-1$.

## Constraints

- $1 \leq X,Y \leq 10^9$
- $X$ and $Y$ are integers.

## Input

Input is given from Standard Input in the following format:

> $X$ $Y$

## Output

Print a positive integer not greater than $10^{18}$ that is a multiple of $X$ but not a multiple of $Y$, or print $-1$ if it does not exist.

```input1
8 6
```

```output1
16
```

For example, $16$ is a multiple of $8$ but not a multiple of $6$.

```input2
3 3
```

```output2
-1
```

A multiple of $3$ is a multiple of $3$.