Score : $2000$ points

## Problem Statement

Initially, $N$ points $(x_1, y_1), \ldots, (x_N, y_N)$ are plotted on a plane.
Snuke is allowed to perform the following operation an arbitrary finite number of times:

- Choose two points that are already plotted, and plot the middle point of the two chosen points (if the middle point hasn't been plotted yet). The coordinates of the middle point don't necessarily have to be integers.

After he finish performing operations, his score is the number of plotted points with integer coordinates (including the initial points).
Compute the maximum score he can get.

## Constraints

- $3 \leq N \leq 100$
- $0 \leq x_i, y_i \leq 10^9$
- No three points are on the same line.
- All values in the input are integers.

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

Print the answer.

```input1
4
0 0
0 2
2 0
2 2
```

```output1
9
```

One possible way to achieve the maximum score is as follows:

- Initially, four points $(0, 0), (0, 2), (2, 0), (2, 2)$ are plotted.
- Plot $(0, 1)$: the middle point of $(0, 0)$ and $(0, 2)$.
- Plot $(0, 0.5)$: the middle point of $(0, 0)$ and $(0, 1)$.
- Plot $(1, 0)$: the middle point of $(0, 0)$ and $(2, 0)$.
- Plot $(1, 1)$: the middle point of $(0, 0)$ and $(2, 2)$.
- Plot $(1, 2)$: the middle point of $(0, 2)$ and $(2, 2)$.
- Plot $(2, 1)$: the middle point of $(2, 0)$ and $(2, 2)$.
- Now we have $10$ points: $(0, 0), (0, 0.5), (0, 1), (0, 2), (1, 0), (1, 1), (1, 2), (2, 0), (2, 1), (2, 2)$. $9$ of them have integer coordinates, so the score is $9$.

```input2
4
0 0
0 3
3 0
3 3
```

```output2
4
```

We can prove that, besides the initial points, he can't plot any points with integer coordinates.