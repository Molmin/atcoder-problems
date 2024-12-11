Score : $400$ points

## Problem Statement

There is an $N \times M$ grid and a player standing on it.<br>
Let $(i,j)$ denote the square at the $i$-th row from the top and $j$-th column from the left of this grid.<br>
Each square of this grid is ice or rock, which is represented by $N$ strings $S_1,S_2,\dots,S_N$ of length $M$ as follows:

- if the $j$-th character of $S_i$ is `.`, square $(i,j)$ is ice;
- if the $j$-th character of $S_i$ is `#`, square $(i,j)$ is rock.

The outer periphery of this grid (all squares in the $1$-st row, $N$-th row, $1$-st column, $M$-th column) is rock.

Initially, the player rests on the square $(2,2)$, which is ice.<br>
The player can make the following move zero or more times.

- First, specify the direction of movement: up, down, left, or right.
- Then, keep moving in that direction until the player bumps against a rock. Formally, keep doing the following:-   - if the next square in the direction of movement is ice, go to that square and keep moving;
-   - if the next square in the direction of movement is rock, stay in the current square and stop moving.

Find the number of ice squares the player can touch (pass or rest on).

## Constraints

- $3 \le N,M \le 200$
- $S_i$ is a string of length $M$ consisting of `#` and `.`.
- Square $(i, j)$ is rock if $i=1$, $i=N$, $j=1$, or $j=M$.
- Square $(2,2)$ is ice.

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
6 6
######
#....#
#.#..#
#..#.#
#....#
######
```

```output1
12
```

For instance, the player can rest on $(5,5)$ by moving as follows:

- $(2,2) \rightarrow (5,2) \rightarrow (5,5)$.

The player can pass $(2,4)$ by moving as follows:

- $(2,2) \rightarrow (2,5)$, passing $(2,4)$ in the process.

The player cannot pass or rest on $(3,4)$.

```input2
21 25
#########################
#..............###...####
#..............#..#...###
#........###...#...#...##
#........#..#..#........#
#...##...#..#..#...#....#
#..#..#..###...#..#.....#
#..#..#..#..#..###......#
#..####..#..#...........#
#..#..#..###............#
#..#..#.................#
#........##.............#
#.......#..#............#
#..........#....#.......#
#........###...##....#..#
#..........#..#.#...##..#
#.......#..#....#..#.#..#
##.......##.....#....#..#
###.............#....#..#
####.................#..#
#########################
```

```output2
215
```