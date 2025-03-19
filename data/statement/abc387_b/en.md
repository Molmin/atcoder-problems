Score : $150$ points

## Problem Statement

Among the $81$ integers that appear in the $9$-by-$9$ multiplication table, find the sum of those that are not $X$.

There is a grid of size $9$ by $9$.<br>
Each cell of the grid contains an integer: the cell at the $i$-th row from the top and the $j$-th column from the left contains $i \times j$.<br>
You are given an integer $X$. Among the $81$ integers written in this grid, find the sum of those that are not $X$. If the same value appears in multiple cells, add it for each cell.

## Constraints

- $X$ is an integer between $1$ and $81$, inclusive.

## Input

The input is given from Standard Input in the following format:

> $X$

## Output

Print the sum of the integers that are not $X$ among the $81$ integers written in the grid.

```input1
1
```

```output1
2024
```

The only cell with $1$ in the grid is the cell at the 1st row from the top and 1st column from the left. Summing all integers that are not $1$ yields $2024$.

```input2
11
```

```output2
2025
```

There is no cell containing $11$ in the grid. Thus, the answer is $2025$, the sum of all $81$ integers.

```input3
24
```

```output3
1929
```