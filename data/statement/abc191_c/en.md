Score : $300$ points

## Problem Statement

We have a grid with $H$ rows and $W$ columns. Let $(i, j)$ be the square at the $i$-th row from the top and $j$-th column from the left.<br>
Each square is painted black or white. If $S_{i, j}$ is `#`, $(i, j)$ is painted black; if $S_{i, j}$ is `.`, $(i, j)$ is painted white.<br>
It is guaranteed that the outermost squares are white. That is, the squares that can be represented as $(1, j)$, $(H, j)$, $(i, 1)$, or $(i, W)$ are white.

Consider the part of the grid that is painted black as a polygon. How many sides does it have (at least)? 

Here, it is guaranteed that the part painted black forms a polygon without self-intersection, that is, the following holds:

- at least one square is painted black;
- we can travel between any two squares painted black by repeatedly moving up, down, left, or right while going through only black squares;
- we can travel between any two squares painted white by repeatedly moving up, down, left, or right while going through only white squares. (Note that the outermost squares in the grid are all painted white.)

## Constraints

- $3 \le H \le 10$
- $3 \le W \le 10$
- $S_{i, j}$ is `#` or `.`.
- $S_{1, j}$ and $S_{H, j}$ are `.`.
- $S_{i, 1}$ and $S_{i, W}$ are `.`.
- The part painted black forms a polygon without self-intersection.

## Input

Input is given from Standard Input in the following format:

> $H$ $W$
> 
> $S_{1, 1} S_{1, 2} S_{1, 3} \dots S_{1, W}$
> 
> $S_{2, 1} S_{2, 2} S_{2, 3} \dots S_{2, W}$
> 
> $S_{3, 1} S_{3, 2} S_{3, 3} \dots S_{3, W}$
> 
> $\hspace{40pt} \vdots$
> 
> $S_{H, 1} S_{H, 2} S_{H, 3} \dots S_{H, W}$

## Output

Print the minimum number $n$ such that the part painted black can be seen as an $n$-gon.

```input1
5 5
.....
.###.
.###.
.###.
.....
```

```output1
4
```

If we use a coordinate system where the top-left, bottom-left, top-right, and bottom-right corners of the grid are $(0, 0)$, $(H, 0)$, $(0, W)$, and $(H, W)$, the given figure is a quadrilateral whose vertices are $(1, 1)$, $(4, 1)$, $(4, 4)$, and $(1, 4)$.