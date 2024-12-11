Score : $600$ points

## Problem Statement

We have a grid with $H$ horizontal rows and $W$ vertical columns.  We denote by square $(i,j)$ the square at the $i$-th row from the top and $j$-th column from the left.

We want to cover this grid with $1 \times 1$ tiles and $1 \times 2$ tiles so that no tiles overlap and everywhere is covered by a tile.  (A tile can be rotated.)

Each square has `1`, `2`, or `?` written on it.  The character written on square $(i, j)$ is $c_{i,j}$.<br>
A square with `1` written on it must be covered by a $1 \times 1$ tile, and a square with `2` by a $1 \times 2$ tile.  A square with `?` may be covered by any kind of tile.

Determine if there is such a placement of tiles.

## Constraints

- $1 \leq H,W \leq 300$
- $H$ and $W$ are integers.
- $c_{i,j}$ is one of `1`, `2`, and `?`.

## Input

The input is given from Standard Input in the following format:

> $H$ $W$
> 
> $c_{1,1}c_{1,2}\ldots c_{1,W}$
> 
> $\vdots$
> 
> $c_{H,1}c_{H,2}\ldots c_{H,W}$

## Output

Print `Yes` if there is a placement of tiles to satisfy the conditions in the Problem Statement; print `No` otherwise.

```input1
3 4
2221
?1??
2?21
```

```output1
Yes
```

For example, the following placement satisfies the conditions.

![](https://img.atcoder.jp/abc285/d984ec33355bac05ecebc41076d9a8df.png)

```input2
3 4
2?21
??1?
2?21
```

```output2
No
```

There is no placement that satisfies the conditions.

```input3
5 5
11111
11111
11211
11111
11111
```

```output3
No
```