Score : $1000$ points

## Problem Statement

There is a grid of $H$ rows and $W$ columns. Initially, all cells are uncolored.

You can repeat the following procedure any number of times:

- Choose an integer $i$ between $1$ and $C$, inclusive, and choose exactly one cell in the grid.
- Then, color that chosen cell, as well as all cells in the same row as the chosen cell and all cells in the same column as the chosen cell (a total of $(H+W-1)$ cells), with color $i$. (If any cell is already colored, its color is overwritten with color $i$.)

Print the number, modulo $998244353$, of different grids in which **every cell is colored** that can be obtained by repeating the procedure above.

## Constraints

- $1 \leq H, W \leq 400$
- $1 \leq C \leq 10^9$
- All input values are integers.

## Input

The input is given from Standard Input in the following format:

> $H$ $W$ $C$

## Output

Print the answer.

```input1
2 3 2
```

```output1
26
```

Below, let $(i, j)$ denote the cell at the $i$-th row from the top and the $j$-th column from the left. Also, let `.`, `1`, `2` denote an uncolored cell, a cell colored with color $1$, a cell colored with color $2$, respectively.

From the initial grid in Sample Input 1, if you first choose color $2$ and cell $(2, 2)$, the grid becomes:

```output1
.2.
222
```

Then, if you choose color $1$ and cell $(1, 1)$, the grid becomes:

```output1
111
122
```

All cells are colored in this grid, so it satisfies the condition in the problem statement. Furthermore, if you then choose color $1$ and cell $(1, 3)$, the grid becomes:

```output1
111
121
```

All cells are again colored in this grid, satisfying the condition in the problem statement.

```input2
3 2 1
```

```output2
1
```

```input3
229 327 763027379
```

```output3
547014653
```