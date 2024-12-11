Score : $500$ points

## Problem Statement

We have a grid with $H$ rows and $W$ columns.  Each square is painted either white or black.
For each integer pair $(i, j)$ such that $1 \leq i \leq H$ and $1 \leq j \leq W$,
the color of the square at the $i$-th row from the top and $j$-th column from the left (we simply denote this square by Square $(i, j)$) is represented by $A_{i, j}$.
Square $(i, j)$ is white if $A_{i, j} = 0$, and black if $A_{i, j} = 1$.

You may perform the following operations any number of (possibly $0$) times in any order:

- Choose an integer $i$ such that $1 \leq i \leq H$, pay $R_i$ yen (the currency in Japan), and invert the color of each square in the $i$-th row from the top in the grid.  (White squares are painted black, and black squares are painted white.)
- Choose an integer $j$ such that $1 \leq j \leq W$, pay $C_j$ yen, and invert the color of each square in the $j$-th column from the left in the grid.

Print the minimum total cost to satisfy the following condition:

- There exists a path from Square $(1, 1)$ to Square $(H, W)$
that can be obtained by repeatedly moving down or to the right, such that all squares in the path (including Square $(1, 1)$ and Square $(H, W)$) have the same color.

We can prove that it is always possible to satisfy the condition in a finite number of operations under the Constraints of this problem.

## Constraints

- $2 \leq H, W \leq 2000$
- $1 \leq R_i \leq 10^9$
- $1 \leq C_j \leq 10^9$
- $A_{i, j} \in \lbrace 0, 1\rbrace$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $H$ $W$
> 
> $R_1$ $R_2$ $\ldots$ $R_H$
> 
> $C_1$ $C_2$ $\ldots$ $C_W$
> 
> $A_{1, 1}A_{1, 2}\ldots A_{1, W}$
> 
> $A_{2, 1}A_{2, 2}\ldots A_{2, W}$
> 
> $\vdots$
> 
> $A_{H, 1}A_{H, 2}\ldots A_{H, W}$

## Output

Print the answer.

```input1
3 4
4 3 5
2 6 7 4
0100
1011
1010
```

```output1
9
```

We denote a white square by `0` and a black square by `1`.
On the initial grid, you can pay $R_2 = 3$ yen to invert the color of each square in the $2$-nd row from the top to make the grid:

```output1
0100
0100
1010
```

Then, you can pay $C_2 = 6$ yen to invert the color of each square in the $2$-nd row from the left to make the grid:

```output1
0000
0000
1110
```

Now, there exists a path from Square $(1, 1)$ to Square $(3, 4)$ such that all squares in the path have the same color (such as the path $(1, 1) \rightarrow (2, 1) \rightarrow (2, 2) \rightarrow (2, 3) \rightarrow (2, 4) \rightarrow (3, 4)$).
The total cost paid is $3+6 = 9$ yen, which is the minimum possible.

```input2
15 20
29 27 79 27 30 4 93 89 44 88 70 75 96 3 78
39 97 12 53 62 32 38 84 49 93 53 26 13 25 2 76 32 42 34 18
01011100110000001111
10101111100010011000
11011000011010001010
00010100011111010100
11111001101010001011
01111001100101011100
10010000001110101110
01001011100100101000
11001000100101011000
01110000111011100101
00111110111110011111
10101111111011101101
11000011000111111001
00011101011110001101
01010000000001000000
```

```output2
125
```