Score : $2000$ points

## Problem Statement

Snuke has $R$ red balls and $B$ blue balls.
He distributes them into $K$ boxes, so that no box is empty and no two boxes are identical.
Compute the maximum possible value of $K$.

Formally speaking, let's number the boxes $1$ through $K$.
If Box $i$ contains $r_i$ red balls and $b_i$ blue balls, the following conditions must be satisfied:

- For each $i$ ($1 \leq i \leq K$), $r_i &gt; 0$ or $b_i &gt; 0$.
- For each $i, j$ ($1 \leq i &lt; j \leq K$), $r_i \neq r_j$ or $b_i \neq b_j$.
- $\sum r_i = R$ and $\sum b_i = B$ (no balls can be left outside the boxes).

## Constraints

- $1 \leq R, B \leq 10^{9}$

## Input

Input is given from Standard Input in the following format:

> $R$ $B$

## Output

Print the maximum possible value of $K$.

```input1
8 3
```

```output1
5
```

The following picture shows one possible way to achieve $K = 5$:

![](https://img.atcoder.jp/wtf19/9ea9530037df204a84029678052ab593.png)