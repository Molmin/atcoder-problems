Score : $800$ points

## Problem Statement

We have a grid with $H$ rows and $W$ columns. Let $(i, j)$ denote the square at the $i$-th row from the top and $j$-th column from the left.<br>
Assume that this grid is a torus; that is, in addition to the pairs of squares horizontally or vertically adjacent to each other, assume the following pairs of squares to be adjacent to each other.

- $(i,1)$ and $(i,W)$, for every integer $i$ such that $1 \leq i \leq H$.
- $(1,j)$ and $(H,j)$, for every integer $j$ such that $1 \leq j \leq W$.

Consider placing some number of pieces on the squares in the grid. Here, there can be at most one piece on each square, and there cannot be two pieces on adjacent squares.<br>
Let $L$ be the maximum number of pieces that can be placed. Find the number of ways, modulo $998244353$, to place $L$ pieces.

## Constraints

- $2 \leq H \leq 10^5$
- $2 \leq W \leq 10^{10}$
- $H$ and $W$ are integers.

## Input

Input is given from Standard Input in the following format:

> $H$ $W$

## Output

Print the answer.

```input1
3 2
```

```output1
6
```

The following six placements satisfy the condition. Here, `#` and `.` represent a square with and without a piece, respectively.

```output1
#.   #.   .#   .#   ..   ..
.#   ..   #.   ..   #.   .#
..   .#   ..   #.   .#   #.
```

```input2
139 424
```

```output2
148734121
```

```input3
12345 1234567890
```

```output3
227996418
```