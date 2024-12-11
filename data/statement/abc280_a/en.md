Score : $100$ points

## Problem Statement

There is a grid with $H$ rows from top to bottom and $W$ columns from left to right.  Each square has a piece placed on it or is empty.

The state of the grid is represented by $H$ strings $S_1, S_2, \ldots, S_H$, each of length $W$.<br>
If the $j$-th character of $S_i$ is `#`, the square at the $i$-th row from the top and $j$-th column from the left has a piece on it;<br>
if the $j$-th character of $S_i$ is `.`, the square at the $i$-th row from the top and $j$-th column from the left is empty.

How many squares in the grid have pieces on them?

## Constraints

- $1\leq H,W \leq 10$
- $H$ and $W$ are integers.
- $S_i$ is a string of length $W$ consisting of `#` and `.`.

## Input

The input is given from Standard Input in the following format:

> $H$ $W$
> 
> $S_1$
> 
> $S_2$
> 
> $\vdots$
> 
> $S_H$

## Output

Print the number of squares with pieces as an integer.

```input1
3 5
#....
.....
.##..
```

```output1
3
```

The following three squares have pieces on them:

- the square at the $1$-st row from the top and $1$-st column from the left;
- the square at the $3$-rd row from the top and $2$-nd column from the left;
- the square at the $3$-rd row from the top and $3$-rd column from the left.

Thus, $3$ should be printed.

```input2
1 10
..........
```

```output2
0
```

Since no square has a piece on it, $0$ should be printed.

```input3
6 5
#.#.#
....#
..##.
####.
..#..
#####
```

```output3
16
```