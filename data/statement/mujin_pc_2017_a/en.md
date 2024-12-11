Score : $900$ points

## Problem Statement

You are developing frog-shaped robots, and decided to race them against each other.

First, you placed $N$ robots onto a number line.
These robots are numbered $1$ through $N$.
The current coordinate of robot $i$ is $x_i$.
Here, all $x_i$ are integers, and $0 &lt; x_1 &lt; x_2 &lt; ... &lt; x_N$.

You will repeatedly perform the following operation:

- Select a robot on the number line. Let the coordinate of the robot be $x$. Select the destination coordinate, either $x-1$ or $x-2$, that is not occupied by another robot. The robot now jumps to the selected coordinate.

When the coordinate of a robot becomes $0$ or less, the robot is considered finished and will be removed from the number line immediately.
You will repeat the operation until all the robots finish the race.

Depending on your choice in the operation, the $N$ robots can finish the race in different orders.
In how many different orders can the $N$ robots finish the race?
Find the answer modulo $10^9+7$.

## Constraints

- $2 \leq N \leq 10^5$
- $x_i$ is an integer.
- $0 &lt; x_1 &lt; x_2 &lt; ... &lt; x_N \leq 10^9$

## Partial Score

- In a test set worth $500$ points, $N \leq 8$.

## Input

The input is given from Standard Input in the following format:

> $N$
> 
> $x_1$ $x_2$ $...$ $x_N$

## Output

Print the number of the different orders in which the $N$ robots can finish the race, modulo $10^9+7$.

```input1
3
1 2 3
```

```output1
4
```

There are four different orders in which the three robots can finish the race:

- $($Robot $1 \to$ Robot $2 \to$ Robot $3)$
- $($Robot $1 \to$ Robot $3 \to$ Robot $2)$
- $($Robot $2 \to$ Robot $1 \to$ Robot $3)$
- $($Robot $2 \to$ Robot $3 \to$ Robot $1)$

```input2
3
2 3 4
```

```output2
6
```

There are six different orders in which the three robots can finish the race:

- $($Robot $1 \to$ Robot $2 \to$ Robot $3)$
- $($Robot $1 \to$ Robot $3 \to$ Robot $2)$
- $($Robot $2 \to$ Robot $1 \to$ Robot $3)$
- $($Robot $2 \to$ Robot $3 \to$ Robot $1)$
- $($Robot $3 \to$ Robot $1 \to$ Robot $2)$
- $($Robot $3 \to$ Robot $2 \to$ Robot $1)$

For example, the order $($Robot $3 \to$ Robot $2 \to$ Robot $1)$ can be achieved as shown in the figure below:

![a55aed48a00614569d4844f39807e2fb.png](https://atcoder.jp/img/mujin/a55aed48a00614569d4844f39807e2fb.png)

```input3
8
1 2 3 5 7 11 13 17
```

```output3
10080
```

```input4
13
4 6 8 9 10 12 14 15 16 18 20 21 22
```

```output4
311014372
```

Remember to print the answer modulo $10^9+7$.
This case is not included in the test set for the partial score.