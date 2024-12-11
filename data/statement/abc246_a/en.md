Score : $100$ points

## Problem Statement

There is a rectangle in the $xy$-plane. Each edge of this rectangle is parallel to the $x$- or $y$-axis, and its area is not zero.

Given the coordinates of three of the four vertices of this rectangle, $(x_1, y_1)$, $(x_2, y_2)$, and $(x_3, y_3)$, find the coordinates of the other vertex.

## Constraints

- $-100 \leq x_i, y_i \leq 100$
- There uniquely exists a rectangle with all of $(x_1, y_1)$, $(x_2, y_2)$, $(x_3, y_3)$ as vertices, edges parallel to the $x$- or $y$-axis, and a non-zero area.
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $x_1$ $y_1$
> 
> $x_2$ $y_2$
> 
> $x_3$ $y_3$

## Output

Print the sought coordinates $(x, y)$ separated by a space in the following format:

> $x$ $y$

```input1
-1 -1
-1 2
3 2
```

```output1
3 -1
```

The other vertex of the rectangle with vertices $(-1, -1), (-1, 2), (3, 2)$ is $(3, -1)$.

```input2
-60 -40
-60 -80
-20 -80
```

```output2
-20 -40
```