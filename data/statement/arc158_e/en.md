Score : $800$ points

## Problem Statement

We have a grid with $2$ rows and $N$ columns. Let $(i,j)$ denote the square at the $i$-th row from the top and $j$-th column from the left. $(i,j)$ has a postive integer $x_{i,j}$ written on it.

Two squares are said to be **adjacent** when they share a side.

A **path** from square $X$ to $Y$ is a sequence $(P_1, \ldots, P_n)$ of distinct squares such that $P_1 = X$, $P_n = Y$, and $P_i$ and $P_{i+1}$ are adjacent for every $1\leq i \leq n-1$. Additionally, the **weight** of that path is the sum of integers written on $P_1, \ldots, P_n$.

For two squares $X$ and $Y$, let $f(X, Y)$ denote the minimum weight of a path from $X$ to $Y$. Find the sum of $f(X, Y)$ over all pairs of squares $(X,Y)$, modulo $998244353$.

## Constraints

- $1\leq N\leq 2\times 10^5$
- $1\leq x_{i,j} \leq 10^9$

## Input

The input is given from Standard Input in the following format:

> $N$
> 
> $x_{1,1}$ $\ldots$ $x_{1,N}$
> 
> $x_{2,1}$ $\ldots$ $x_{2,N}$

## Output

Print the sum of $f(X, Y)$ over all pairs of squares $(X,Y)$, modulo $998244353$.

```input1
1
3
5
```

```output1
24
```

You should find the sum of the following four values.

- For $X = (1,1), Y = (1,1)$: $f(X, Y) = 3$.
- For $X = (1,1), Y = (2,1)$: $f(X, Y) = 8$.
- For $X = (2,1), Y = (1,1)$: $f(X, Y) = 8$.
- For $X = (2,1), Y = (2,1)$: $f(X, Y) = 5$.

```input2
2
1 2
3 4
```

```output2
76
```

```input3
5
1 1000000000 1 1 1
1 1 1 1000000000 1
```

```output3
66714886
```