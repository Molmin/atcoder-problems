Score : $600$ points

## Problem Statement

There is a set $S$ of points on a two-dimensional plane.  $S$ is initially empty.

For each $i = 1, 2, \dots, Q$ in this order, process the following query.

- You are given integers $X_i, Y_i, A_i$, and $B_i$.  Add point $(X_i, Y_i)$ to $S$, and then find $\displaystyle \max_{(x,y) \in S}\left\{A_ix + B_iy\right\}$.

## Constraints

- All values in input are integers.
- $1 \leq Q \leq 2 \times 10^5$
- $|X_i|, |Y_i|, |A_i|, |B_i| \leq 10^9$
- If $i \neq j$, then $(X_i, Y_i) \neq (X_j, Y_j)$.

## Input

Input is given from Standard Input in the following format:

> $Q$
> 
> $X_1$ $Y_1$ $A_1$ $B_1$
> 
> $X_2$ $Y_2$ $A_2$ $B_2$
> 
> $\vdots$
> 
> $X_Q$ $Y_Q$ $A_Q$ $B_Q$

## Output

Print $Q$ lines.  The $i$-th line should contain the answer for the $i$-th query.

```input1
4
1 0 -1 -1
0 1 2 0
-1 0 1 1
0 -1 1 -2
```

```output1
-1
2
1
2
```

- When $i = 1$: add point $(1, 0)$ to $S$, then it will become $S = \{(1, 0)\}$.  For $(x, y) = (1, 0)$, we have $-x - y = -1$, which is the maximum.
- When $i = 2$: add point $(0, 1)$ to $S$, then it will become $S = \{(0, 1), (1, 0)\}$.  For $(x, y) = (1, 0)$, we have $2x = 2$, which is the maximum.
- When $i = 3$: add point $(-1, 0)$ to $S$, then it will become $S = \{(-1, 0), (0, 1), (1, 0)\}$.  For $(x, y) = (1, 0)$ or $(x, y) = (0, 1)$, we have $x + y = 1$, which is the maximum.
- When $i = 4$: add point $(0, -1)$ to $S$, then it will become $S = \{(-1, 0), (0, -1), (0, 1), (1, 0)\}$.  For $(x, y) = (0, -1)$, we have $x - 2y = 2$, which is the maximum.

```input2
9
-1 4 -8 -2
9 -9 -7 7
4 1 6 7
-4 -1 -4 -5
-9 3 -2 -6
-1 0 -8 5
-8 -5 0 0
8 3 0 -4
2 -5 2 5
```

```output2
0
35
31
21
36
87
0
36
31
```