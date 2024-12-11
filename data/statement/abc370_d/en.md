Score : $400$ points

## Problem Statement

There is a grid with $H$ rows and $W$ columns. Let $(i, j)$ denote the cell at the $i$-th row from the top and $j$-th column from the left.<br>
Initially, there is one wall in each cell.<br>
After processing $Q$ queries explained below in the order they are given, find the number of remaining walls.

In the $q$-th query, you are given two integers $R_q$ and $C_q$.<br>
You place a bomb at $(R_q, C_q)$ to destroy walls. As a result, the following process occurs.

- If there is a wall at $(R_q, C_q)$, destroy that wall and end the process.
- If there is no wall at $(R_q, C_q)$, destroy the first walls that appear when looking up, down, left, and right from $(R_q, C_q)$. More precisely, the following four processes occur simultaneously:-   - If there exists an $i \lt R_q$ such that a wall exists at $(i, C_q)$ and no wall exists at $(k, C_q)$ for all $i \lt k \lt R_q$, destroy the wall at $(i, C_q)$.
-   - If there exists an $i \gt R_q$ such that a wall exists at $(i, C_q)$ and no wall exists at $(k, C_q)$ for all $R_q \lt k \lt i$, destroy the wall at $(i, C_q)$.
-   - If there exists a $j \lt C_q$ such that a wall exists at $(R_q, j)$ and no wall exists at $(R_q, k)$ for all $j \lt k \lt C_q$, destroy the wall at $(R_q, j)$.
-   - If there exists a $j \gt C_q$ such that a wall exists at $(R_q, j)$ and no wall exists at $(R_q, k)$ for all $C_q \lt k \lt j$, destroy the wall at $(R_q, j)$.

## Constraints

- $1 \leq H, W$
- $H \times W \leq 4 \times 10^5$
- $1 \leq Q \leq 2 \times 10^5$
- $1 \leq R_q \leq H$
- $1 \leq C_q \leq W$
- All input values are integers.

## Input

The input is given from Standard Input in the following format:

> $H$ $W$ $Q$
> 
> $R_1$ $C_1$
> 
> $R_2$ $C_2$
> 
> $\vdots$
> 
> $R_Q$ $C_Q$

## Output

Print the number of remaining walls after processing all queries.

```input1
2 4 3
1 2
1 2
1 3
```

```output1
2
```

The process of handling the queries can be explained as follows:

- In the 1st query, $(R_1, C_1) = (1, 2)$. There is a wall at $(1, 2)$, so the wall at $(1, 2)$ is destroyed.
- In the 2nd query, $(R_2, C_2) = (1, 2)$. There is no wall at $(1, 2)$, so the walls at $(2,2),(1,1),(1,3)$, which are the first walls that appear when looking up, down, left, and right from $(1, 2)$, are destroyed.
- In the 3rd query, $(R_3, C_3) = (1, 3)$. There is no wall at $(1, 3)$, so the walls at $(2,3),(1,4)$, which are the first walls that appear when looking up, down, left, and right from $(1, 3)$, are destroyed.

After processing all queries, there are two remaining walls, at $(2, 1)$ and $(2, 4)$.

```input2
5 5 5
3 3
3 3
3 2
2 2
1 2
```

```output2
10
```

```input3
4 3 10
2 2
4 1
1 1
4 2
2 1
3 1
1 3
1 2
4 3
4 2
```

```output3
2
```