Score : $800$ points

## Problem Statement

There are $N$ points on a number line, $i$-th of which is placed on coordinate $X_i$.
These points are numbered in the increasing order of coordinates.
In other words, for all $i$ ($1 \leq i \leq N-1$), $X_i &lt; X_{i+1}$ holds.
In addition to that, an integer $K$ is given.

Process $Q$ queries.

In the $i$-th query, two integers $L_i$ and $R_i$ are given.
Here, a set $s$ of points is said to be a *good* set if it satisfies all of the following conditions.
Note that the definition of good sets varies over queries.

- Each point in $s$ is one of $X_{L_i},X_{L_i+1},\ldots,X_{R_i}$.
- For any two distinct points in $s$, the distance between them is greater than or equal to $K$.
- The size of $s$ is maximum among all sets that satisfy the aforementioned conditions.

For each query, find the size of the union of all good sets.

## Constraints

- $1 \leq N \leq 2 \times 10^5$
- $1 \leq K \leq 10^9$
- $0 \leq X_1 &lt; X_2 &lt; \cdots &lt; X_N \leq 10^9$
- $1 \leq Q \leq 2 \times 10^5$
- $1 \leq L_i \leq R_i \leq N$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$ $K$
> 
> $X_1$ $X_2$ $\cdots$ $X_N$
> 
> $Q$
> 
> $L_1$ $R_1$
> 
> $L_2$ $R_2$
> 
> $\vdots$
> 
> $L_Q$ $R_Q$

## Output

For each query, print the size of the union of all good sets in a line.

```input1
5 3
1 2 4 7 8
2
1 5
1 2
```

```output1
4
2
```

In the first query, you can have at most $3$ points in a good set.
There exist two good sets: $\{1,4,7\}$ and $\{1,4,8\}$.
Therefore, the size of the union of all good sets is $|\{1,4,7,8\}|=4$.

In the second query, you can have at most $1$ point in a good set.
There exist two good sets: $\{1\}$ and $\{2\}$.
Therefore, the size of the union of all good sets is $|\{1,2\}|=2$.

```input2
15 220492538
4452279 12864090 23146757 31318558 133073771 141315707 263239555 350278176 401243954 418305779 450172439 560311491 625900495 626194585 891960194
5
6 14
1 8
1 13
7 12
4 12
```

```output2
4
6
11
2
3
```