Score : $500$ points

## Problem Statement

We have a grid with $H$ rows and $W$ columns of squares. Let $(i, j)$ denote the square at the $i$-th row from the top and $j$-th column from the left.
On each square, we can write a letter: `R`, `D`, or `X`. Initially, every square is empty.

Snuke chose $K$ of the squares and wrote characters on them.
The $i$-th square he chose was $(h_i,w_i)$, and he wrote the letter $c_i$ on it.

There are $3^{HW-K}$ ways to write a letter on each of the remaining squares. Find the sum of the answers to the problem below for all those $3^{HW-K}$ ways, modulo $998244353$.

We have a robot that can walk on the grid.
When it is at $(i,j)$, it can move to $(i+1, j)$ or $(i, j+1)$.                 <br>
However, if `R` is written on $(i, j)$, it can only move to $(i, j+1)$; if `D` is written on $(i, j)$, it can only move to $(i+1, j)$. If `X` is written on $(i, j)$, both choices are possible.

When the robot is put at $(1, 1)$, how many paths can the robot take to reach $(H, W)$ without going out of the grid? We assume the robot halts when reaching $(H, W)$.

Here, we distinguish two paths when the sets of squares traversed by the robot are different.

## Constraints

- $2 \leq H,W \leq 5000$
- $0 \leq K \leq \min(HW,2 \times 10^5)$
- $1 \leq h_i \leq H$
- $1 \leq w_i \leq W$
- $(h_i,w_i) \neq (h_j,w_j)$ for $i \neq j$.
- $c_i$ is `R`, `D`, or `X`.

## Input

Input is given from Standard Input in the following format:

> $H$ $W$ $K$
> 
> $h_1$ $w_1$ $c_1$
> 
> $\vdots$
> 
> $h_K$ $w_K$ $c_K$

## Output

Print the answer.

```input1
2 2 3
1 1 X
2 1 R
2 2 R
```

```output1
5
```

- Only $(1,2)$ is empty.-   - If we write `R` on it, there is one way that the robot can take to reach $(H, W)$.
-   - If we write `D` on it, there are two ways that the robot can take to reach $(H, W)$.
-   - If we write `X` on it, there are two ways that the robot can take to reach $(H, W)$.
- We should print the sum of these counts: $5$.

```input2
3 3 5
2 3 D
1 3 D
2 1 D
1 2 X
3 1 R
```

```output2
150
```

```input3
5000 5000 10
585 1323 R
2633 3788 X
1222 4989 D
1456 4841 X
2115 3191 R
2120 4450 X
4325 2864 X
222 3205 D
2134 2388 X
2262 3565 R
```

```output3
139923295
```

- Be sure to compute the sum modulo $998244353$.