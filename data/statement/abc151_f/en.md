Score : $600$ points

## Problem Statement

Given are $N$ points $(x_i, y_i)$ in a two-dimensional plane.

Find the minimum radius of a circle such that all the points are inside or on it.

## Constraints

- $2 \leq N \leq 50$
- $0 \leq x_i \leq 1000$
- $0 \leq y_i \leq 1000$
- The given $N$ points are all different.
- The values in input are all integers.

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

Print the minimum radius of a circle such that all the $N$ points are inside or on it.

Your output will be considered correct if the absolute or relative error from our answer is at most $10^{-6}$.

```input1
2
0 0
1 0
```

```output1
0.500000000000000000
```

Both points are contained in the circle centered at $(0.5,0)$ with a radius of $0.5$.

```input2
3
0 0
0 1
1 0
```

```output2
0.707106781186497524
```

```input3
10
10 9
5 9
2 0
0 0
2 7
3 3
2 5
10 0
3 7
1 9
```

```output3
6.726812023536805158
```

If the absolute or relative error from our answer is at most $10^{-6}$, the output will be considered correct.