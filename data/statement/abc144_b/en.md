Score : $200$ points

## Problem Statement

Having learned the multiplication table, Takahashi can multiply two integers between $1$ and $9$ (inclusive) together.

Given an integer $N$, determine whether $N$ can be represented as the product of two integers between $1$ and $9$. If it can, print `Yes`; if it cannot, print `No`.

## Constraints

- $1 \leq N \leq 100$
- $N$ is an integer.

## Input

Input is given from Standard Input in the following format:

> $N$

## Output

If $N$ can be represented as the product of two integers between $1$ and $9$ (inclusive), print `Yes`; if it cannot, print `No`.

```input1
10
```

```output1
Yes
```

$10$ can be represented as, for example, $2 \times 5$.

```input2
50
```

```output2
No
```

$50$ cannot be represented as the product of two integers between $1$ and $9$.

```input3
81
```

```output3
Yes
```