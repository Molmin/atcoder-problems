Score : $400$ points

## Problem Statement

You are given a grid with $N$ rows and $N$ columns, where $N$ is an even number. Let $(i, j)$ denote the cell at the $i$-th row from the top and $j$-th column from the left.

Each cell is painted black or white. If $A_{i, j} =$ `#`, cell $(i, j)$ is black; if $A_{i, j} =$ `.`, it is white.

Find the color of each cell after performing the following operation for $i = 1, 2, \ldots, \frac{N}{2}$ in this order.

- For all pairs of integers $x, y$ between $i$ and $N + 1 - i$, inclusive, replace the color of cell $(y, N + 1 - x)$ with the color of cell $(x, y)$. Perform these replacements **simultaneously for all such pairs $x, y$.**

## Constraints

- $N$ is an even number between $2$ and $3000$, inclusive.
- Each $A_{i, j}$ is `#` or `.`.

## Input

The input is given from Standard Input in the following format:

> $N$
> 
> $A_{1,1}A_{1,2}\ldots A_{1,N}$
> 
> $A_{2,1}A_{2,2}\ldots A_{2,N}$
> 
> $\vdots$
> 
> $A_{N,1}A_{N,2}\ldots A_{N,N}$

## Output

After all operations, let $B_{i, j} =$ `#` if cell $(i, j)$ is black, and $B_{i, j} =$ `.` if it is white. Print the grid in the following format:

> $B_{1,1}B_{1,2}\ldots B_{1,N}$
> 
> $B_{2,1}B_{2,2}\ldots B_{2,N}$
> 
> $\vdots$
> 
> $B_{N,1}B_{N,2}\ldots B_{N,N}$

```input1
8
.......#
.......#
.####..#
.####..#
.##....#
.##....#
.#######
.#######
```

```output1
........
#######.
#.....#.
#.###.#.
#.#...#.
#.#####.
#.......
########
```

The operations change the colors of the grid cells as follows:

```output1
.......#   ........   ........   ........   ........
.......#   ######..   #######.   #######.   #######.
.####..#   ######..   #....##.   #.....#.   #.....#.
.####..# → ##..##.. → #....##. → #.##..#. → #.###.#.
.##....#   ##..##..   #..####.   #.##..#.   #.#...#.
.##....#   ##......   #..####.   #.#####.   #.#####.
.#######   ##......   #.......   #.......   #.......
.#######   ########   ########   ########   ########
```

```input2
6
.#.#.#
##.#..
...###
###...
..#.##
#.#.#.
```

```output2
#.#.#.
.#.#.#
#.#.#.
.#.#.#
#.#.#.
.#.#.#
```

```input3
12
.......#.###
#...#...#..#
###.#..#####
..#.#.#.#...
.#.....#.###
.......#.#..
#...#..#....
#####.......
...#...#.#.#
..###..#..##
#..#.#.#.#.#
.####.......
```

```output3
.#..##...##.
#.#.#.#.#...
###.##..#...
#.#.#.#.#...
#.#.##...##.
............
............
.###.###.###
...#...#.#..
.###...#.###
...#...#...#
.###...#.###
```