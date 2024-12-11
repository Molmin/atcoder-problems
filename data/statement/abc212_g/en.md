Score : $600$ points

## Problem Statement

Given is a prime number $P$.

How many pairs of integers $(x, y)$ satisfy the following conditions?

- $0 \leq x \leq P-1$
- $0 \leq y \leq P-1$
- There exists a positive integer $n$ such that $x^n \equiv y \pmod{P}$.

Since the answer may be enormous, print it modulo $998244353$.

## Constraints

- $2 \leq P \leq 10^{12}$
- $P$ is a prime number.

## Input

Input is given from Standard Input in the following format:

> $P$

## Output

Print the answer modulo $998244353$.

```input1
3
```

```output1
4
```

Four pairs $(x, y) = (0, 0), (1, 1), (2, 1), (2, 2)$ satisfy the conditions.

```input2
11
```

```output2
64
```

```input3
998244353
```

```output3
329133417
```