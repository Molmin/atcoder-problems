Score : $100$ points

## Problem Statement

You are given $N$ strings.

The $i$-th string $S_i$ $(1 \leq i \leq N)$ is either `Takahashi` or `Aoki`.

How many $i$ are there such that $S_i$ is equal to `Takahashi`?

## Constraints

- $1 \leq N \leq 100$
- $N$ is an integer.
- Each $S_i$ is `Takahashi` or `Aoki`. $(1 \leq i \leq N)$

## Input

The input is given from Standard Input in the following format:

> $N$
> 
> $S_1$
> 
> $S_2$
> 
> $\vdots$
> 
> $S_N$

## Output

Print the count of $i$ such that $S_i$ is equal to `Takahashi` as an integer in a single line.

```input1
3
Aoki
Takahashi
Takahashi
```

```output1
2
```

$S_2$ and $S_3$ are equal to `Takahashi`, while $S_1$ is not.

Therefore, print `2`.

```input2
2
Aoki
Aoki
```

```output2
0
```

It is possible that no $S_i$ is equal to `Takahashi`.

```input3
20
Aoki
Takahashi
Takahashi
Aoki
Aoki
Aoki
Aoki
Takahashi
Aoki
Aoki
Aoki
Takahashi
Takahashi
Aoki
Takahashi
Aoki
Aoki
Aoki
Aoki
Takahashi
```

```output3
7
```