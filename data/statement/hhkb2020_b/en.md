Score : $200$ points

## Problem Statement

We have a grid with $H$ horizontal rows and $W$ vertical columns of squares, where each square is tidy or untidy.

You will now place a mattress on this grid.

The mattress can be placed on two horizontally or vertically adjacent tidy squares in the grid.

Given are integers $H$, $W$, and $H$ strings $S_i$ of length $W$ each.
If the $j$-th character of $S_i$ is `.`, the square at the $i$-th row from the top and the $j$-th column from the left is tidy; if the $j$-th character of $S_i$ is `#`, the square at the $i$-th row from the top and the $j$-th column from the left is untidy.

Find the number of ways to choose the position for the mattress.

## Constraints

- $2 \leq H \leq 100$
- $2 \leq W \leq 100$
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

Print the number of ways to choose the position for the mattress.

```input1
2 3
..#
#..
```

```output1
3
```

We have the following three choices:

- the $1$-st and $2$-nd squares from the left in the $1$-st row from the top;
- the $2$-nd and $3$-rd squares from the left in the $2$-nd row from the top; and
- the $1$-st and $2$-nd squares from the top in the $2$-nd column the left.

```input2
2 2
.#
#.
```

```output2
0
```