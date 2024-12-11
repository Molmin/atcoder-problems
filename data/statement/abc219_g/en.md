Score : $600$ points

## Problem Statement

You are given a simple undirected graph with $N$ vertices and $M$ edges. The $N$ vertices are called Vertex $1$, Vertex $2$, $\ldots$, Vertex $N$.<br>
For each $i = 1, 2, \ldots, M$, the $i$-th edge connects Vertex $u_i$ and Vertex $v_i$.<br>
Additionally, for each $i = 1, 2, \ldots, N$, Vertex $i$ has an integer $i$ written on it.

You are also given $Q$ queries.<br>
For each $i = 1, 2, \ldots, Q$, the $i$-th query is represented as an integer $x_i$.
This query involves the following operation.

1. Let $X$ be the integer written on Vertex $x_i$.
2. For every vertex adjacent to Vertex $x_i$, replace the integer written on it with $X$.

Here, Vertex $u$ and Vertex $v$ are said to be adjacent when there is an edge connecting them.

Print the integer written on each vertex after all queries are processed in the order they are given from input.

## Constraints

- $1 \leq N \leq 2 \times 10^5$
- $0 \leq M \leq \min(2 \times 10^5, N(N-1)/2)$
- $1 \leq Q \leq 2 \times 10^5$
- $1 \leq u_i, v_i \leq N$
- $1 \leq x_i \leq N$
- The given graph is simple. In other words, it has no self-loops and no multi-edges.
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$ $M$ $Q$
> 
> $u_1$ $v_1$
> 
> $u_2$ $v_2$
> 
> $\vdots$
> 
> $u_M$ $v_M$
> 
> $x_1$ $x_2$ $\ldots$ $x_Q$

## Output

Print the integers written on the vertices after all queries are processed, in the format below, with spaces in between.<br>
Here, for each $i = 1, 2, \ldots, N$, $A_i$ denotes the integer written on Vertex $i$.

> $A_1$ $A_2$ $\ldots$ $A_N$

```input1
5 6 3
4 2
4 3
1 2
2 3
4 5
1 5
1 3 4
```

```output1
1 3 3 3 3
```

Each query involves the following operation.

- The first query $(x_1 = 1)$: Vertex $1$ has the integer $1$ written on it, and the vertices adjacent to Vertex $1$ are Vertices $2$ and $5$.
Thus, the integers on Vertices $2$ and $5$ get replaced with $1$.
- The second query $(x_2 = 3)$: Vertex $3$ has the integer $3$ written on it, and the vertices adjacent to Vertex $3$ are Vertices $2$ and $4$.
Thus, the integers on Vertices $2$ and $4$ get replaced with $3$.
- The third query $(x_3 = 4)$: Vertex $4$ has the integer $3$ written on it, and the vertices adjacent to Vertex $4$ are Vertices $2$, $3$, and $5$.
Thus, the integers on Vertices $2$, $3$, and $5$ get replaced with $3$.
(Vertices $2$ and $3$ already have $3$ written on them, so the actual change takes place only on Vertex $5$.)

```input2
14 14 8
7 4
13 9
9 8
4 3
7 2
13 8
12 8
11 3
6 3
7 14
6 5
1 4
10 13
5 2
2 6 12 9 1 10 5 4
```

```output2
1 6 1 1 6 6 1 9 9 10 11 12 10 14
```