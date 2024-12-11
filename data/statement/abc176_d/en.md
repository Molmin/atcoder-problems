Score : $400$ points

## Problem Statement

A maze is composed of a grid of $H \times W$ squares - $H$ vertical, $W$ horizontal.

The square at the $i$-th row from the top and the $j$-th column from the left - $(i,j)$ - is a wall if $S_{ij}$ is `#` and a road if $S_{ij}$ is `.`.

There is a magician in $(C_h,C_w)$. He can do the following two kinds of moves:

- Move A: Walk to a road square that is vertically or horizontally adjacent to the square he is currently in.
- Move B: Use magic to warp himself to a road square in the $5\times 5$ area centered at the square he is currently in.

In either case, he cannot go out of the maze.

At least how many times does he need to use the magic to reach $(D_h, D_w)$?

## Constraints

- $1 \leq H,W \leq 10^3$
- $1 \leq C_h,D_h \leq H$
- $1 \leq C_w,D_w \leq W$
- $S_{ij}$ is `#` or `.`.
- $S_{C_h C_w}$ and $S_{D_h D_w}$ are `.`.
- $(C_h,C_w) \neq (D_h,D_w)$

## Input

Input is given from Standard Input in the following format:

> $H$ $W$
> 
> $C_h$ $C_w$
> 
> $D_h$ $D_w$
> 
> $S_{11}\ldots S_{1W}$
> 
> $\vdots$
> 
> $S_{H1}\ldots S_{HW}$

## Output

Print the minimum number of times the magician needs to use the magic. If he cannot reach $(D_h,D_w)$, print `-1` instead.

```input1
4 4
1 1
4 4
..#.
..#.
.#..
.#..
```

```output1
1
```

For example, by walking to $(2,2)$ and then using the magic to travel to $(4,4)$, just one use of magic is enough.

Note that he cannot walk diagonally.

```input2
4 4
1 4
4 1
.##.
####
####
.##.
```

```output2
-1
```

He cannot move from there.

```input3
4 4
2 2
3 3
....
....
....
....
```

```output3
0
```

No use of magic is needed.

```input4
4 5
1 2
2 5
#.###
####.
#..##
#..##
```

```output4
2
```