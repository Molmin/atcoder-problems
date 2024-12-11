Score : $475$ points

## Problem Statement

There is a grid with $H$ rows and $W$ columns. Let $(i, j)$ denote the square at the $i$-th row from the top and $j$-th column from the left of the grid.<br>
Each square of the grid is holed or not. There are exactly $N$ holed squares: $(a_1, b_1), (a_2, b_2), \dots, (a_N, b_N)$.

When the triple of positive integers $(i, j, n)$ satisfies the following condition, the square region whose top-left corner is $(i, j)$ and whose bottom-right corner is $(i + n - 1, j + n - 1)$ is called a **holeless square**.

- $i + n - 1 \leq H$.
- $j + n - 1 \leq W$.
- For every pair of non-negative integers $(k, l)$ such that $0 \leq k \leq n - 1, 0 \leq l \leq n - 1$, square $(i + k, j + l)$ is not holed.

How many holeless squares are in the grid?

## Constraints

- $1 \leq H, W \leq 3000$
- $0 \leq N \leq \min(H \times W, 10^5)$
- $1 \leq a_i \leq H$
- $1 \leq b_i \leq W$
- All $(a_i, b_i)$ are pairwise different.
- All input values are integers.

## Input

The input is given from Standard Input in the following format:

> $H$ $W$ $N$
> 
> $a_1$ $b_1$
> 
> $a_2$ $b_2$
> 
> $\vdots$
> 
> $a_N$ $b_N$

## Output

Print the number of holeless squares.

```input1
2 3 1
2 3
```

```output1
6
```

There are six holeless squares, listed below. For the first five, $n = 1$, and the top-left and bottom-right corners are the same square.

- The square region whose top-left and bottom-right corners are $(1, 1)$.
- The square region whose top-left and bottom-right corners are $(1, 2)$.
- The square region whose top-left and bottom-right corners are $(1, 3)$.
- The square region whose top-left and bottom-right corners are $(2, 1)$.
- The square region whose top-left and bottom-right corners are $(2, 2)$.
- The square region whose top-left corner is $(1, 1)$ and whose bottom-right corner is $(2, 2)$.

```input2
3 2 6
1 1
1 2
2 1
2 2
3 1
3 2
```

```output2
0
```

There may be no holeless square.

```input3
1 1 0
```

```output3
1
```

The whole grid may be a holeless square.

```input4
3000 3000 0
```

```output4
9004500500
```