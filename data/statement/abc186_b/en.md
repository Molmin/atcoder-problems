Score : $200$ points

## Problem Statement

We have a grid with $H$ horizontal rows and $W$ vertical columns. The square at the $i$-th row from the top and $j$-th column from the left has $A_{i, j}$ blocks stacked on it.

At least how many blocks must be removed to make all squares have the same number of blocks?

## Constraints

- $1 \leq H,W \leq 100$
- $0\leq A_{i,j} \leq 100$

## Input

Input is given from Standard Input in the following format:

> $H$ $W$
> 
> $A_{1,1}$ $A_{1,2}$ $\ldots$ $A_{1,W}$
> 
> $\vdots$
> 
> $A_{H,1}$ $A_{H,2}$ $\ldots$ $A_{H,W}$

## Output

Print the minimum number of blocks that must be removed.

```input1
2 3
2 2 3
3 2 2
```

```output1
2
```

Removing $1$ block from the top-right square and $1$ from the bottom-left square makes all squares have $2$ blocks.

```input2
3 3
99 99 99
99 0 99
99 99 99
```

```output2
792
```

```input3
3 2
4 4
4 4
4 4
```

```output3
0
```