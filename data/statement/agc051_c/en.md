Score : $1300$ points

## Problem Statement

There is a square grid of dimensions $10^9 \times 10^9$.
The cells are numbered $(1, 1)$ through $(10^9, 10^9)$.
Cell $(i, j)$ is in the $i$-th row from the top, and the $j$-th column from the left.
Initially, $N$ cells $(x_1, y_1), \ldots, (x_N, y_N)$ are black, and all other cells are white.

Snuke can perform the following operation an arbitrary number of times:

- Choose an integer $x (1 \leq x \leq 10^9 - 1)$ and an integer $y (1 \leq y \leq 10^9 - 2)$, and flip (black to white, white to black) the colors of the following six cells:
$(x, y), (x, y+1), (x, y+2), (x+1, y), (x+1, y+1), (x+1, y+2)$

Compute the minimum possible number of black cells after the operations.

## Constraints

- $1 \leq N \leq 10^5$
- $1 \leq x_i, y_i \leq 10^9$
- $(x_i, y_i)$ are pairwise distinct.
- All values in the input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $x_1 \ y_1$
> 
> $:$
> 
> $x_N \ y_N$

## Output

Print the answer.

```input1
9
1 2
1 3
2 1
2 3
2 4
3 2
3 3
3 4
4 2
```

```output1
3
```

In the diagram below, the $j$-th letter of the $i$-th string from the top represents the cell $(i, j)$.
`#` is black, `.` is white.

```output1
.##.
#.##
.###
.#..

->

#...
.#.#
.###
.#..

->

#...
..#.
....
.#..
```