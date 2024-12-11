Score : $500$ points

## Problem Statement

There is a $H \times W$-square grid with $H$ horizontal rows and $W$ vertical columns. Let $(i, j)$ denote the square at the $i$-th row from the top and $j$-th column from the left.  

The grid has a rook, initially on $(x_1, y_1)$. Takahashi will do the following operation $K$ times.

- Move the rook to a square that shares the row or column with the square currently occupied by the rook. Here, it must move to a square different from the current one.

How many ways are there to do the $K$ operations so that the rook will be on $(x_2, y_2)$ in the end? Since the answer can be enormous, find it modulo $998244353$.

## Constraints

- $2 \leq H, W \leq 10^9$
- $1 \leq K \leq 10^6$
- $1 \leq x_1, x_2 \leq H$
- $1 \leq y_1, y_2 \leq W$

## Input

Input is given from Standard Input in the following format:

> $H$ $W$ $K$
> 
> $x_1$ $y_1$ $x_2$ $y_2$

## Output

Print the number of ways to do the $K$ operations so that the rook will be on $(x_2, y_2)$ in the end, modulo $998244353$.

```input1
2 2 2
1 2 2 1
```

```output1
2
```

We have the following two ways.

- First, move the rook from $(1, 2)$ to $(1, 1)$. Second, move it from $(1, 1)$ to $(2, 1)$.
- First, move the rook from $(1, 2)$ to $(2, 2)$. Second, move it from $(2, 2)$ to $(2, 1)$.

```input2
1000000000 1000000000 1000000
1000000000 1000000000 1000000000 1000000000
```

```output2
24922282
```

Be sure to find the count modulo $998244353$.

```input3
3 3 3
1 3 3 3
```

```output3
9
```