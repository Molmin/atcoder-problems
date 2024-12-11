Score : $300$ points

## Problem Statement

There is a grid with $N$ horizontal rows and $N$ vertical columns, where each square is painted white or black.<br>
The state of the grid is represented by $N$ strings, $S_i$.
If the $j$-th character of $S_i$ is `#`, the square at the $i$-th row from the top and the $j$-th column from the left is painted black.
If the character is `.`, then the square is painted white.

Takahashi can choose at most two of these squares that are painted white, and paint them black.<br>
Determine if it is possible to make the grid contain $6$ or more consecutive squares painted black aligned either vertically, horizontally, or diagonally.<br>
Here, the grid is said to be containing $6$ or more consecutive squares painted black aligned diagonally if the grid with $N$ rows and $N$ columns completely contains a subgrid with $6$ rows and $6$ columns such that all the squares on at least one of its diagonals are painted black.

## Constraints

- $6 \leq N \leq 1000$
- $\lvert S_i\rvert =N$
- $S_i$ consists of `#` and `.`.

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $S_1$
> 
> $S_2$
> 
> $\vdots$
> 
> $S_N$

## Output

If it is possible to fulfill the condition by painting at most two squares, then print `Yes`; otherwise, print `No`.

```input1
8
........
........
.#.##.#.
........
........
........
........
........
```

```output1
Yes
```

By painting the $3$-rd and the $6$-th squares from the left in the $3$-rd row from the top, there will be $6$ squares painted black aligned horizontally.

```input2
6
######
######
######
######
######
######
```

```output2
Yes
```

While Takahashi cannot choose a square to paint black, the grid already satisfies the condition.

```input3
10
..........
#..##.....
..........
..........
....#.....
....#.....
.#...#..#.
..........
..........
..........
```

```output3
No
```