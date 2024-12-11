Score : $1200$ points

## Problem Statement

There are infinitely many cards, numbered $1$, $2$, $3$, $...$
Initially, Cards $x_1$, $x_2$, $...$, $x_N$ are face up, and the others are face down.

Snuke can perform the following operation repeatedly:

- Select a prime $p$ greater than or equal to $3$. Then, select $p$ consecutive cards and flip all of them.

Snuke's objective is to have all the cards face down.
Find the minimum number of operations required to achieve the objective.

## Constraints

- $1 \leq N \leq 100$
- $1 \leq x_1 &lt; x_2 &lt; ... &lt; x_N \leq 10^7$

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $x_1$ $x_2$ $...$ $x_N$

## Output

Print the minimum number of operations required to achieve the objective.

```input1
2
4 5
```

```output1
2
```

Below is one way to achieve the objective in two operations:

- Select $p = 5$ and flip Cards $1$, $2$, $3$, $4$ and $5$.
- Select $p = 3$ and flip Cards $1$, $2$ and $3$.

```input2
9
1 2 3 4 5 6 7 8 9
```

```output2
3
```

Below is one way to achieve the objective in three operations:

- Select $p = 3$ and flip Cards $1$, $2$ and $3$.
- Select $p = 3$ and flip Cards $4$, $5$ and $6$.
- Select $p = 3$ and flip Cards $7$, $8$ and $9$.

```input3
2
1 10000000
```

```output3
4
```