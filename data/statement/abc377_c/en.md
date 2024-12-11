Score : $300$ points

## Problem Statement

There is a grid of $N^2$ squares with $N$ rows and $N$ columns.
Let $(i,j)$ denote the square at the $i$-th row from the top $(1\leq i\leq N)$ and $j$-th column from the left $(1\leq j\leq N)$.

Each square is either empty or has a piece placed on it.
There are $M$ pieces placed on the grid, and the $k$-th $(1\leq k\leq M)$ piece is placed on square $(a_k,b_k)$.

You want to place your piece on an **empty square** in such a way that it **cannot be captured by any of the existing pieces**.

A piece placed on square $(i,j)$ can capture pieces that satisfy any of the following conditions:

- Placed on square $(i+2,j+1)$
- Placed on square $(i+1,j+2)$
- Placed on square $(i-1,j+2)$
- Placed on square $(i-2,j+1)$
- Placed on square $(i-2,j-1)$
- Placed on square $(i-1,j-2)$
- Placed on square $(i+1,j-2)$
- Placed on square $(i+2,j-1)$

Here, conditions involving non-existent squares are considered to never be satisfied.

For example, a piece placed on square $(4,4)$ can capture pieces placed on the squares shown in blue in the following figure:

![](https://img.atcoder.jp/abc377/871985d4de26cef302c00cdd6f178880.png)

How many squares can you place your piece on?

## Constraints

- $1\leq N\leq10^9$
- $1\leq M\leq2\times10^5$
- $1\leq a_k\leq N,1\leq b_k\leq N\ (1\leq k\leq M)$
- $(a_k,b_k)\neq(a_l,b_l)\ (1\leq k\lt l\leq M)$
- All input values are integers.

## Input

The input is given from Standard Input in the following format:

> $N$ $M$
> 
> $a_1$ $b_1$
> 
> $a_2$ $b_2$
> 
> $\vdots$
> 
> $a_M$ $b_M$

## Output

Print the number of empty squares where you can place your piece without it being captured by any existing pieces.

```input1
8 6
1 4
2 1
3 8
4 5
5 2
8 3
```

```output1
38
```

The existing pieces can capture pieces placed on the squares shown in blue in the following figure:

![](https://img.atcoder.jp/abc377/cb70c753c18ba20c291ba79e76f34599.png)

Therefore, you can place your piece on the remaining $38$ squares.

```input2
1000000000 1
1 1
```

```output2
999999999999999997
```

Out of $10^{18}$ squares, only $3$ squares cannot be used: squares $(1,1)$, $(2,3)$, and $(3,2)$.

Note that the answer may be $2^{32}$ or greater.

```input3
20 10
1 4
7 11
7 15
8 10
11 6
12 5
13 1
15 2
20 10
20 15
```

```output3
338
```