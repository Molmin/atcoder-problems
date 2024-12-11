Score : $200$ points

## Problem Statement

There is a grid with $H$ rows from top to bottom and $W$ columns from left to right. Let $(i, j)$ denote the square at the $i$-th row from the top and $j$-th column from the left.<br>
The squares are described by characters $C_{i,j}$. If $C_{i,j}$ is `.`, $(i, j)$ is empty; if it is `#`, $(i, j)$ contains a box.

For integers $j$ satisfying $1 \leq j \leq W$, let the integer $X_j$ defined as follows.

- $X_j$ is the number of boxes in the $j$-th column. In other words, $X_j$ is the number of integers $i$ such that $C_{i,j}$ is `#`.

Find all of $X_1, X_2, \dots, X_W$.

## Constraints

- $1 \leq H \leq 1000$
- $1 \leq W \leq 1000$
- $H$ and $W$ are integers.
- $C_{i, j}$ is `.` or `#`.

## Input

The input is given from Standard Input in the following format:

> $H$ $W$
> 
> $C_{1,1}C_{1,2}\dots C_{1,W}$
> 
> $C_{2,1}C_{2,2}\dots C_{2,W}$
> 
> $\vdots$
> 
> $C_{H,1}C_{H,2}\dots C_{H,W}$

## Output

Print $X_1, X_2, \dots, X_W$ in the following format:

> $X_1$ $X_2$ $\dots$ $X_W$

```input1
3 4
#..#
.#.#
.#.#
```

```output1
1 2 0 3
```

In the $1$-st column, one square, $(1, 1)$, contains a box. Thus, $X_1 = 1$.<br>
In the $2$-nd column, two squares, $(2, 2)$ and $(3, 2)$, contain a box. Thus, $X_2 = 2$.<br>
In the $3$-rd column, no squares contain a box. Thus, $X_3 = 0$.<br>
In the $4$-th column, three squares, $(1, 4)$, $(2, 4)$, and $(3, 4)$, contain a box. Thus, $X_4 = 3$.<br>
Therefore, the answer is $(X_1, X_2, X_3, X_4) = (1, 2, 0, 3)$.

```input2
3 7
.......
.......
.......
```

```output2
0 0 0 0 0 0 0
```

There may be no square that contains a box.

```input3
8 3
.#.
###
.#.
.#.
.##
..#
##.
.##
```

```output3
2 7 4
```

```input4
5 47
.#..#..#####..#...#..#####..#...#...###...#####
.#.#...#.......#.#...#......##..#..#...#..#....
.##....#####....#....#####..#.#.#..#......#####
.#.#...#........#....#......#..##..#...#..#....
.#..#..#####....#....#####..#...#...###...#####
```

```output4
0 5 1 2 2 0 0 5 3 3 3 3 0 0 1 1 3 1 1 0 0 5 3 3 3 3 0 0 5 1 1 1 5 0 0 3 2 2 2 2 0 0 5 3 3 3 3
```