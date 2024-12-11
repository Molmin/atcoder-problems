Score : $1100$ points

## Problem Statement

We have an $H \times W$ grid, where each square is painted white or black in the initial state.
Given are strings $A_1, A_2, ..., A_H$ representing the colors of the squares in the initial state.
For each pair $(i, j)$ ($1 \leq i \leq H$, $1 \leq j \leq W$), if the $j$-th character of $A_i$ is `.`, the square at the $i$-th row and $j$-th column is painted white; if that character is `#`, that square is painted black.

Among the $2^{HW}$ ways for each square in the grid to be painted white or black, how many can be obtained from the initial state by performing the operations below any number of times (possibly zero) in any order? Find this count modulo $998,244,353$.

- Choose one row, then paint all the squares in that row white.
- Choose one row, then paint all the squares in that row black.
- Choose one column, then paint all the squares in that column white.
- Choose one column, then paint all the squares in that column black.

## Constraints

- $1 \leq H, W \leq 10$
- $|A_i| = W$ ($1 \leq i \leq H$)
- All strings $A_i$ consist of `.` and `#`.
- $H$ and $W$ are integers.

## Input

Input is given from Standard Input in the following format:

> $H$ $W$
> 
> $A_1$
> 
> $A_2$
> 
> $\vdots$
> 
> $A_H$

## Output

Print the answer.

```input1
2 2
#.
.#
```

```output1
15
```

For example, if we paint the second row black, the grid becomes:

```output1
#.
##
```

```input2
3 3
...
...
...
```

```output2
230
```

```input3
2 4
#...
...#
```

```output3
150
```

```input4
6 7
.......
.......
.#.....
..#....
.#.#...
.......
```

```output4
203949910
```