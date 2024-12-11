Score : $500$ points

## Problem Statement

We have a grid with $H$ horizontal rows and $W$ vertical columns of squares, where each square is tidy or untidy.

You will now place lamps on zero or more tidy squares in this grid.

A lamp will lighten the squares in each of the four directions - up, down, left, and right - to the point just before an edge of the grid or an untidy square is reached for the first time (the untidy square will not be lighted). The lamp will also lighten the square on which it is placed.

Given are integers $H$, $W$, and $H$ strings $S_i$ of length $W$ each.
If the $j$-th character of $S_i$ is `.`, the square at the $i$-th row from the top and the $j$-th column from the left is tidy; if the $j$-th character of $S_i$ is `#`, the square at the $i$-th row from the top and the $j$-th column from the left is untidy.

Let $K$ be the number of tidy squares. There are $2^K$ ways to place the lamps in total.
Assume that, for each of these $2^K$ ways, the number of squares lightened by one or more lamps is computed. Find the sum of those numbers modulo $1,000,000,007$.

## Constraints

- $1 \leq H \leq 2000$
- $1 \leq W \leq 2000$
- $S_i$ is a string of length $W$ consisting of `.` and `#`.

## Input

Input is given from Standard Input in the following format:

> $H$ $W$
> 
> $S_1$
> 
> $:$
> 
> $S_H$

## Output

Print the sum, modulo $1,000,000,007$, of the numbers of squares lightened by one or more lamps over the $2^K$ ways to place the lamps.

```input1
1 5
..#..
```

```output1
48
```

There are $16$ ways to place the lamps in total.

- In $9$ of the ways (where at least one of the $1$-st and $2$-nd squares from the left contains a lamp and at least one of the $4$-th and $5$-th squares from the left contains a lamp), $4$ squares will be lighted.
- In $3$ of the ways (where at least one of the $1$-st and $2$-nd squares from the left contains a lamp but none of the $4$-th and $5$-th squares from the left contains a lamp), $2$ squares will be lighted.
- In another $3$ of the ways (where none of the $1$-st and $2$-nd squares from the left contains a lamp but at least one of the $4$-th and $5$-th squares from the left contains a lamp), $2$ squares will be lighted.
- In $1$ of the ways (where no square contains a lamp), $0$ squares will be lighted.

The sum in question is $4 \times 9 + 2 \times 3 + 2 \times 3 + 0 \times 1 = 48$.

```input2
2 3
..#
#..
```

```output2
52
```