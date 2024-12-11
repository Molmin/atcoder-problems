Score: $400$ points

## Problem Statement

$N$ people are sitting around a round table, and numbered $1$ to $N$ in a counterclockwise order. Each person has a dominant hand: left or right.

There are $N$ spoons numbered $1$ to $N$ on the round table, with one spoon placed between each pair of adjacent people. For each $1 \leq i \leq N$, to the left and right of person $i$, there are spoons $i$ and $(i+1)$, respectively. Here, spoon $(N+1)$ refers to spoon $1$.

Below is a diagram for $N = 4$.

![](https://img.atcoder.jp/arc175/b86aef99039c82389bf15f8df725a4c5.png)

You are given a permutation $(P_1, \dots, P_N)$ of $(1, \dots, N)$. In the order $i=1,\dots,N$, person $P_i$ will act as follows:

- If there is a spoon remaining on left or right side, they will take one of them.-   - If there are spoons remaining on both sides, they will take the spoon on the side of their dominant hand.
- Otherwise, they do nothing.

You are also given a string $S$ of length $N$ consisting of `L`, `R`, and `?`. Among the $2^N$ possible combinations of dominant hands, find how many satisfy all of the following conditions, modulo $998244353$:

- If the $i$-th character of $S$ is `L`, person $i$ is left-handed.
- If the $i$-th character of $S$ is `R`, person $i$ is right-handed.
- When everyone has finished acting, everyone has taken a spoon.

## Constraints

- All input values are integers.
- $2 \leq N \leq 2 \times 10^5$
- $(P_1, \dots, P_N)$ is a permutation of $(1, \dots, N)$.
- $S$ is a string of length $N$ consisting of `L`, `R`, and `?`.

## Input

The input is given from Standard Input in the following format:

> $N$
> 
> $P_1$ $\dots$ $P_N$
> 
> $S$

## Output

Print the answer in a single line.

```input1
3
1 2 3
L??
```

```output1
2
```

When persons $1$, $2$, and $3$ are left-handed, left-handed, and right-handed, respectively, the actions are performed as follows:

- Person $1$ starts acting. There are spoons on both sides, so person $1$ takes spoon $1$ on the left side, which is the same as their dominant hand.
- Person $2$ starts acting. There are spoons on both sides, so person $2$ takes spoon $2$ on the left side, which is the same as their dominant hand.
- Person $3$ starts acting. There is no spoon on the right side, but spoon $3$ is remaining on the left side, so they take spoon $3$. Everyone has finished acting and taken a spoon.

This combination of dominant hands satisfies the conditions. Besides, the conditions are also satisfied when persons $1, 2, 3$ are all left-handed.

```input2
3
1 3 2
R?L
```

```output2
0
```

No combinations of dominant hands satisfy the conditions.

```input3
12
6 2 9 3 1 4 11 5 12 10 7 8
????????????
```

```output3
160
```