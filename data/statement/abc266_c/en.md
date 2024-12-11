Score : $300$ points

## Problem Statement

Consider a two-dimensional coordinate plane, where the $x$-axis is oriented to the right, and the $y$-axis is oriented upward.

In this plane, there is a quadrilateral without self-intersection.<br>
The coordinates of the four vertices are $(A_x,A_y)$, $(B_x,B_y)$, $(C_x,C_y)$, and $(D_x,D_y)$, in counter-clockwise order.

Determine whether this quadrilateral is convex.

Here, a quadrilateral is convex if and only if all four interior angles are less than $180$ degrees.

## Constraints

- $-100 \leq A_x,A_y,B_x,B_y,C_x,C_y,D_x,D_y \leq 100$
- All values in input are integers.
- The given four points are the four vertices of a quadrilateral in counter-clockwise order.
- The quadrilateral formed by the given four points has no self-intersection and is non-degenerate. That is,-   - no two vertices are at the same coordinates;
-   - no three vertices are colinear; and
-   - no two edges that are not adjacent have a common point.

## Input

Input is given from Standard Input in the following format:

> $A_x$ $A_y$
> 
> $B_x$ $B_y$
> 
> $C_x$ $C_y$
> 
> $D_x$ $D_y$

## Output

If the given quadrilateral is convex, print `Yes`; otherwise, print `No`.

```input1
0 0
1 0
1 1
0 1
```

```output1
Yes
```

The given quadrilateral is a square, whose four interior angles are all $90$ degrees. Thus, this quadrilateral is convex.

![Figure](https://img.atcoder.jp/abc266/cda66d9b9f4291781d1ce47f59f29ab0.png)

```input2
0 0
1 1
-1 0
1 -1
```

```output2
No
```

The angle $A$ is $270$ degrees. Thus, this quadrilateral is not convex.

![Figure](https://img.atcoder.jp/abc266/2927f9f67e2cb7c35aeab05269b6fcc2.png)