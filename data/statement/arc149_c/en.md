Score : $500$ points

## Problem Statement

You are given a positive integer $N$.

Fill each square of a grid with $N$ rows and $N$ columns by writing a positive integer not greater than $N^2$ so that all of the following conditions are satisfied.

- Two positive integers written in horizontally or vertically adjacent squares never sum to a prime number.
- Every positive integer not greater than $N^2$ is written in one of the squares.

Under the Constraints of this problem, it can be proved that such a way to fill the grid always exists.

## Constraints

- $3\leq N\leq 1000$

## Input

The input is given from Standard Input in the following format:

> $N$

## Output

Print a way to fill the grid under the conditions in the following format, where $A_{ij}$ is the positive integer at the $i$-th row and $j$-th column:

> $A_{11}$ $\ldots$ $A_{1N}$
> 
> $\vdots$
> 
> $A_{N1}$ $\ldots$ $A_{NN}$

If there are multiple ways to fill the grid under the conditions, any of them will be accepted.

```input1
4
```

```output1
15 11 16 12
13 3 6 9
14 7 8 1
4 2 10 5
```

In this grid, every positive integer from $1$ through $16$ is written once. Additionally, among the sums of two positive integers written in horizontally or vertically adjacent squares are $15+11=26$, $11+16=27$, and $15+13=28$, none of which is a prime number.