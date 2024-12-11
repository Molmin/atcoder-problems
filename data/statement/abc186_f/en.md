Score : $600$ points

## Problem Statement

We have a grid with $H$ horizontal rows and $W$ vertical columns. Let Square $(i,j)$ be the square at the $i$-th row and $j$-th column.

There are $M$ obstacles on this grid. The $i$-th obstacle is at Square $(X_i, Y_i)$.

We have a rook, the chess piece, on Square $(1, 1)$. In one move, it can move to the right or downward through any number of squares without obstacles.

Find the number of squares the rook can reach in two moves or less.

## Constraints

- $1\leq H,W \leq 2\times 10^5$
- $0\leq M \leq 2\times 10^5$
- $1\leq X_i \leq H$
- $1\leq Y_i \leq W$
- $(X_i,Y_i) \neq (1,1)$
- $(X_i,Y_i)$ are distinct.
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $H$ $W$ $M$
> 
> $X_1$ $Y_1$
> 
> $\vdots$
> 
> $X_M$ $Y_M$

## Output

Print the number of squares the rook can reach in two moves or less.

```input1
4 3 2
2 2
3 3
```

```output1
10
```

Every square without an obstacle can be reached in two moves or less.

```input2
5 4 4
3 2
3 4
4 2
5 2
```

```output2
14
```

Every square without an obstacle except $(4,4)$ and $(5,4)$ can be reached in two moves or less.

```input3
200000 200000 0
```

```output3
40000000000
```