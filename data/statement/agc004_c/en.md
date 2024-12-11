Score : $700$ points

## Problem Statement

Snuke and Ciel went to a strange stationery store. Each of them got a transparent graph paper with $H$ rows and $W$ columns.

Snuke painted some of the cells red in his paper. Here, the cells painted red were *4-connected*, that is, it was possible to traverse from any red cell to any other red cell, by moving to vertically or horizontally adjacent red cells only.

Ciel painted some of the cells blue in her paper. Here, the cells painted blue were 4-connected.

Afterwards, they precisely overlaid the two sheets in the same direction. Then, the intersection of the red cells and the blue cells appeared purple.

You are given a matrix of letters $a_{ij}$ ($1 \leq i \leq H$, $1 \leq j \leq W$) that describes the positions of the purple cells. If the cell at the $i$-th row and $j$-th column is purple, then $a_{ij}$ is `#`, otherwise $a_{ij}$ is `.`. Here, it is guaranteed that **no outermost cell is purple**. That is, if $i=1, H$ or $j = 1, W$, then $a_{ij}$ is `.`.

Find a pair of the set of the positions of the red cells and the blue cells that is consistent with the situation described. It can be shown that a solution always exists.

## Constraints

- $3 \leq H,W \leq 500$
- $a_{ij}$ is `#` or `.`.
- If $i=1,H$ or $j=1,W$, then $a_{ij}$ is `.`.
- At least one of $a_{ij}$ is `#`.

## Input

The input is given from Standard Input in the following format:

> $H$ $W$
> 
> $a_{11}$$...$$a_{1W}$
> 
> $:$
> 
> $a_{H1}$$...$$a_{HW}$

## Output

Print a pair of the set of the positions of the red cells and the blue cells that is consistent with the situation, as follows:

- The first $H$ lines should describe the positions of the red cells.
- The following $1$ line should be empty.
- The following $H$ lines should describe the positions of the blue cells.

The description of the positions of the red or blue cells should follow the format of the description of the positions of the purple cells.

```input1
5 5
.....
.#.#.
.....
.#.#.
.....
```

```output1
.....
#####
#....
#####
.....

.###.
.#.#.
.#.#.
.#.#.
.....
```

One possible pair of the set of the positions of the red cells and the blue cells is as follows:

![](https://atcoder.jp/img/agc/004/gatbantar/C_1.png)

```input2
7 13
.............
.###.###.###.
.#.#.#...#...
.###.#...#...
.#.#.#.#.#...
.#.#.###.###.
.............
```

```output2
.............
.###########.
.###.###.###.
.###.###.###.
.###.###.###.
.###.###.###.
.............

.............
.###.###.###.
.#.#.#...#...
.###.#...#...
.#.#.#.#.#...
.#.#########.
.............
```

One possible pair of the set of the positions of the red cells and the blue cells is as follows:

![](https://atcoder.jp/img/agc/004/gatbantar/C_2.png)