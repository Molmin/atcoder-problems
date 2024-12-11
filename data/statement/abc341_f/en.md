Score: $475$ points

## Problem Statement

You are given a simple undirected graph consisting of $N$ vertices and $M$ edges.
For $i = 1, 2, \ldots, M$, the $i$-th edge connects vertices $u_i$ and $v_i$.
Also, for $i = 1, 2, \ldots, N$, vertex $i$ is assigned a positive integer $W_i$, and there are $A_i$ pieces placed on it.

As long as there are pieces on the graph, repeat the following operation:

- First, choose and remove one piece from the graph, and let $x$ be the vertex on which the piece was placed.
- Choose a (possibly empty) set $S$ of vertices adjacent to $x$ such that $\sum_{y \in S} W_y \lt W_x$, and place one piece on each vertex in $S$.

Print the maximum number of times the operation can be performed.

It can be proved that, regardless of how the operation is performed, there will be no pieces on the graph after a finite number of iterations.

## Constraints

- All input values are integers.
- $2 \leq N \leq 5000$
- $1 \leq M \leq \min \lbrace N(N-1)/2, 5000 \rbrace$
- $1 \leq u_i, v_i \leq N$
- $u_i \neq v_i$
- $i \neq j \implies \lbrace u_i, v_i \rbrace \neq \lbrace u_j, v_j \rbrace$
- $1 \leq W_i \leq 5000$
- $0 \leq A_i \leq 10^9$

## Input

The input is given from Standard Input in the following format:

> $N$ $M$
> 
> $u_1$ $v_1$
> 
> $u_2$ $v_2$
> 
> $\vdots$
> 
> $u_M$ $v_M$
> 
> $W_1$ $W_2$ $\ldots$ $W_N$
> 
> $A_1$ $A_2$ $\ldots$ $A_N$

## Output

Print the answer.

```input1
6 6
1 2
2 3
3 1
3 4
1 5
5 6
9 2 3 1 4 4
1 0 0 0 0 1
```

```output1
5
```

In the following explanation, let $A = (A_1, A_2, \ldots, A_N)$ represent the numbers of pieces on the vertices.
Initially, $A = (1, 0, 0, 0, 0, 1)$.

Consider performing the operation as follows:

- Remove one piece from vertex $1$ and place one piece each on vertices $2$ and $3$. Now, $A = (0, 1, 1, 0, 0, 1)$.
- Remove one piece from vertex $2$. Now, $A = (0, 0, 1, 0, 0, 1)$.
- Remove one piece from vertex $6$. Now, $A = (0, 0, 1, 0, 0, 0)$.
- Remove one piece from vertex $3$ and place one piece on vertex $2$. Now, $A = (0, 1, 0, 0, 0, 0)$.
- Remove one piece from vertex $2$. Now, $A = (0, 0, 0, 0, 0, 0)$.

In this procedure, the operation is performed five times, which is the maximum possible number of times.

```input2
2 1
1 2
1 2
0 0
```

```output2
0
```

In this sample input, there are no pieces on the graph from the beginning.

```input3
10 20
4 8
1 10
1 7
5 9
9 10
8 10
7 5
1 4
7 3
8 7
2 8
5 8
4 2
5 1
7 2
8 3
3 4
8 9
7 10
2 3
25 5 1 1 16 5 98 3 21 1
35 39 32 11 35 37 14 29 36 1
```

```output3
1380
```