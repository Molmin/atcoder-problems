Score : $400$ points

## Problem Statement

We have an $N \times N$ grid. Let $(i,j)$ denote the square at the $i$-th row from the top and $j$-th column from the left in this grid.<br>
Find one way to write an integer on every square to satisfy the conditions below.

- Each integer between $1$ and $N^2$ is written exactly once.
- For every pair of integers $i,j\, (1 \leq i,j \leq N)$, the square $(i,j)$ satisfies the following.-   - Among the squares horizontally, vertically, or diagonally adjacent to $(i,j)$ (there are at most eight of them), let $a$ and $b$ be the number of squares with integers larger than and smaller than that of $(i,j)$, respectively. Then, $a \neq b$ holds.

Under the Constraints of this problem, it can be proved that such a way to write integers always exists.

## Constraints

- $2 \leq N \leq 500$
- $N$ is an integer.

## Input

Input is given from Standard Input in the following format:

> $N$

## Output

Print a way to write integers to satisfy the conditions, in the following format:

> $x_{1,1}$ $\ldots$ $x_{1,N}$
> 
> $\vdots$
> 
> $x_{N,1}$ $\ldots$ $x_{N,N}$

Here, $x_{i,j}$ is the integer to write on the square $(i,j)$.<br>
If multiple solutions exist, any of them will be accepted.

```input1
2
```

```output1
1 2
3 4
```

This output contains each integer between $1$ and $N^2\, (=4)$ exactly once, so the first condition is satisfied.<br>
Additionally, among the squares horizontally, vertically, or diagonally adjacent to the square $(1,1)$, three squares $(1,2)$, $(2,1)$, and $(2,2)$ have integers larger than that of $(1,1)$, and none has an integer smaller than that.<br>
Thus, for $(1,1)$, we have $a=3$ and $b=0$, so $a\neq b$ holds.<br>
Similarly, it can be verified that $a\neq b$ also holds for the other squares, so the second condition is satisfied.<br>
Therefore, this output is valid.

```input2
3
```

```output2
1 2 3
5 4 6
7 8 9
```