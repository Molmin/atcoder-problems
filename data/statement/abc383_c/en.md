Score : $350$ points

## Problem Statement

The AtCoder company office is represented as a grid of $H$ rows and $W$ columns. Let $(i, j)$ denote the cell at the $i$-th row from the top and $j$-th column from the left.

The state of each cell is represented by a character $S_{i,j}$. If $S_{i,j}$ is `#`, that cell has a wall; if $S_{i,j}$ is `.`, that cell is a floor; if $S_{i,j}$ is `H`, that cell has a humidifier placed on a floor cell.

A certain cell is considered humidified if it can be reached from at least one humidifier cell by at most $D$ moves up, down, left, or right without passing through a wall. Note that any cell with a humidifier is always humidified.

Find the number of humidified floor cells.

## Constraints

- $1 \leq H \leq 1000$
- $1 \leq W \leq 1000$
- $0 \leq D \leq H\times W$
- $S_{i,j}$ is `#`, `.`, or `H`. $(1 \leq i \leq H, 1 \leq j \leq W)$
- All input numbers are integers.

## Input

The input is given from Standard Input in the following format:

> $H$ $W$ $D$
> 
> $S_{1,1}$$S_{1,2}$$\cdots$$S_{1,W}$
> 
> $S_{2,1}$$S_{2,2}$$\cdots$$S_{2,W}$
> 
> $\vdots$
> 
> $S_{H,1}$$S_{H,2}$$\cdots$$S_{H,W}$

## Output

Print the answer.

```input1
3 4 1
H...
#..H
.#.#
```

```output1
5
```

Five cells $(1,1), (1,2), (1,4), (2,3), (2,4)$ are humidified.

```input2
5 6 2
##...H
H.....
..H.#.
.HH...
.###..
```

```output2
21
```

```input3
1 6 3
...#..
```

```output3
0
```

It is possible that no cells are humidified.