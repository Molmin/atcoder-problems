Score : $425$ points

## Problem Statement

There is a grid of $H \times W$ cells. Let $(i, j)$ denote the cell at the $i$-th row from the top and the $j$-th column from the left.

Cell $(i, j)$ is empty if $S_{i,j}$ is `.`, and blocked if it is `#`.

Count the number of ways to start from an empty cell and make $K$ moves to adjacent cells (up, down, left, or right), without passing through blocked squares and not visiting the same cell more than once.

Specifically, count the number of sequences of length $K+1$, $((i_0, j_0), (i_1, j_1), \dots, (i_K, j_K))$, satisfying the following.

- $1 \leq i_k \leq H$, $1 \leq j_k \leq W$, and $S_{i_k, j_k}$ is `.`, for each $0 \leq k \leq K$.
- $|i_{k+1} - i_k| + |j_{k+1} - j_k| = 1$ for each $0 \leq k \leq K-1$.
- $(i_k, j_k) \neq (i_l, j_l)$ for each $0 \leq k &lt; l \leq K$.

## Constraints

- $1 \leq H, W \leq 10$
- $1 \leq K \leq 11$
- $H$, $W$, and $K$ are integers.
- Each $S_{i,j}$ is `.` or `#`.
- There is at least one empty cell.

## Input

The input is given from Standard Input in the following format:

> $H$ $W$ $K$
> 
> $S_{1,1}S_{1,2}\dots S_{1,W}$
> 
> $S_{2,1}S_{2,2}\dots S_{2,W}$
> 
> $\vdots$
> 
> $S_{H,1}S_{H,2}\dots S_{H,W}$

## Output

Print the answer.

```input1
2 2 2
.#
..
```

```output1
2
```

Here are the two possible paths:

- $(1,1) \rightarrow (2,1) \rightarrow (2,2)$
- $(2,2) \rightarrow (2,1) \rightarrow (1,1)$

```input2
2 3 1
.#.
#.#
```

```output2
0
```

```input3
10 10 11
....#..#..
.#.....##.
..#...##..
...#......
......##..
..#......#
#........#
..##......
.###....#.
...#.....#
```

```output3
218070
```