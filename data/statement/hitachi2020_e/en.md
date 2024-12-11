Score : $900$ points

## Problem Statement

We have a grid with $(2^N - 1)$ rows and $(2^M-1)$ columns.
You are asked to write $0$ or $1$ in each of these squares.
Let $a_{i,j}$ be the number written in the square at the $i$-th row from the top and the $j$-th column from the left.

For a quadruple of integers $(i_1, i_2, j_1, j_2)$ such that $1\leq i_1 \leq i_2\leq 2^N-1, 1\leq j_1 \leq j_2\leq 2^M-1$, let
$S(i_1, i_2, j_1, j_2) = \displaystyle \sum_{r=i_1}^{i_2}\sum_{c=j_1}^{j_2}a_{r,c}$.
Then, let the *oddness* of the grid be the number of quadruples $(i_1, i_2, j_1, j_2)$ such that $S(i_1, i_2, j_1, j_2)$ is odd.

Find a way to fill in the grid that maximizes its oddness.

## Constraints

- $N$ and $M$ are integers between $1$ and $10$ (inclusive).

## Input

Input is given from Standard Input in the following format:

> $N$ $M$

## Output

Print numbers to write in the grid so that its oddness is maximized, in the following format:

> $a_{1,1}a_{1,2}\cdots a_{1,2^M-1}$
> 
> $a_{2,1}a_{2,2}\cdots a_{2,2^M-1}$
> 
> $\vdots$
> 
> $a_{2^N-1,1}a_{2^N-1,2}\cdots a_{2^N-1,2^M-1}$

If there are multiple solutions, you can print any of them.

```input1
1 2
```

```output1
111
```

For this grid, $S(1, 1, 1, 1)$, $S(1, 1, 2, 2)$, $S(1, 1, 3, 3)$, and $S(1, 1, 1, 3)$ are odd, so it has the oddness of $4$.

We cannot make the oddness $5$ or higher, so this is one of the ways that maximize the oddness.