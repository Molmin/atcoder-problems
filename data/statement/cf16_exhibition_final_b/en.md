Score : $500$ points

## Problem Statement

   #nck {
      width: 30px;
      height: auto;
   }

Snuke received a triangle as a birthday present.
The coordinates of the three vertices were $(x_1, y_1)$, $(x_2, y_2)$, and $(x_3, y_3)$.

He wants to draw two circles with the same radius inside the triangle such that the two circles do not overlap (but they may touch).
Compute the maximum possible radius of the circles.

## Constraints

- $0 \leq x_i, y_i \leq 1000$
- The coordinates are integers.
- The three points are not on the same line.

## Input

The input is given from Standard Input in the following format:

> $x_1$ $y_1$
> 
> $x_2$ $y_2$
> 
> $x_3$ $y_3$

## Output

Print the maximum possible radius of the circles.
The absolute error or the relative error must be at most $10^{-9}$.

```input1
0 0
1 1
2 0
```

```output1
0.292893218813
```

```input2
3 1
1 5
4 9
```

```output2
0.889055514217
```