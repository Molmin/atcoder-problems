Score : $200$ points

## Problem Statement

You are given an $N \times N$ grid $S$ and an $M \times M$ grid $T$. The cell at the $i$-th row from the top and the $j$-th column from the left is denoted by $(i,j)$.

The colors of the cells in $S$ and $T$ are represented by $N^2$ characters $S_{i,j}$ ($1\leq i,j\leq N$) and $M^2$ characters $T_{i,j}$ ($1\leq i,j\leq M$), respectively. In grid $S$, cell $(i,j)$ is white if $S_{i,j}$ is `.`, and black if $S_{i,j}$ is `#`. The same applies for grid $T$.

Find $T$ within $S$. More precisely, output integers $a$ and $b$ ($1 \leq a,b \leq N-M+1$) that satisfy the following condition:

- $S_{a+i-1,b+j-1} = T_{i,j}$ for every $i,j$ ($1\leq i,j \leq M$).

## Constraints

- $1 \leq M \leq N \leq 50$
- $N$ and $M$ are integers.
- Each of $S_{i,j}$ and $T_{i,j}$ is `.` or `#`.
- There is exactly one pair $(a,b)$ satisfying the condition.

## Input

The input is given from Standard Input in the following format:

> $N$ $M$
> 
> $S_{1,1}S_{1,2}\dots S_{1,N}$
> 
> $S_{2,1}S_{2,2}\dots S_{2,N}$
> 
> $\vdots$
> 
> $S_{N,1}S_{N,2}\dots S_{N,N}$
> 
> $T_{1,1}T_{1,2}\dots T_{1,M}$
> 
> $T_{2,1}T_{2,2}\dots T_{2,M}$
> 
> $\vdots$
> 
> $T_{M,1}T_{M,2}\dots T_{M,M}$

## Output

Print $a$ and $b$ in this order, separated by a space on one line.

```input1
3 2
#.#
..#
##.
.#
#.
```

```output1
2 2
```

The $2 \times 2$ subgrid of $S$ from the 2nd to the 3rd row and from the 2nd to the 3rd column matches $T$.

```input2
2 1
#.
##
.
```

```output2
1 2
```