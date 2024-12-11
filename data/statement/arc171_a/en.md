Score: $400$ points

## Problem Statement

There is a chessboard with $N$ rows and $N$ columns. Let $(i, j)$ denote the square at the $i$-th row from the top and the $j$-th column from the left.<br>
You will now place pieces on the board. There are two types of pieces, called **rooks** and **pawns**.<br>
A placement of pieces is called a **good arrangement** when it satisfies the following conditions:

- Each square has zero or one piece placed on it.
- If there is a rook at $(i, j)$, there is no piece at $(i, k)$ for all $k$ $(1 \leq k \leq N)$ where $k \neq j$.
- If there is a rook at $(i, j)$, there is no piece at $(k, j)$ for all $k$ $(1 \leq k \leq N)$ where $k \neq i$.
- If there is a pawn at $(i, j)$ and $i \geq 2$, there is no piece at $(i-1, j)$.

Is it possible to place all $A$ rooks and $B$ pawns on the board in a good arrangement?

You are given $T$ test cases; solve each of them.

## Constraints

- $1 \leq T \leq 10^5$
- $1 \leq N \leq 10^4$
- $0 \leq A, B$
- $1 \leq A + B \leq N^2$
- All input values are integers.

## Input

The input is given from Standard Input in the following format. Here, $\mathrm{case}_i$ represents the $i$-th case.

> $T$
> 
> $\mathrm{case}_1$
> 
> $\mathrm{case}_2$
> 
> $\vdots$
> 
> $\mathrm{case}_T$

Each test case is given in the following format.

> $N$ $A$ $B$

## Output

Print $T$ lines. The $i$-th line should contain the answer for the $i$-th test case.<br>
For each test case, print `Yes` if it is possible to place the pieces in a good arrangement and `No` otherwise.

```input1
8
5 2 3
6 5 8
3 2 2
11 67 40
26 22 16
95 91 31
80 46 56
998 2 44353
```

```output1
Yes
No
No
No
Yes
No
Yes
Yes
```

In the first test case, for example, you can place rooks at $(1, 1)$ and $(2, 4)$, and pawns at $(3, 3)$, $(4, 2)$, and $(5, 3)$ to have all the pieces in a good arrangement.<br>
In the second test case, it is impossible to place all the pieces in a good arrangement.