Score : $500$ points

## Problem Statement

We have a grid with $H$ horizontal rows and $W$ vertical columns. Let $(i, j)$ denote the square at the $i$-th row from the top and $j$-th column from the left. $(i, j)$ contains an integer $A_{i,j}$.

Takahashi will depart $(1, 1)$ and repeatedly move one square right or down until reaching $(H, W)$. It is not allowed to exit the grid.

The cost of this travel is defined as:

the sum of the $K$ greatest integers among the integers written on the $H+W-1$ squares traversed.

Find the minimum possible cost.

## Constraints

- $1 \leq H,W \leq 30$
- $1 \leq K &lt; H+W$
- $1 \leq A_{i,j} \leq 10^9$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $H$ $W$ $K$
> 
> $A_{1,1}$ $A_{1,2}$ $\ldots$ $A_{1,W}$
> 
> $A_{2,1}$ $A_{2,2}$ $\ldots$ $A_{2,W}$
> 
> $\vdots$
> 
> $A_{H,1}$ $A_{H,2}$ $\ldots$ $A_{H,W}$

## Output

Print the answer.

```input1
1 3 2
3 4 5
```

```output1
9
```

There is only one way to travel, where the traversed squares contain the integers $5$, $4$, $3$ from largest to smallest, so we print $9(=5+4)$.

```input2
2 2 1
3 2
4 3
```

```output2
3
```

The minimum cost is achieved by traversing $(1,1)$, $(1,2)$, $(2,2)$ in this order.

```input3
3 5 3
4 7 8 6 4
6 7 3 10 2
3 8 1 10 4
```

```output3
21
```