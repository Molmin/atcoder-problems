Score : $500$ points

## Problem Statement

We have a grid with $H$ rows and $W$ columns.

Snuke is going to write in each square an integer between $0$ and $K-1$ (inclusive).
Here, the conditions below must be satisfied.

- For each $1 \leq i \leq H$, the sum modulo $K$ of the integers written in the $i$-th row is $A_i$.
- For each $1 \leq i \leq W$, the sum modulo $K$ of the integers written in the $i$-th column is $B_i$.

Determine whether it is possible to write integers in the squares to satisfy the conditions. If it is possible, also find the maximum possible sum of the integers written.

## Constraints

- $1 \leq H,W \leq 200000$
- $2 \leq K \leq 200000$
- $0 \leq A_i \leq K-1$
- $0 \leq B_i \leq K-1$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $H$ $W$ $K$
> 
> $A_1$ $A_2$ $\cdots$ $A_H$
> 
> $B_1$ $B_2$ $\cdots$ $B_W$

## Output

If it is impossible to write integers in the squares to satisfy the conditions, print `-1`.
If it is possible, print the maximum possible sum of the integers written.

```input1
2 4 3
0 2
1 2 2 0
```

```output1
11
```

The following should be written.

```output1
-----------------
| 2 | 0 | 2 | 2 |
-----------------
| 2 | 2 | 0 | 1 |
-----------------
```

We can see that the conditions are satisfied.
For example, the sum of the integers in the $1$-st row is $6$, which modulo $K(=3)$ is $A_1(=0)$.

The sum of the integers written here is $11$, which is the maximum possible value.

```input2
3 3 4
0 1 2
1 2 3
```

```output2
-1
```