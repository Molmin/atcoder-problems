Score : $500$ points

## Problem Statement

There is a town divided into a grid of cells with $H$ rows and $W$ columns. The cell at the $i$-th row from the top and $j$-th column from the left is a passable space if $S_{i,j}$ is `.` and a block if $S_{i,j}$ is `#`.

Takahashi will go from his house to a fish market. His house is in the cell at the top-left corner, and the fish market is in the cell at the bottom-right corner.

Takahashi can move one cell up, down, left, or right to a passable cell. He cannot leave the town.
He cannot enter a block, either. However, his physical strength allows him to destroy all blocks in a square region with $2\times 2$ cells of his choice with one punch, making these cells passable.

Find the minimum number of punches needed for Takahashi to reach the fish market.

## Constraints

- $2 \leq H,W \leq 500$
- $H$ and $W$ are integers.
- $S_{i,j}$ is `.` or `#`.
- $S_{1,1}$ and $S_{H,W}$ are `.`.

## Input

Input is given from Standard Input in the following format:

> $H$ $W$
> 
> $S_{1,1} \ldots S_{1,W}$
> 
> $\vdots$
> 
> $S_{H,1} \ldots S_{H,W}$

## Output

Print the answer.

```input1
5 5
..#..
#.#.#
##.##
#.#.#
..#..
```

```output1
1
```

He can reach the fish market by, for example, destroying the blocks in the square region with $2\times 2$ cells marked `*` below.

```output1
..#..
#.**#
##**#
#.#.#
..#..
```

It is not required that all of the $2\times 2$ cells in the region to punch are blocks.

```input2
5 7
.......
######.
.......
.######
.......
```

```output2
0
```

He can reach the fish market without destroying blocks, though he has to go a long way around.

```input3
8 8
.#######
########
########
########
########
########
########
#######.
```

```output3
5
```