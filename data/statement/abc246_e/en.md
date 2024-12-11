Score : $500$ points

**During the time of the contest, the memory limit was set to 2GB. However, due to a change in the judging environment, the memory limit has now been set to 1GB. Please note that it has been confirmed that solutions can still achieve an Acceptable Completion (AC) within this memory limit.**

## Problem Statement

We have an $N \times N$ chessboard. Let $(i, j)$ denote the square at the $i$-th row from the top and $j$-th column from the left of this board.<br>
The board is described by $N$ strings $S_i$.<br>
The $j$-th character of the string $S_i$, $S_{i,j}$, means the following.

- If $S_{i,j}=$ `.`, the square $(i, j)$ is empty.
- If $S_{i,j}=$ `#`, the square $(i, j)$ is occupied by a white pawn, which cannot be moved or removed.

We have put a white bishop on the square $(A_x, A_y)$.<br>
Find the minimum number of moves needed to move this bishop from $(A_x, A_y)$ to $(B_x, B_y)$ according to the rules of chess (see Notes).<br>
If it cannot be moved to $(B_x, B_y)$, report `-1` instead.

## Notes

A white [bishop](https://en.wikipedia.org/wiki/Bishop_(chess)) on the square $(i, j)$ can go to the following positions in one move.

- <p>For each positive integer $d$, it can go to $(i+d,j+d)$ if all of the conditions are satisfied.</p>
-   - The square $(i+d,j+d)$ exists in the board.
-   - For every positive integer $l \le d$, $(i+l,j+l)$ is not occupied by a white pawn.
- <p>For each positive integer $d$, it can go to $(i+d,j-d)$ if all of the conditions are satisfied.</p>
-   - The square $(i+d,j-d)$ exists in the board.
-   - For every positive integer $l \le d$, $(i+l,j-l)$ is not occupied by a white pawn.
- <p>For each positive integer $d$, it can go to $(i-d,j+d)$ if all of the conditions are satisfied.</p>
-   - The square $(i-d,j+d)$ exists in the board.
-   - For every positive integer $l \le d$, $(i-l,j+l)$ is not occupied by a white pawn.
- <p>For each positive integer $d$, it can go to $(i-d,j-d)$ if all of the conditions are satisfied.</p>
-   - The square $(i-d,j-d)$ exists in the board.
-   - For every positive integer $l \le d$, $(i-l,j-l)$ is not occupied by a white pawn.

## Constraints

- $2 \le N \le 1500$
- $1 \le A_x,A_y \le N$
- $1 \le B_x,B_y \le N$
- $(A_x,A_y) \neq (B_x,B_y)$
- $S_i$ is a string of length $N$ consisting of `.` and `#`.
- $S_{A_x,A_y}=$ `.`
- $S_{B_x,B_y}=$ `.`

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $A_x$ $A_y$
> 
> $B_x$ $B_y$
> 
> $S_1$
> 
> $S_2$
> 
> $\vdots$
> 
> $S_N$

## Output

Print the answer.

```input1
5
1 3
3 5
....#
...#.
.....
.#...
#....
```

```output1
3
```

We can move the bishop from $(1,3)$ to $(3,5)$ in three moves as follows, but not in two or fewer moves.

- $(1,3) \rightarrow (2,2) \rightarrow (4,4) \rightarrow (3,5)$

```input2
4
3 2
4 2
....
....
....
....
```

```output2
-1
```

There is no way to move the bishop from $(3,2)$ to $(4,2)$.

```input3
18
18 1
1 18
..................
.####.............
.#..#..####.......
.####..#..#..####.
.#..#..###...#....
.#..#..#..#..#....
.......####..#....
.............####.
..................
..................
.####.............
....#..#..#.......
.####..#..#..####.
.#.....####..#....
.####.....#..####.
..........#..#..#.
.............####.
..................
```

```output3
9
```