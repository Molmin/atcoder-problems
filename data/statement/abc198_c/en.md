Score : $300$ points

## Problem Statement

Takahashi is standing at the origin of a two-dimensional plane.

By taking one step, he can move to a point whose Euclidian distance from his current position is exactly $R$ (the coordinates of the destination of a move do not have to be integers). There is no other way to move.

Find the minimum number of steps Takahashi has to take before reaching $(X, Y)$.

We remind you that the Euclidian distance between points $(x_1,y_1)$ and $(x_2,y_2)$ is $\sqrt{(x_1-x_2)^2+(y_1-y_2)^2}$.

## Constraints

- $1 \leq R \leq 10^5$
- $0 \leq X,Y \leq 10^5$
- $(X,Y) \neq (0,0)$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $R$ $X$ $Y$

## Output

Print the minimum number of steps Takahashi has to take before reaching $(X, Y)$.

```input1
5 15 0
```

```output1
3
```

He can reach there in three steps: $(0,0) \to (5,0) \to (10,0) \to (15,0)$.
This is the minimum number needed: he cannot reach there in two or fewer steps.

![Figure 1](https://img.atcoder.jp/ghi/d34bbf4b43d8de5baf54bf589618c64e.png)

```input2
5 11 0
```

```output2
3
```

One optimal route is $(0,0) \to (5,0) \to (8,4) \to (11,0)$.

![Figure 2](https://img.atcoder.jp/ghi/0932ca629f834af5124563f198bb3f9e.png)

```input3
3 4 4
```

```output3
2
```

One optimal route is $(0,0) \to (2-\frac{\sqrt{2}}{2}, 2+\frac{\sqrt{2}}{2}) \to (4,4)$.

![Figure 3](https://img.atcoder.jp/ghi/50d67c401f9aceed8baa130918144597.png)