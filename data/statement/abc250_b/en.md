Score : $200$ points

## Problem Statement

Tiles are aligned in $N$ horizontal rows and $N$ vertical columns.  Each tile has a grid with $A$ horizontal rows and $B$ vertical columns.  On the whole, the tiles form a grid $X$ with $(A\times N)$ horizontal rows and $(B\times N)$ vertical columns.<br>
For $1\leq i,j \leq N$, Tile $(i,j)$ denotes the tile at the $i$-th row from the top and the $j$-th column from the left.

Each square of $X$ is painted as follows.  

- Each tile is either a **white tile** or a **black tile**.
- Every square in a white tile is painted white; every square in a black tile is painted black.
- Tile $(1,1)$ is a white tile.
- Two tiles sharing a side have different colors.  Here, Tile $(a,b)$ and Tile $(c,d)$ are said to be sharing a side if and only if $|a-c|+|b-d|=1$ (where $|x|$ denotes the absolute value of $x$).

Print the grid $X$ in the format specified in the Output section.

## Constraints

- $1 \leq N,A,B \leq 10$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$ $A$ $B$

## Output

Print $(A\times N)$ strings $S_1,\ldots,S_{A\times N}$ that satisfy the following condition, with newlines in between.

- Each of $S_1,\ldots,S_{A\times N}$ is a string of length $(B\times N)$ consisting of `.` and `#`.
- For each $i$ and $j$ $(1 \leq i \leq A\times N,1 \leq j \leq B\times N)$, the $j$-th character of $S_i$ is `.` if the square at the $i$-th row from the top and $j$-th column from the left in grid $X$ is painted white; the character is `#` if the square is painted black.

```input1
4 3 2
```

```output1
..##..##
..##..##
..##..##
##..##..
##..##..
##..##..
..##..##
..##..##
..##..##
##..##..
##..##..
##..##..
```

```input2
5 1 5
```

```output2
.....#####.....#####.....
#####.....#####.....#####
.....#####.....#####.....
#####.....#####.....#####
.....#####.....#####.....
```

```input3
4 4 1
```

```output3
.#.#
.#.#
.#.#
.#.#
#.#.
#.#.
#.#.
#.#.
.#.#
.#.#
.#.#
.#.#
#.#.
#.#.
#.#.
#.#.
```

```input4
1 4 4
```

```output4
....
....
....
....
```