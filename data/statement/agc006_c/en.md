Score : $800$ points

## Problem Statement

There are $N$ rabbits on a number line.
The rabbits are conveniently numbered $1$ through $N$.
The coordinate of the initial position of rabbit $i$ is $x_i$.

The rabbits will now take exercise on the number line, by performing *sets* described below.
A set consists of $M$ *jumps*. The $j$-th jump of a set is performed by rabbit $a_j$ ($2 \leq a_j \leq N-1$).
For this jump, either rabbit $a_j-1$ or rabbit $a_j+1$ is chosen with equal probability (let the chosen rabbit be rabbit $x$), then rabbit $a_j$ will jump to the symmetric point of its current position with respect to rabbit $x$.

The rabbits will perform $K$ sets in succession.
For each rabbit, find the expected value of the coordinate of its eventual position after $K$ sets are performed.

## Constraints

- $3 \leq N \leq 10^5$
- $x_i$ is an integer.
- $|x_i| \leq 10^9$
- $1 \leq M \leq 10^5$
- $2 \leq a_j \leq N-1$
- $1 \leq K \leq 10^{18}$

## Input

The input is given from Standard Input in the following format:

> $N$
> 
> $x_1$ $x_2$ $...$ $x_N$
> 
> $M$ $K$
> 
> $a_1$ $a_2$ $...$ $a_M$

## Output

Print $N$ lines.
The $i$-th line should contain the expected value of the coordinate of the eventual position of rabbit $i$ after $K$ sets are performed.
The output is considered correct if the absolute or relative error is at most $10^{-9}$.

```input1
3
-1 0 2
1 1
2
```

```output1
-1.0
1.0
2.0
```

Rabbit $2$ will perform the jump.
If rabbit $1$ is chosen, the coordinate of the destination will be $-2$.
If rabbit $3$ is chosen, the coordinate of the destination will be $4$.
Thus, the expected value of the coordinate of the eventual position of rabbit $2$ is $0.5 \times (-2)+0.5 \times 4=1.0$.

```input2
3
1 -1 1
2 2
2 2
```

```output2
1.0
-1.0
1.0
```

$x_i$ may not be distinct.

```input3
5
0 1 3 6 10
3 10
2 3 4
```

```output3
0.0
3.0
7.0
8.0
10.0
```