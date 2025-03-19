Score : $200$ points

## Problem Statement

**Overview**: Create an $N \times N$ pattern as follows.
```plain
###########
#.........#
#.#######.#
#.#.....#.#
#.#.###.#.#
#.#.#.#.#.#
#.#.###.#.#
#.#.....#.#
#.#######.#
#.........#
###########
```

You are given a positive integer $N$.

Consider an $N \times N$ grid. Let $(i,j)$ denote the cell at the $i$-th row from the top and the $j$-th column from the left. Initially, no cell is colored.

Then, for $i = 1,2,\dots,N$ in order, perform the following operation:

- Let $j = N + 1 - i$.
- If $i \leq j$, fill the rectangular region whose top-left cell is $(i,i)$ and bottom-right cell is $(j,j)$ with black if $i$ is odd, or white if $i$ is even. If some cells are already colored, overwrite their colors.
- If $i &gt; j$, do nothing.

After all these operations, it can be proved that there are no uncolored cells. Determine the final color of each cell.

## Constraints

- $1 \leq N \leq 50$
- All input values are integers.

## Input

The input is given from Standard Input in the following format:

> $N$

## Output

Print $N$ lines. The $i$-th line should contain a length-$N$ string $S_i$ representing the colors of the $i$-th row of the grid after all operations, as follows:

- If cell $(i,j)$ is finally colored black, the $j$-th character of $S_i$ should be `#`.
- If cell $(i,j)$ is finally colored white, the $j$-th character of $S_i$ should be `.`.

```input1
11
```

```output1
###########
#.........#
#.#######.#
#.#.....#.#
#.#.###.#.#
#.#.#.#.#.#
#.#.###.#.#
#.#.....#.#
#.#######.#
#.........#
###########
```

This matches the pattern shown in the **Overview**.

```input2
5
```

```output2
#####
#...#
#.#.#
#...#
#####
```

Colors are applied as follows, where `?` denotes a cell not yet colored:

```output2
i=1      i=2      i=3      i=4      i=5
?????    #####    #####    #####    #####    #####
?????    #####    #...#    #...#    #...#    #...#
????? -> ##### -> #...# -> #.#.# -> #.#.# -> #.#.#
?????    #####    #...#    #...#    #...#    #...#
?????    #####    #####    #####    #####    #####
```

```input3
8
```

```output3
########
#......#
#.####.#
#.#..#.#
#.#..#.#
#.####.#
#......#
########
```

```input4
2
```

```output4
##
##
```