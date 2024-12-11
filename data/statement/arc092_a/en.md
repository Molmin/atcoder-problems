Score : $400$ points

## Problem Statement

On a two-dimensional plane, there are $N$ red points and $N$ blue points.
The coordinates of the $i$-th red point are $(a_i, b_i)$, and the coordinates of the $i$-th blue point are $(c_i, d_i)$.

A red point and a blue point can form a *friendly pair* when, the $x$-coordinate of the red point is smaller than that of the blue point, and the $y$-coordinate of the red point is also smaller than that of the blue point.

At most how many friendly pairs can you form? Note that a point cannot belong to multiple pairs.

## Constraints

- All input values are integers.
- $1 \leq N \leq 100$
- $0 \leq a_i, b_i, c_i, d_i &lt; 2N$
- $a_1, a_2, ..., a_N, c_1, c_2, ..., c_N$ are all different.
- $b_1, b_2, ..., b_N, d_1, d_2, ..., d_N$ are all different.

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $a_1$ $b_1$
> 
> $a_2$ $b_2$
> 
> $:$
> 
> $a_N$ $b_N$
> 
> $c_1$ $d_1$
> 
> $c_2$ $d_2$
> 
> $:$
> 
> $c_N$ $d_N$

## Output

Print the maximum number of friendly pairs.

```input1
3
2 0
3 1
1 3
4 2
0 4
5 5
```

```output1
2
```

For example, you can pair $(2, 0)$ and $(4, 2)$, then $(3, 1)$ and $(5, 5)$.

```input2
3
0 0
1 1
5 2
2 3
3 4
4 5
```

```output2
2
```

For example, you can pair $(0, 0)$ and $(2, 3)$, then $(1, 1)$ and $(3, 4)$.

```input3
2
2 2
3 3
0 0
1 1
```

```output3
0
```

It is possible that no pair can be formed.

```input4
5
0 0
7 3
2 2
4 8
1 6
8 5
6 9
5 4
9 1
3 7
```

```output4
5
```

```input5
5
0 0
1 1
5 5
6 6
7 7
2 2
3 3
4 4
8 8
9 9
```

```output5
4
```