Score : $700$ points

## Problem Statement

There are $N$ people, Person $1$ through Person $N$, standing on a number line. Person $i$ is now at coordinate $A_i$ on the number line.<br>
Here, $A_1 &lt; A_2 &lt; A_3 &lt; \dots &lt; A_N$ and all $A_i$ are even numbers.

We will now hold a party for $k$ seconds.<br>
During the party, each person can freely move on the number line at a speed of at most $1$ per second. (It is also allowed to move in the negative direction within the speed limit.)<br>
The people request that the following condition be satisfied for every integer $i$ such that $1 \le i \lt N$:

- there is at least one moment during the party (including the moment it ends) when Person $i$ and Person $i + 1$ are at the same coordinate.

Find the minimum $k$ for which there is a strategy that the people can take to satisfy all the conditions.<br>
We can prove that the answer is an integer under the Constraints of this problem.

## Constraints

- $2 \le N \le 2 \times 10^5$
- $0 \le A_i \le 10^9$
- $A_1 &lt; A_2 &lt; A_3 &lt; \dots &lt; A_N$
- $A_i$ is an even number.

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $A_1$ $A_2$ $A_3$ $\dots$ $A_N$

## Output

Print the answer as an integer.

```input1
3
0 6 10
```

```output1
5
```

During the party lasting $5$ seconds, each person should move as follows:

- Person $1$: always moves in the positive direction at a speed of $1$.
- Person $2$: moves in the positive direction at a speed of $1$ during the first $2$ seconds, then in the negative direction at a speed of $1$ during the remaining $3$ seconds.
- Person $3$: always moves in the negative direction at a speed of $1$.

If they move in this way, Person $2$ and Person $3$ will be at the same coordinate exactly $2$ seconds after the beginning, and Person $1$ and Person $2$ will be at the same coordinate at the end of the party.<br>
Thus, they can satisfy all the conditions for $k = 5$. For smaller $k$, there is no strategy to satisfy all of them.

```input2
5
0 2 4 6 8
```

```output2
3
```

During the party lasting $3$ seconds, each person should, for example, move as follows:

- Person $1$: always moves in the positive direction at a speed of $1$.
- Person $2$: moves in the positive direction at a speed of $1$ during the first $2$ seconds, then in the negative direction at a speed of $1$ during the remaining $1$ second.
- Person $3$: does not move at all.
- Person $4$: moves in the negative direction at a speed of $1$ during the first $2$ seconds, then in the positive direction at a speed of $1$ during the remaining $1$ second.
- Person $5$: always moves in the negative direction at a speed of $1$.

```input3
10
0 2 4 6 8 92 94 96 98 100
```

```output3
44
```