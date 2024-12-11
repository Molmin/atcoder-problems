Score : $300$ points

## Problem Statement

We have $N$ cards arranged in a row from left to right.
We will write an integer between $1$ and $K$ (inclusive) on each of these cards, which are initially blank.

Given are $K$ restrictions numbered $1$ through $K$.
Restriction $i$ is composed of a character $c_i$ and an integer $k_i$.
If $c_i$ is `L`, the $k_i$-th card from the left in the row must be the **leftmost** card on which we write $i$.
If $c_i$ is `R`, the $k_i$-th card from the left in the row must be the **rightmost** card on which we write $i$.

Note that for each integer $i$ from $1$ through $K$, there must be at least one card on which we write $i$.

Find the number of ways to write integers on the cards under the $K$ restrictions, modulo $998244353$.

## Constraints

- $1 \leq N,K \leq 1000$
- $c_i$ is `L` or `R`.
- $1 \leq k_i \leq N$
- $k_i \neq k_j$ if $i \neq j$.

## Input

Input is given from Standard Input in the following format:

> $N$ $K$
> 
> $c_1$ $k_1$
> 
> $\vdots$
> 
> $c_K$ $k_K$

## Output

Find the number of ways to write integers on the cards under the $K$ restrictions in the Problem Statement, modulo $998244353$.

```input1
3 2
L 1
R 2
```

```output1
1
```

- The only way to meet the two restrictions is to write $1, 2, 1$ from left to right on the three cards.

```input2
30 10
R 6
R 8
R 7
R 25
L 26
L 13
R 14
L 11
L 23
R 30
```

```output2
343921442
```

- Be sure to find the count modulo $998244353$.