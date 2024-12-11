Score : $500$ points

## Problem Statement

Jumbo Takahashi will play golf on an infinite two-dimensional grid.

The ball is initially at the origin $(0, 0)$, and the goal is a grid point (a point with integer coordinates) $(X, Y)$. In one stroke, Jumbo Takahashi can perform the following operation:

- Choose a grid point whose Manhattan distance from the current position of the ball is $K$, and send the ball to that point.

The game is finished when the ball reaches the goal, and the score will be the number of strokes so far. Jumbo Takahashi wants to finish the game with the lowest score possible.

Determine if the game can be finished. If the answer is yes, find one way to bring the ball to the goal with the lowest score possible.

What is Manhattan distance?

The Manhattan distance between two points $(x_1, y_1)$ and $(x_2, y_2)$ is defined as $|x_1-x_2|+|y_1-y_2|$.

## Constraints

- All values in input are integers.
- $1 \leq K \leq 10^9$
- $-10^5 \leq X, Y \leq 10^5$
- $(X, Y) \neq (0, 0)$

## Input

Input is given from Standard Input in the following format:

> $K$
> 
> $X$ $Y$

## Output

If the game cannot be finished, print `-1`.

If the game can be finished, print one way to bring the ball to the destination with the lowest score possible, in the following format:

> $s$
> 
> $x_1$ $y_1$
> 
> $x_2$ $y_2$
> 
> $.$
> 
> $.$
> 
> $.$
> 
> $x_s$ $y_s$

Here, $s$ is the lowest score possible, and $(x_i, y_i)$ is the position of the ball just after the $i$-th stroke.

```input1
11
-1 2
```

```output1
3
7 4
2 10
-1 2
```

- The Manhattan distance between $(0, 0)$ and $(7, 4)$ is $|0-7|+|0-4|=11$.
- The Manhattan distance between $(7, 4)$ and $(2, 10)$ is $|7-2|+|4-10|=11$.
- The Manhattan distance between $(2, 10)$ and $(-1, 2)$ is $|2-(-1)|+|10-2|=11$.

Thus, this play is valid.

Also, there is no way to finish the game with less than three strokes.

```input2
4600
52 149
```

```output2
-1
```

```input3
4
9 9
```

```output3
5
1 3
4 2
4 6
6 8
9 9
```