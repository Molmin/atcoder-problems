Score : $500$ points

## Problem Statement

You are given $N$ points in the coordinate plane.
For each $1\leq i\leq N$, the $i$-th point is at the coordinates $(X_i, Y_i)$.

Find the number of lines in the plane that pass $K$ or more of the $N$ points.<br>
If there are infinitely many such lines, print `Infinity`.

## Constraints

- $1 \leq K \leq N \leq 300$
- $\lvert X_i \rvert, \lvert Y_i \rvert \leq 10^9$
- $X_i\neq X_j$ or $Y_i\neq Y_j$, if $i\neq j$.
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$ $K$
> 
> $X_1$ $Y_1$
> 
> $X_2$ $Y_2$
> 
> $\vdots$
> 
> $X_N$ $Y_N$

## Output

Print the number of lines in the plane that pass $K$ or more of the $N$ points, or `Infinity` if there are infinitely many such lines.

```input1
5 2
0 0
1 0
0 1
-1 0
0 -1
```

```output1
6
```

The six lines $x=0$, $y=0$, $y=x\pm 1$, and $y=-x\pm 1$ satisfy the requirement.<br>
For example, $x=0$ passes the first, third, and fifth points.

Thus, $6$ should be printed.

```input2
1 1
0 0
```

```output2
Infinity
```

Infinitely many lines pass the origin.

Thus, `Infinity` should be printed.