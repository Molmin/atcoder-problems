Score: $100$ points

## Problem Statement

There are $N \times M$ stones on a number line, with $M$ colors labeled $1$ through $M$, and $N$ stones of each color. Here, $N$ is an **even number**, and $M$ is an **odd number**. Among the stones of color $i$, the $j$-th stone from the left $(1 \leq i \leq M,\ 1 \leq j \leq N)$ is initially placed at the coordinate $(j-1) \times M + i$. Stones of the same color are indistinguishable.

You can perform the following operation up to $(N+1) \times M$ times:

Pick two adjacent stones and move them, in the same order, to any unoccupied adjacent positions.<br>
Specifically:

1. Choose an integer $x$ such that $-10^9 \leq x \leq 10^9-1$ and there are stones at both coordinates $x$ and $x+1$. Let the stone at $x$ be $A$ and the stone at $x+1$ be $B$. Remove $A$ and $B$ from the number line.
2. Choose an integer $y$ such that $-10^9 \leq y \leq 10^9-1$ and there are no stones at both coordinates $y$ and $y+1$. Place $A$ at $y$ and $B$ at $y+1$.

Your goal is to rearrange the stones to satisfy the following two conditions:

- All stones are part of a single contiguous block. That is, there exists an integer $n$ such that for all integers $x$ satisfying $n \leq x \leq n + NM - 1$, there is exactly one stone at coordinate $x$.
- Additionally, the stones are sorted by color in ascending order. Specifically, among the stones of color $i$, the $j$-th stone from the left $(1 \leq i \leq M,\ 1 \leq j \leq N)$ is at coordinate $n + (i-1) \times N + (j-1)$.

Under the constraints of this problem, it can be shown that the goal is always achievable. Output one valid sequence of operations to achieve the goal. You do not need to minimize the number of operations.

## Constraints

- $2 \leq N \leq 1000$
- $3 \leq M \leq 999$
- $N$ is even
- $M$ is odd

## Input

The input is given in the following format:

> $N$ $M$

## Output

Output the solution in the following format:

> $K$
> 
> $x_1$ $y_1$
> 
> $x_2$ $y_2$
> 
> $\vdots$
> 
> $x_K$ $y_K$

Here, $K$ is the number of operations performed, and $x_k, y_k\ (1 \leq k \leq K)$ represent the values of $x$ and $y$ chosen in the $k$-th operation.<br>
The output must satisfy the following constraints:

- $0 \leq K \leq (N+1) \times M$
- $-10^9 \leq x_k, y_k \leq 10^9-1\ (1 \leq k \leq K)$

If there are multiple valid solutions, output any one of them.

```input1
4 3
```

```output1
13
3 13
10 3
12 10
6 12
4 6
1 4
13 14
14 14
14 999999999
999999999 -1000000000
9 13
5 9
-1000000000 5
```

Initially, the stones are placed as follows (`.` indicates an unoccupied position). The coordinate of the leftmost `.` is $0$, and the coordinate of the rightmost `.` is $15$.

```output1
.123123123123...
```

After the first three operations, the stone arrangement changes as follows:

```output1
.123123123123...
↓
.12..2312312331.
↓
.121223123..331.
↓
.12122312333..1.
```

Finally, the stones are rearranged as follows:

```output1
...111122223333.
```

This arrangement satisfies the conditions of being a single contiguous block and sorted by color. Additionally, the number of operations is at most $(N + 1) \times M = 15$, so this output is valid.