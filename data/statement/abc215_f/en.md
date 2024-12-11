Score : $500$ points

## Problem Statement

Given are $N$ distinct points in a two-dimensional plane. Point $i$ $(1 \leq i \leq N)$ has the coordinates $(x_i,y_i)$.

Let us define the distance between two points $i$ and $j$ be $\mathrm{min} (|x_i-x_j|,|y_i-y_j|)$: the smaller of the difference in the $x$-coordinates and the difference in the $y$-coordinates.

Find the maximum distance between two different points.

## Constraints

- $2 \leq N \leq 200000$
- $0 \leq x_i,y_i \leq 10^9$
- $(x_i,y_i)$ $\neq$ $(x_j,y_j)$ $(i \neq j)$
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

Print the maximum distance between two different points.

```input1
3
0 3
3 1
4 10
```

```output1
4
```

The distances between Points $1$ and $2$, between Points $1$ and $3$, and between Points $2$ and $3$ are $2$, $4$, and $1$, respectively, so your output should be $4$.

```input2
4
0 1
0 4
0 10
0 6
```

```output2
0
```

```input3
8
897 729
802 969
765 184
992 887
1 104
521 641
220 909
380 378
```

```output3
801
```