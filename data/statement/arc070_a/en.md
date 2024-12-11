Score : $200$ points

## Problem Statement

There is a kangaroo at coordinate $0$ on an infinite number line that runs from left to right, at time $0$.
During the period between time $i-1$ and time $i$, the kangaroo can either stay at his position, or perform a jump of length exactly $i$ to the left or to the right.
That is, if his coordinate at time $i-1$ is $x$, he can be at coordinate $x-i$, $x$ or $x+i$ at time $i$.
The kangaroo's nest is at coordinate $X$, and he wants to travel to coordinate $X$ as fast as possible.
Find the earliest possible time to reach coordinate $X$.

## Constraints

- $X$ is an integer.
- $1 \leq X \leq 10^9$

## Input

The input is given from Standard Input in the following format:

> $X$

## Output

Print the earliest possible time for the kangaroo to reach coordinate $X$.

```input1
6
```

```output1
3
```

The kangaroo can reach his nest at time $3$ by jumping to the right three times, which is the earliest possible time.

```input2
2
```

```output2
2
```

He can reach his nest at time $2$ by staying at his position during the first second, and jumping to the right at the next second.

```input3
11
```

```output3
5
```