Score : $300$ points

## Problem Statement

There are $N$ towns in a coordinate plane. Town $i$ is located at coordinates ($x_i$, $y_i$). The distance between Town $i$ and Town $j$ is $\sqrt{\left(x_i-x_j\right)^2+\left(y_i-y_j\right)^2}$.

There are $N!$ possible paths to visit all of these towns once. Let the length of a path be the distance covered when we start at the first town in the path, visit the second, third, $\dots$, towns, and arrive at the last town (assume that we travel in a straight line from a town to another). Compute the average length of these $N!$ paths.

## Constraints

- $2 \leq N \leq 8$
- $-1000 \leq x_i \leq 1000$
- $-1000 \leq y_i \leq 1000$
- $\left(x_i, y_i\right) \neq \left(x_j, y_j\right)$ (if $i \neq j$)
- (Added 21:12 JST) All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $x_1$ $y_1$
> 
> $:$
> 
> $x_N$ $y_N$

## Output

Print the average length of the paths.
Your output will be judges as correct when the absolute difference from the judge's output is at most $10^{-6}$.

```input1
3
0 0
1 0
0 1
```

```output1
2.2761423749
```

There are six paths to visit the towns: $1$ → $2$ → $3$, $1$ → $3$ → $2$, $2$ → $1$ → $3$, $2$ → $3$ → $1$, $3$ → $1$ → $2$, and $3$ → $2$ → $1$.

The length of the path $1$ → $2$ → $3$ is $\sqrt{\left(0-1\right)^2+\left(0-0\right)^2} + \sqrt{\left(1-0\right)^2+\left(0-1\right)^2} = 1+\sqrt{2}$.

By calculating the lengths of the other paths in this way, we see that the average length of all routes is:

$\frac{\left(1+\sqrt{2}\right)+\left(1+\sqrt{2}\right)+\left(2\right)+\left(1+\sqrt{2}\right)+\left(2\right)+\left(1+\sqrt{2}\right)}{6} = 2.276142...$

```input2
2
-879 981
-866 890
```

```output2
91.9238815543
```

There are two paths to visit the towns: $1$ → $2$ and $2$ → $1$. These paths have the same length.

```input3
8
-406 10
512 859
494 362
-955 -475
128 553
-986 -885
763 77
449 310
```

```output3
7641.9817824387
```