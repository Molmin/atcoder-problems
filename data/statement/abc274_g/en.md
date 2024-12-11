Score : $600$ points

## Problem Statement

There is a grid with $H$ rows from top to bottom and $W$ columns from left to right. Let $(i, j)$ denote the square at the $i$-th row from the top and $j$-th column from the left.<br>
Square $(i, j)$ is occupied by an obstacle if $S_{i,j}=$ `#`, and is empty if $S_{i,j}=$ `.`.

Takahashi will install some surveillance cameras in the grid.

A surveillance camera can be placed at a square without an obstacle, in one of the four directions: up, down, left, or right.<br>
Multiple surveillance cameras may be placed at the same square.

Each surveillance camera monitors the square it is placed at, and the squares in the direction it is placed in, as far as there is no obstacle in between.

At least how many surveillance cameras are needed to monitor all squares without an obstacle?

## Constraints

- $1 \leq H,W \leq 300$
- $S_{i,j}$ is `.` or `#`.

## Input

The input is given from Standard Input in the following format:

> $H$ $W$
> 
> $S_{1,1}\ldots S_{1,W}$
> 
> $\vdots$
> 
> $S_{H,1}\ldots S_{H,W}$

## Output

Print the answer.

```input1
3 3
...
.#.
...
```

```output1
4
```

For example, if we install two surveillance cameras at square $(1, 1)$ facing right and down, and another two at square $(3, 3)$ facing up and left, all squares without an obstacle will be monitored.

```input2
3 5
...##
.#...
...#.
```

```output2
5
```

For example, if we install two surveillance cameras at square $(1, 1)$ facing right and down, another at square $(3, 3)$ facing left, and another two at square $(2, 5)$ facing left and down, all squares without an obstacle will be monitored.

Note that the camera at square $(2, 5)$ facing left cannot monitor square $(2, 1)$, since there is an obstacle in between at square $(2, 2)$.

```input3
14 107
...........................................................................................................
...........................................................................................................
..#########..###....###########..###.......###...###########..####.......###...###########...###########...
..########..###....###########....###.....###...###########...#####......###..###########...###########....
..#######..###.....###.............###...###....###...........######.....###..###...........###............
..######..###......###..............###.###.....###...........###.###....###..###...........###............
..#####..###.......############......#####......############..###..###...###..###...........############...
..####....###......############.......###.......############..###...###..###..###...........############...
..###......###.....###................###.......###...........###....###.###..###...........###............
..##........###....###................###.......###...........###.....######..###...........###............
..#..........###...############.......###.......############..###......#####..############..############...
..............###...###########.......###........###########..###.......####...###########...###########...
...........................................................................................................
...........................................................................................................
```

```output3
91
```