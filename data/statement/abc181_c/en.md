Score : $300$ points

## Problem Statement

We have $N$ points on a two-dimensional infinite coordinate plane.

The $i$-th point is at $(x_i,y_i)$.

Is there a triple of distinct points lying on the same line among the $N$ points?

## Constraints

- All values in input are integers.
- $3 \leq N \leq 10^2$
- $|x_i|, |y_i| \leq 10^3$
- If $i \neq j$, $(x_i, y_i) \neq (x_j, y_j)$.

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $x_1$ $y_1$
> 
> $\vdots$
> 
> $x_N$ $y_N$

## Output

If there is a triple of distinct points lying on the same line, print `Yes`; otherwise, print `No`.

```input1
4
0 1
0 2
0 3
1 1
```

```output1
Yes
```

The three points $(0, 1), (0, 2), (0, 3)$ lie on the line $x = 0$.

```input2
14
5 5
0 1
2 5
8 0
2 1
0 0
3 6
8 6
5 9
7 9
3 4
9 2
9 8
7 2
```

```output2
No
```

```input3
9
8 2
2 3
1 3
3 7
1 0
8 8
5 6
9 7
0 1
```

```output3
Yes
```