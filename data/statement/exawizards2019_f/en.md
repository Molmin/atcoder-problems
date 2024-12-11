Score : $1200$ points

## Problem Statement

In Takaha-shi, the capital of Republic of AtCoder, there are $N$ roads extending east and west, and $M$ roads extending north and south. There are no other roads.
The $i$-th east-west road from the north and the $j$-th north-south road from the west cross at the intersection $(i, j)$.
Two east-west roads do not cross, nor do two north-south roads.
The distance between two adjacent roads in the same direction is $1$.

Each road is one-way; one can only walk in one direction. The permitted direction for each road is described by a string $S$ of length $N$ and a string $T$ of length $M$, as follows:

- If the $i$-th character in $S$ is `W`, one can only walk westward along the $i$-th east-west road from the north;
- If the $i$-th character in $S$ is `E`, one can only walk eastward along the $i$-th east-west road from the north;
- If the $i$-th character in $T$ is `N`, one can only walk northward along the $i$-th north-south road from the west;
- If the $i$-th character in $T$ is `S`, one can only walk southward along the $i$-th south-west road from the west.

Process the following $Q$ queries:

- In the $i$-th query, $a_i, b_i, c_i$ and $d_i$ are given. What is the minimum distance to travel to reach the intersection $(c_i, d_i)$ from the intersection $(a_i, b_i)$ by walking along the roads?

## Constraints

- $2 \leq N \leq 100000$
- $2 \leq M \leq 100000$
- $2 \leq Q \leq 200000$
- $|S| = N$
- $S$ consists of `W` and `E`.
- $|T| = M$
- $T$ consists of `N` and `S`.
- $1 \leq a_i \leq N$
- $1 \leq b_i \leq M$
- $1 \leq c_i \leq N$
- $1 \leq d_i \leq M$
- $(a_i, b_i) \neq (c_i, d_i)$

## Input

Input is given from Standard Input in the following format:

> $N$ $M$ $Q$
> 
> $S$
> 
> $T$
> 
> $a_1$ $b_1$ $c_1$ $d_1$
> 
> $a_2$ $b_2$ $c_2$ $d_2$
> 
> $:$
> 
> $a_Q$ $b_Q$ $c_Q$ $d_Q$

## Output

In the $i$-th line, print the response to the $i$-th query. If the intersection $(c_i, d_i)$ cannot be reached from the intersection $(a_i, b_i)$ by walking along the roads, print `-1` instead.

```input1
4 5 4
EEWW
NSNNS
4 1 1 4
1 3 1 2
4 2 3 2
3 3 3 5
```

```output1
6
11
5
4
```

The permitted direction for each road is shown in the following figure (north upward):

![](https://img.atcoder.jp/exawizards2019/bfb8c54cc4098353946320d8c263807e.png)

For each of the four queries, a route that achieves the minimum travel distance is as follows:

![](https://img.atcoder.jp/exawizards2019/d1918596004a23a20aa138e591e0ee99.png)

```input2
3 3 2
EEE
SSS
1 1 3 3
3 3 1 1
```

```output2
4
-1
```

The travel may be impossible.

```input3
9 7 10
EEEEEWEWW
NSSSNSN
4 6 9 2
3 7 6 7
7 5 3 5
1 1 8 1
4 3 5 4
7 4 6 4
2 5 8 6
6 6 2 7
2 4 7 5
7 2 9 7
```

```output3
9
-1
4
9
2
3
7
7
6
-1
```