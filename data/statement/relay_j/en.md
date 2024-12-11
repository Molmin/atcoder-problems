Score : $100$ points

## Problem Statement

We have an $N \times N$ checkerboard.

From the square at the upper left corner, a square that is $i$ squares to the right and $j$ squares below is denoted as $(i, j)$. Particularly, the square at the upper left corner is denoted as $(0, 0)$.

Each square $(i, j)$ such that $i+j$ is even, is colored black, and the other squares are colored white.

We will satisfy the following condition by painting some of the white squares:

- Any black square can be reached from square $(0, 0)$ by repeatedly moving to a black square that shares a side with the current square.

Achieve the objective by painting at most $170000$ squares black.

## Constraints

- $1 \leq N \leq 1,000$

## Input

The input is given from Standard Input in the following format:

> $N$

## Output

Print the squares to paint in the following format:

> $K$
> 
> $x_1$ $y_1$
> 
> $x_2$ $y_2$
> 
> :
> 
> $x_K$ $y_K$

This means that a total of $K$ squares are painted black, the $i$-th of which is $(x_i, y_i)$.

## Judging

The output is considered correct only if all of the following conditions are satisfied:

- $0 \leq K \leq 170000$
- $0 \leq x_i, y_i \leq N-1$
- For each $i$, $x_i + y_i$ is odd.
- If $i \neq j$, then $(x_i, y_i) \neq (x_j, y_j)$.
- The condition in the statement is satisfied by painting all specified squares.

```input1
2
```

```output1
1
1 0
```

```input2
4
```

```output2
3
0 1
2 1
2 3
```