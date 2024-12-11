Score : $500$ points

## Problem Statement

Let $N$ be a positive integer.
We have a $(2N+1)\times (2N+1)$ grid where rows are numbered $0$ through $2N$ and columns are also numbered $0$ through $2N$. Let $(i,j)$ denote the square at Row $i$ and Column $j$.

We have one white pawn, which is initially at $(0, N)$.
Also, we have $M$ black pawns, the $i$-th of which is at $(X_i, Y_i)$.

When the white pawn is at $(i, j)$, you can do one of the following operations to move it:

- If $0\leq i\leq 2N-1$, $0 \leq j\leq 2N$ hold and $(i+1,j)$ **does not** contain a black pawn, move the white pawn to $(i+1, j)$.
- If $0\leq i\leq 2N-1$, $0 \leq j\leq 2N-1$ hold and $(i+1,j+1)$ **does** contain a black pawn, move the white pawn to $(i+1,j+1)$.
- If $0\leq i\leq 2N-1$, $1 \leq j\leq 2N$ hold and $(i+1,j-1)$ **does** contain a black pawn, move the white pawn to $(i+1,j-1)$.

You cannot move the black pawns.

Find the number of integers $Y$ such that it is possible to have the white pawn at $(2N, Y)$ by repeating these operations.

## Constraints

- $1 \leq N \leq 10^9$
- $0 \leq M \leq 2\times 10^5$
- $1 \leq X_i \leq 2N$
- $0 \leq Y_i \leq 2N$
- $(X_i, Y_i) \neq (X_j, Y_j)$ $(i \neq j)$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$ $M$
> 
> $X_1$ $Y_1$
> 
> $:$
> 
> $X_M$ $Y_M$

## Output

Print the answer.

```input1
2 4
1 1
1 2
2 0
4 2
```

```output1
3
```

We can move the white pawn to $(4,0)$, $(4,1)$, and $(4,2)$, as follows:

- $(0,2)\to (1,1)\to (2,1)\to (3,1)\to (4,2)$
- $(0,2)\to (1,1)\to (2,1)\to (3,1)\to (4,1)$
- $(0,2)\to (1,1)\to (2,0)\to (3,0)\to (4,0)$

On the other hand, we cannot move it to $(4,3)$ or $(4,4)$.
Thus, we should print $3$.

```input2
1 1
1 1
```

```output2
0
```

We cannot move the white pawn from $(0,1)$.