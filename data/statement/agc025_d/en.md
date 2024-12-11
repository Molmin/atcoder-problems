Score : $800$ points

## Problem Statement

Takahashi is doing a research on sets of points in a plane.
Takahashi thinks a set $S$ of points in a coordinate plane is a *good set* when $S$ satisfies both of the following conditions:

- The distance between any two points in $S$ is not $\sqrt{D_1}$.
- The distance between any two points in $S$ is not $\sqrt{D_2}$.

Here, $D_1$ and $D_2$ are positive integer constants that Takahashi specified.

Let $X$ be a set of points $(i,j)$ on a coordinate plane where $i$ and $j$ are integers and satisfy $0 \leq i,j &lt; 2N$.

Takahashi has proved that, for any choice of $D_1$ and $D_2$, there exists a way to choose $N^2$ points from $X$ so that the chosen points form a good set.
However, he does not know the specific way to choose such points to form a good set.
Find a subset of $X$ whose size is $N^2$ that forms a good set.

## Constraints

- $1 \leq N \leq 300$
- $1 \leq D_1 \leq 2 \times 10^5$
- $1 \leq D_2 \leq 2 \times 10^5$
- All values in the input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$ $D_1$ $D_2$

## Output

Print $N^2$ distinct points that satisfy the condition in the following format:

> $x_1$ $y_1$
> 
> $x_2$ $y_2$
> 
> :
> 
> $x_{N^2}$ $y_{N^2}$

Here, $(x_i,y_i)$ represents the $i$-th chosen point.
$0 \leq x_i,y_i &lt; 2N$ must hold, and they must be integers.
The chosen points may be printed in any order.
In case there are multiple possible solutions, you can output any.

```input1
2 1 2
```

```output1
0 0
0 2
2 0
2 2
```

Among these points, the distance between $2$ points is either $2$ or $2\sqrt{2}$, thus it satisfies the condition.

```input2
3 1 5
```

```output2
0 0
0 2
0 4
1 1
1 3
1 5
2 0
2 2
2 4
```