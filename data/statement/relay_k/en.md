Score : $100$ points

## Problem Statement

There is a tree with $N$ vertices, numbered $1$ through $N$.

The $i$-th of the $N-1$ edges connects the vertices $p_i$ and $q_i$.

Among the sequences of distinct vertices $v_1, v_2, ..., v_M$ that satisfy the following condition, find the maximum value of $M$.

- For every $1 \leq i &lt; M$, the path connecting the vertices $v_i$ and $v_{i+1}$ do not contain any vertex in $v$, except for $v_i$ and $v_{i+1}$.

## Constraints

- $2 \leq N \leq 10^5$
- $1 \leq p_i, q_i \leq N$
- The given graph is a tree.

## Input

The input is given from Standard Input in the following format:

> $N$
> 
> $p_1$ $q_1$
> 
> $p_2$ $q_2$
> 
> :
> 
> $p_{N-1}$ $q_{N-1}$

## Output

Print the maximum value of $M$, the number of elements, among the sequences of vertices that satisfy the condition.

```input1
4
1 2
2 3
2 4
```

```output1
3
```

```input2
10
7 9
1 2
6 4
8 1
3 7
6 5
2 10
9 6
2 6
```

```output2
8
```