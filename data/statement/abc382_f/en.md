Score: $525$ points

## Problem Statement

There is a grid with $H$ rows and $W$ columns.
Let $(i,j)$ denote the cell at the $i$-th row from the top and the $j$-th column from the left.

There are $N$ horizontal bars numbered from $1$ to $N$ placed on the grid.
Bar $i$ consists of $L_i$ blocks of size $1 \times 1$ connected horizontally, and its leftmost block is initially at cell $(R_i, C_i)$.
That is, initially, bar $i$ occupies the cells $(R_i, C_i), (R_i, C_i + 1), \dots, (R_i, C_i + L_i - 1)$.
It is guaranteed that there is no cell occupied by two different bars.

The current time is $t = 0$.
At every time $t = 0.5 + n$ for some non-negative integer $n$, the following occurs in order of $i = 1, 2, \dots, N$:

- If bar $i$ is not on the bottom row (the $H$-th row), and none of the cells directly below the cells occupied by bar $i$ is occupied by any bar, then bar $i$ moves down by one cell. That is, if at that time bar $i$ occupies the cells $(r,C_i),(r,C_i+1),\dots,(r,C_i+L_i-1)\ (r &lt; H)$, and the cell $(r + 1, C_i + j)$ is not occupied by any bar for all $j$ ($0 \leq j \leq L_i - 1$), then bar $i$ now occupies $(r + 1, C_i), (r + 1, C_i + 1), \dots, (r + 1, C_i + L_i - 1)$.
- Otherwise, nothing happens.

Let $(R'_i, C_i), (R'_i, C_i + 1), \dots, (R'_i, C_i + L_i - 1)$ be the cells occupied by bar $i$ at time $t = 10^{100}$. Find $R'_1, R'_2, \dots, R'_N$.

## Constraints

- $1 \leq H, W \leq 2 \times 10^5$
- $1 \leq N \leq 2 \times 10^5$
- $1 \leq R_i \leq H$
- $1 \leq C_i \leq W$
- $1 \leq L_i \leq W - C_i + 1$
- In the initial state, there is no cell occupied by two different bars.
- All input values are integers.

## Input

The input is given from Standard Input in the following format:

> $H$ $W$ $N$
> 
> $R_1$ $C_1$ $L_1$
> 
> $R_2$ $C_2$ $L_2$
> 
> $\vdots$
> 
> $R_N$ $C_N$ $L_N$

## Output

Print $N$ lines.
The $i$-th line ($1 \leq i \leq N$) should contain $R'_i$.

```input1
4 4 4
1 2 3
3 2 2
2 1 2
2 4 1
```

```output1
2
4
3
4
```

The following three diagrams represent the grid at times $t = 0$, $1$, and $2$ from left to right.
Colored rectangles represent the bars, and the number inside each rectangle indicates its bar number.

![](https://img.atcoder.jp/abc382/57581b182e43915bce2b78747acfa2a6.png)

The changes in the grid state are explained as follows:

- At $t = 0.5$:-   - $i = 1$: The cells directly below bar $1$ are $(2,2),(2,3),(2,4)$. Among these, $(2,2)$ is occupied by bar $3$ and $(2,4)$ is occupied by bar $4$, so nothing happens.
-   - $i = 2$: The cells directly below bar $2$ are $(4,2),(4,3)$, which are not occupied by any other bar, so bar $2$ moves down by one cell.
-   - $i = 3$: The cells directly below bar $3$ are $(3,1),(3,2)$, which are not occupied by any other bar, so bar $3$ moves down by one cell.
-   - $i = 4$: The cell directly below bar $4$ is $(3,4)$, which is not occupied by any other bar, so bar $4$ moves down by one cell.
- At $t = 1.5$:-   - $i = 1$: The cells directly below bar $1$ are $(2,2),(2,3),(2,4)$, which are not occupied by any other bar, so bar $1$ moves down by one cell.
-   - $i = 2$: Bar $2$ is on the bottom row, so nothing happens.
-   - $i = 3$: The cells directly below bar $3$ are $(4,1),(4,2)$. Among these, $(4,2)$ is occupied by bar $2$, so nothing happens.
-   - $i = 4$: The cell directly below bar $4$ is $(4,4)$, which is not occupied by any other bar, so bar $4$ moves down by one cell.

At times $t = 2.5, 3.5, \dots$, there is no bar such that the cells directly below it are all unoccupied, so nothing happens. Thus, the grid at time $t = 10^{100}$ is the same as at $t = 2$ (the rightmost diagram above).

Therefore, $R'_1 = 2$, $R'_2 = 4$, $R'_3 = 3$, $R'_4 = 4$.

```input2
382 382 3
3 3 3
8 8 8
2 2 2
```

```output2
382
382
381
```

```input3
5 10 8
2 2 1
4 3 1
4 8 2
1 2 2
2 5 3
5 4 3
4 5 2
1 5 2
```

```output3
5
5
5
4
3
5
4
2
```