Score: $100$ points

## Problem Statement

On the $xy$-plane, there are $N$ points labeled $1, 2, \dots, N$. The coordinates of point $i$ ($1 \le i \le N$) are $(X_i, Y_i)$.

There is a robot at the origin of this plane. Your task is to control the robot to visit all the points $1, 2, \dots, N$ **in this order**.

The robot has a string variable $S$, which is initially an empty string.<br>
You can move the robot using the following four types of operations:

- Operation $1$: Increase the robot's $x$ coordinate by $1$ and append `X` to the end of $S$. This operation costs $1$.
- Operation $2$: Increase the robot's $y$ coordinate by $1$ and append `Y` to the end of $S$. This operation costs $1$.
- Operation $3$: Decrease the robot's $x$ coordinate by $1$ and remove the last character of $S$. This operation can only be performed if the last character of $S$ is `X`. This operation costs $0$.
- Operation $4$: Decrease the robot's $y$ coordinate by $1$ and remove the last character of $S$. This operation can only be performed if the last character of $S$ is `Y`. This operation costs $0$.

Find the minimum cost required for the robot to visit all points $1, 2, \dots, N$ in this order.

## Constraints

- All input values are integers.
- $1 \le N \le 500$
- $0 \le X_i, Y_i \le 10^9$

## Input

The input is given from Standard Input in the following format:

> $N$
> 
> $X_1$ $Y_1$
> 
> $X_2$ $Y_2$
> 
> $\vdots$
> 
> $X_N$ $Y_N$

## Output

Output the minimum cost required for the robot to visit all points in order.

```input1
2
3 3
1 2
```

```output1
6
```

By performing Operation $1$ once, Operation $2$ three times, and Operation $1$ twice, you can reach point $1$.<br>
Then, by performing Operation $3$ twice and Operation $4$ once, you can reach point $2$.

The total cost of this sequence of operations is the sum of the number of times Operations $1$ and $2$ are performed, which is $6$.

```input2
3
2 2
3 3
1 3
```

```output2
7
```