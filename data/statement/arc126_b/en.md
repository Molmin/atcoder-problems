Score : $400$ points

## Problem Statement

In the coordinate plane, we have $2N$ vertices whose $x$-coordinates are $1, 2, \ldots, N$ and whose $y$-coordinates are $0$ or $1$: $(1, 0),\ldots, (N,0), (1,1), \ldots, (N,1)$.
There are $M$ segments that connect two of these vertices: the $i$-th segment connects $(a_i, 0)$ and $(b_i, 1)$.

Consider choosing $K$ of these $M$ segments so that no two chosen segments contain the same point. Here, we consider both endpoints of a segment to be contained in that segment. Find the maximum possible value of $K$.

## Constraints

- $1\leq N, M \leq 2\times 10^5$
- $1\leq a_i, b_i\leq N$
- $a_i\neq a_j$ or $b_i\neq b_j$, if $i\neq j$.

## Input

Input is given from Standard Input in the following format:

> $N$ $M$
> 
> $a_1$ $b_1$
> 
> $\vdots$
> 
> $a_M$ $b_M$

## Output

Print the maximum possible value of $K$.

```input1
3 3
1 2
2 3
3 1
```

```output1
2
```

One optimal solution is to choose the first and second segments.

The first and third segments, for example, contain the same point $\left(\frac53, \frac23\right)$, so we cannot choose them both.

![](https://img.atcoder.jp/arc126/3e4cb12392855ea49b7ed0b643ebd370.png)

```input2
3 5
1 1
2 1
2 2
3 2
3 3
```

```output2
3
```

One optimal solution is to choose the first, third, and fifth segments.

The first and second segments, for example, contain the same point $(1, 1)$, so we cannot choose them both.

![](https://img.atcoder.jp/arc126/416681cace776c87fac353e0acb9c4a1.png)

```input3
7 5
1 7
7 1
3 4
2 6
5 2
```

```output3
1
```

![](https://img.atcoder.jp/arc126/2436c39ccc0fa35fc57d35647bce9f08.png)