Score : $525$ points

## Problem Statement

There is an $N \times M$ grid and a player standing on it.<br>
Let $(i,j)$ denote the square at the $i$-th row from the top and $j$-th column from the left of this grid.<br>
Each square of this grid is black or white, which is represented by $N$ strings $S_1,S_2,\dots,S_N$ of length $M$ as follows:

- if the $j$-th character of $S_i$ is `.`, square $(i,j)$ is white;
- if the $j$-th character of $S_i$ is `#`, square $(i,j)$ is black.

The grid is said to be **beautiful** when the following condition is satisfied.

- For every pair of integers $(i,j)$ such that $1 \le i \le N, 1 \le j \le M$, if square $(i,j)$ is black, the square under $(i,j)$ and the square to the immediate lower right of $(i,j)$ are also black (if they exist).
- Formally, all of the following are satisfied.-   - If square $(i,j)$ is black and square $(i+1,j)$ exists, square $(i+1,j)$ is also black.
-   - If square $(i,j)$ is black and square $(i+1,j+1)$ exists, square $(i+1,j+1)$ is also black.

Takahashi can paint zero or more white squares black, and he will do so to make the grid beautiful.<br>
Find the number of different beautiful grids he can make, modulo $998244353$.<br>
Two grids are considered different when there is a square that has different colors in those two grids.

## Constraints

- $1 \le N,M \le 2000$
- $S_i$ is a string of length $M$ consisting of  `.` and `#`.

## Input

The input is given from Standard Input in the following format:

> $N$ $M$
> 
> $S_1$
> 
> $S_2$
> 
> $\vdots$
> 
> $S_N$

## Output

Print the answer as an integer.

```input1
2 2
.#
..
```

```output1
3
```

He can make the following three different beautiful grids:

```output1
.#  .#  ##
.#  ##  ##
```

```input2
5 5
....#
...#.
..#..
.#.#.
#...#
```

```output2
92
```

```input3
25 25
.........................
.........................
.........................
.........................
.........................
.........................
.........................
.........................
.........................
.........................
.........................
.........................
.........................
.........................
.........................
.........................
.........................
.........................
.........................
.........................
.........................
.........................
.........................
.........................
.........................
```

```output3
604936632
```

Find the count modulo $998244353$.