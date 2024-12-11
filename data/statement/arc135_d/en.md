Score : $700$ points

## Problem Statement

We have an $H \times W$ grid, where each square has one integer written on it.
For $1\leq i\leq H$ and $1\leq j\leq W$, let $A_{i,j}$ denote the integer written on the square at the $i$-th row and $j$-th column.

You can do the operation below any number of times (possibly zero).

- Choose integers $i$ and $j$ such that $1\leq i\leq H - 1$ and $1\leq j\leq W - 1$.
- Choose another integer $x$.
- Add $x$ to each of $A_{i,j}$, $A_{i,j+1}$, $A_{i+1,j}$, and $A_{i+1,j+1}$.

Print the minimum possible value of $\sum_{i=1}^H \sum_{j=1}^W |A_{i,j}|$ after your operations, and the integers on the grid when that value is achieved.

## Constraints

- $2\leq H, W \leq 500$
- $|A_{i,j}|\leq 10^9$

## Input

Input is given from Standard Input from the following format:

> $H$ $W$
> 
> $A_{1,1}$ $\ldots$ $A_{1,W}$
> 
> $\vdots$
> 
> $A_{H,1}$ $\ldots$ $A_{H,W}$

## Output

Print $H + 1$ lines.
The $1$-st line should contain the value of $\sum_{i=1}^H \sum_{j=1}^W |A_{i,j}|$.
The $2$-nd through $(H+1)$-th lines should contain the integers on the grid, in the following format:

> $A_{1,1}$ $\ldots$ $A_{1,W}$
> 
> $\vdots$
> 
> $A_{H,1}$ $\ldots$ $A_{H,W}$

If there are multiple solutions, you may print any of them.

```input1
2 3
1 2 3
4 5 6
```

```output1
9
0 -3 -1
3 0 2
```

Here is a sequence of operations that produces the grid in the Sample Output.

- Do the operation with $(i, j, x) = (1, 1, -1)$.
- Do the operation with $(i, j, x) = (1, 2, -4)$.

Here, we have $\sum_{i=1}^H \sum_{j=1}^W |A_{i,j}| = 0 + 3 + 1 + 3 + 0 + 2 = 9$.

```input2
2 2
1000000000 -1000000000
-1000000000 1000000000
```

```output2
4000000000
2000000000 0
0 2000000000
```

It is fine if $|A_{i,j}| &gt; 10^9$ after your operations.

```input3
3 4
0 2 0 -2
-3 -1 2 0
-3 -3 2 2
```

```output3
0
0 0 0 0
0 0 0 0
0 0 0 0
```