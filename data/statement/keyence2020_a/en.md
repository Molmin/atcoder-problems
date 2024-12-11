Score : $100$ points

## Problem Statement

We have a grid with $H$ rows and $W$ columns, where all the squares are initially white.

You will perform some number of painting operations on the grid.
In one operation, you can do one of the following two actions:

- Choose one row, then paint all the squares in that row black.
- Choose one column, then paint all the squares in that column black.

At least how many operations do you need in order to have $N$ or more black squares in the grid?
It is guaranteed that, under the conditions in Constraints, having $N$ or more black squares is always possible by performing some number of operations.

## Constraints

- $1 \leq H \leq 100$
- $1 \leq W \leq 100$
- $1 \leq N \leq H \times W$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $H$
> 
> $W$
> 
> $N$

## Output

Print the minimum number of operations needed.

```input1
3
7
10
```

```output1
2
```

You can have $14$ black squares in the grid by performing the "row" operation twice, on different rows.

```input2
14
12
112
```

```output2
8
```

```input3
2
100
200
```

```output3
2
```