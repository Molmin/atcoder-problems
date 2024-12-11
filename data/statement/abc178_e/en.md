Score : $500$ points

## Problem Statement

There are $N$ points on the 2D plane, $i$-th of which is located on $(x_i, y_i)$.
There can be multiple points that share the same coordinate.
What is the maximum possible Manhattan distance between two distinct points?

Here, the *Manhattan distance* between two points $(x_i, y_i)$ and $(x_j, y_j)$ is defined by $|x_i-x_j| + |y_i-y_j|$.

## Constraints

- $2 \leq N \leq 2 \times 10^5$
- $1 \leq x_i,y_i \leq 10^9$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $x_1$ $y_1$
> 
> $x_2$ $y_2$
> 
> $:$
> 
> $x_N$ $y_N$

## Output

Print the answer.

```input1
3
1 1
2 4
3 2
```

```output1
4
```

The Manhattan distance between the first point and the second point is $|1-2|+|1-4|=4$, which is maximum possible.

```input2
2
1 1
1 1
```

```output2
0
```