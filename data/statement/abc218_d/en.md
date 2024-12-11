Score : $400$ points

## Problem Statement

We have $N$ distinct points on a two-dimensional plane, numbered $1,2,\ldots,N$. Point $i$ $(1 \leq i \leq N)$ has the coordinates $(x_i,y_i)$.

How many rectangles are there whose vertices are among the given points and whose edges are parallel to the $x$- or $y$-axis?

## Constraints

- $4 \leq N \leq 2000$
- $0 \leq x_i, y_i \leq 10^9$
- $(x_i,y_i) \neq (x_j,y_j)$ $(i \neq j)$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $x_1$ $y_1$
> 
> $x_2$ $y_2$
> 
> $\vdots$
> 
> $x_N$ $y_N$

## Output

Print the answer.

```input1
6
0 0
0 1
1 0
1 1
2 0
2 1
```

```output1
3
```

There are three such rectangles:

the rectangle whose vertices are Points $1$, $2$, $3$, $4$,

the rectangle whose vertices are Points $1$, $2$, $5$, $6$,

and the rectangle whose vertices are Points $3$, $4$, $5$, $6$.

```input2
4
0 1
1 2
2 3
3 4
```

```output2
0
```

```input3
7
0 1
1 0
2 0
2 1
2 2
3 0
3 2
```

```output3
1
```