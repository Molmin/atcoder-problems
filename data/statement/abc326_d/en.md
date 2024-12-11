Score : $450$ points

## Problem Statement

You are given an integer $N$ and strings $R$ and $C$ of length $N$ consisting of `A`, `B`, and `C`. Solve the following problem.

There is a $N \times N$ grid. All cells are initially empty.<br>
You can write at most one character from `A`, `B`, and `C` in each cell. (You can also leave the cell empty.)

Determine if it is possible to satisfy all of the following conditions, and if it is possible, print one way to do so.

- Each row and each column contain exactly one `A`, one `B`, and one `C`.
- The leftmost character written in the $i$-th row matches the $i$-th character of $R$.
- The topmost character written in the $i$-th column matches the $i$-th character of $C$.

## Constraints

- $N$ is an integer between $3$ and $5$, inclusive.
- $R$ and $C$ are strings of length $N$ consisting of `A`, `B`, and `C`.

## Input

The input is given from Standard Input in the following format:

> $N$
> 
> $R$
> 
> $C$

## Output

If there is no way to fill the grid to satisfy the conditions in the problem statement, print `No` in one line.<br>
Otherwise, print one such way to fill the grid in the following format:

> Yes
> 
> $A_1$
> 
> $A_2$
> 
> $\vdots$
> 
> $A_N$

The first line should contain `Yes`.
The $i$-th of the subsequent $N$ lines should contain a string $A_i$ of length $N$.

- If the $j$-th character of $A_i$ is `.`, it indicates that the cell in the $i$-th row from the top and the $j$-th column from the left is empty.
- If the $j$-th character of $A_i$ is `A`, it indicates that `A` is written in the cell in the $i$-th row from the top and the $j$-th column from the left.
- If the $j$-th character of $A_i$ is `B`, it indicates that `B` is written in the cell in the $i$-th row from the top and the $j$-th column from the left.
- If the $j$-th character of $A_i$ is `C`, it indicates that `C` is written in the cell in the $i$-th row from the top and the $j$-th column from the left.

If there are multiple correct ways to fill the grid, you may print any of them.

```input1
5
ABCBC
ACAAB
```

```output1
Yes
AC..B
.BA.C
C.BA.
BA.C.
..CBA
```

The grid in the output example satisfies all the following conditions, so it will be treated as correct.

- Each row contains exactly one `A`, one `B`, and one `C`.
- Each column contains exactly one `A`, one `B`, and one `C`.
- The leftmost characters written in the rows are `A`, `B`, `C`, `B`, `C` from top to bottom.
- The topmost characters written in the columns are `A`, `C`, `A`, `A`, `B` from left to right.

```input2
3
AAA
BBB
```

```output2
No
```

For this input, there is no way to fill the grid to satisfy the conditions.