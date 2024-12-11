Score : $500$ points

## Problem Statement

We have a grid with $H$ horizontal rows and $W$ vertical columns. Let $(i, j)$ denote the square at the $i$-th row from the top and $j$-th column from the left.

Each square contains an integer. For each $i = 1, 2, \ldots, N$, the square $(r_i, c_i)$ contains a positive integer $a_i$. The other square contains a $0$.

Initially, there is a piece on the square $(R, C)$.
Takahashi can move the piece to a square other than the square it occupies now, any number of times.
However, when moving the piece, both of the following conditions must be satisfied.

- The integer written on the square to which the piece is moved is strictly greater than the integer written on the square from which the piece is moved.
- The squares to and from which the piece is moved are in the same row or the same column.

For each $i = 1, 2, \ldots, N$, print the maximum number of times Takahashi can move the piece when $(R, C) = (r_i, c_i)$.

## Constraints

- $2 \leq H, W \leq 2 \times 10^5$
- $1 \leq N \leq \min(2 \times 10^5, HW)$
- $1 \leq r_i \leq H$
- $1 \leq c_i \leq W$
- $1 \leq a_i \leq 10^9$
- $i \neq j \Rightarrow (r_i, c_i) \neq (r_j, c_j)$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $H$ $W$ $N$
> 
> $r_1$ $c_1$ $a_1$
> 
> $r_2$ $c_2$ $a_2$
> 
> $\vdots$
> 
> $r_N$ $c_N$ $a_N$

## Output

Print $N$ lines.
For each $i = 1, 2, \ldots, N$, the $i$-th line should contain the maximum number of times Takahashi can move the piece when $(R, C) = (r_i, c_i)$.

```input1
3 3 7
1 1 4
1 2 7
2 1 3
2 3 5
3 1 2
3 2 5
3 3 5
```

```output1
1
0
2
0
3
1
0
```

The grid contains the following integers.

```output1
4 7 0
3 0 5
2 5 5
```

- When $(R, C) = (r_1, c_1) = (1, 1)$, you can move the piece once by moving it as $(1, 1) \rightarrow (1, 2)$.
- When $(R, C) = (r_2, c_2) = (1, 2)$, you cannot move the piece at all.
- When $(R, C) = (r_3, c_3) = (2, 1)$, you can move the piece twice by moving it as $(2, 1) \rightarrow (1, 1) \rightarrow (1, 2)$.
- When $(R, C) = (r_4, c_4) = (2, 3)$, you cannot move the piece at all.
- When $(R, C) = (r_5, c_5) = (3, 1)$, you can move the piece three times by moving it as $(3, 1) \rightarrow (2, 1) \rightarrow (1, 1) \rightarrow (1, 2)$.
- When $(R, C) = (r_6, c_6) = (3, 2)$, you can move the piece once by moving it as $(3, 2) \rightarrow (1, 2)$.
- When $(R, C) = (r_7, c_7) = (3, 3)$, you cannot move the piece at all.

```input2
5 7 20
2 7 8
2 6 4
4 1 9
1 5 4
2 2 7
5 5 2
1 7 2
4 6 6
1 4 1
2 1 10
5 6 9
5 3 3
3 7 9
3 6 3
4 3 4
3 3 10
4 2 1
3 5 4
1 2 6
4 7 9
```

```output2
2
4
1
5
3
6
6
2
7
0
0
4
1
5
3
0
5
2
4
0
```