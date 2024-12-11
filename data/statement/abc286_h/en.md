Score : $600$ points

## Problem Statement

On a two-dimensional plane, there is a convex polygon $C$ with $N$ vertices, and points $S=(s_x, s_y)$ and $T=(t_x,t_y)$.  The vertices of $C$ are $(x_1,y_1),(x_2,y_2),\ldots$, and $(x_N,y_N)$ in counterclockwise order.  It is guaranteed that $S$ and $T$ are outside the polygon.

Find the shortest distance that needs to be traveled to get from point $S$ to point $T$ without entering the interior of $C$ except for its circumference.

## Constraints

- $3\leq N \leq 10^5$
- $|x_i|,|y_i|,|s_x|,|s_y|,|t_x|,|t_y|\leq 10^9$
- $(x_1,y_1),(x_2,y_2),\ldots$, and $(x_N,y_N)$ form a convex polygon in counterclockwise order.
- No three points of $C$ are colinear.
- $S$ and $T$ are outside $C$ and not on the circumference of $C$.
- All values in the input are integers.

## Input

The input is given from Standard Input in the following format:

> $N$ 
> 
> $x_1$ $y_1$
> 
> $x_2$ $y_2$
> 
> $\vdots$
> 
> $x_N$ $y_N$
> 
> $s_x$ $s_y$
> 
> $t_x$ $t_y$

## Output

Print the answer.

Your output is considered correct if the absolute or relative error from the true value is at most $10^{-6}$.

```input1
4
1 1
3 1
3 3
1 3
0 2
5 2
```

```output1
5.65028153987288474496
```

One way to achieve the shortest distance is shown in the following figure.

![image](https://img.atcoder.jp/abc286/4affd3de612079930dd393002bbae832.png)

If you travel as $(0,2) \to (1,3) \to(3,3)\to(5,2)$, the length of the path from point $S$ to point $T$ is $5.650281...$. We can prove that it is the minimum.  Note that you may enter the circumference of $C$.

Note that your output is considered correct if the absolute or relative error is at most $10^{-6}$.  For example, output like `5.650287` is also considered correct.

```input2
3
0 0
2 0
1 10
3 7
10 3
```

```output2
8.06225774829854965279
```