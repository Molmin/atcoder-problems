Score : $400$ points

## Problem Statement

There is a $H \times W$-square grid with $H$ horizontal rows and $W$ vertical columns. Let $(i, j)$ denote the square at the $i$-th row from the top and $j$-th column from the left.<br>
Each square is described by a character $C_{i, j}$, where $C_{i, j} =$ `.` means $(i, j)$ is an empty square, and $C_{i, j} =$ `#` means $(i, j)$ is a wall.

Takahashi is about to start walking in this grid. When he is on $(i, j)$, he can go to $(i, j + 1)$ or $(i + 1, j)$. However, he cannot exit the grid or enter a wall square. He will stop when there is no more square to go to.

When starting on $(1, 1)$, at most how many squares can Takahashi visit before he stops?

## Constraints

- $1 \leq H, W \leq 100$
- $H$ and $W$ are integers.
- $C_{i, j} =$ `.` or $C_{i, j} =$ `#`. $(1 \leq i \leq H, 1 \leq j \leq W)$
- $C_{1, 1} =$ `.`

## Input

Input is given from Standard Input in the following format:

> $H$ $W$
> 
> $C_{1, 1} \ldots C_{1, W}$
> 
> $\vdots$
> 
> $C_{H, 1} \ldots C_{H, W}$

## Output

Print the answer.

```input1
3 4
.#..
..#.
..##
```

```output1
4
```

For example, by going $(1, 1) \rightarrow (2, 1) \rightarrow (2, 2) \rightarrow (3, 2)$, he can visit $4$ squares.

He cannot visit $5$ or more squares, so we should print $4$.

```input2
1 1
.
```

```output2
1
```

```input3
5 5
.....
.....
.....
.....
.....
```

```output3
9
```