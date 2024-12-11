Score : $400$ points

## Problem Statement

Takahashi has a maze, which is a grid of $H \times W$ squares with $H$ horizontal rows and $W$ vertical columns.

The square at the $i$-th row from the top and the $j$-th column is a "wall" square if $S_{ij}$ is `#`, and a "road" square if $S_{ij}$ is `.`.

From a road square, you can move to a horizontally or vertically adjacent road square.

You cannot move out of the maze, move to a wall square, or move diagonally.

Takahashi will choose a starting square and a goal square, which can be any road squares, and give the maze to Aoki.

Aoki will then travel from the starting square to the goal square, in the minimum number of moves required.

In this situation, find the maximum possible number of moves Aoki has to make.

## Constraints

- $1 \leq H,W \leq 20$
- $S_{ij}$ is `.` or `#`.
- $S$ contains at least two occurrences of `.`.
- Any road square can be reached from any road square in zero or more moves.

## Input

Input is given from Standard Input in the following format:

> $H$ $W$
> 
> $S_{11}$$...$$S_{1W}$
> 
> $:$
> 
> $S_{H1}$$...$$S_{HW}$

## Output

Print the maximum possible number of moves Aoki has to make.

```input1
3 3
...
...
...
```

```output1
4
```

If Takahashi chooses the top-left square as the starting square and the bottom-right square as the goal square, Aoki has to make four moves.

```input2
3 5
...#.
.#.#.
.#...
```

```output2
10
```

If Takahashi chooses the bottom-left square as the starting square and the top-right square as the goal square, Aoki has to make ten moves.