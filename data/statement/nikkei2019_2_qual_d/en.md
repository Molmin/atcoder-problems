Score : $600$ points

## Problem Statement

We have $N$ points numbered $1$ to $N$ arranged in a line in this order.

Takahashi decides to make an undirected graph, using these points as the vertices.
In the beginning, the graph has no edge. Takahashi will do $M$ operations to add edges in this graph.
The $i$-th operation is as follows:

- The operation uses integers $L_i$ and $R_i$ between $1$ and $N$ (inclusive), and a positive integer $C_i$. For every pair of integers $(s, t)$ such that $L_i \leq s &lt; t \leq R_i$, add an edge of length $C_i$ between Vertex $s$ and Vertex $t$.

The integers $L_1, ..., L_M$, $R_1, ..., R_M$, $C_1, ..., C_M$ are all given as input.

Takahashi wants to solve the shortest path problem in the final graph obtained. Find the length of the shortest path from Vertex $1$ to Vertex $N$ in the final graph.

## Constraints

- $2 \leq N \leq 10^5$
- $1 \leq M \leq 10^5$
- $1 \leq L_i &lt; R_i \leq N$
- $1 \leq C_i \leq 10^9$

## Input

Input is given from Standard Input in the following format:

> $N$ $M$
> 
> $L_1$ $R_1$ $C_1$
> 
> $:$
> 
> $L_M$ $R_M$ $C_M$

## Output

Print the length of the shortest path from Vertex $1$ to Vertex $N$ in the final graph.
If there is no shortest path, print `-1` instead.

```input1
4 3
1 3 2
2 4 3
1 4 6
```

```output1
5
```

We have an edge of length $2$ between Vertex $1$ and Vertex $2$, and an edge of length $3$ between Vertex $2$ and Vertex $4$, so there is a path of length $5$ between Vertex $1$ and Vertex $4$.

```input2
4 2
1 2 1
3 4 2
```

```output2
-1
```

```input3
10 7
1 5 18
3 4 8
1 3 5
4 7 10
5 9 8
6 10 5
8 10 3
```

```output3
28
```