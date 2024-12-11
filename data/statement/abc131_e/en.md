Score: $500$ points

## Problem Statement

Does there exist an undirected graph with $N$ vertices satisfying the following conditions?

- The graph is simple and connected.
- The vertices are numbered $1, 2, ..., N$.
- Let $M$ be the number of edges in the graph. The edges are numbered $1, 2, ..., M$, the length of each edge is $1$, and Edge $i$ connects Vertex $u_i$ and Vertex $v_i$.
- There are exactly $K$ pairs of vertices $(i,\ j)\ (i &lt; j)$ such that the shortest distance between them is $2$.

If there exists such a graph, construct an example.

## Constraints

- All values in input are integers.
- $2 \leq N \leq 100$
- $0 \leq K \leq \frac{N(N - 1)}{2}$

## Input

Input is given from Standard Input in the following format:

> $N$ $K$

## Output

If there does not exist an undirected graph with $N$ vertices satisfying the conditions, print `-1`.

If there exists such a graph, print an example in the following format (refer to Problem Statement for what the symbols stand for):

> $M$
> 
> $u_1$ $v_1$
> 
> $:$
> 
> $u_M$ $v_M$

If there exist multiple graphs satisfying the conditions, any of them will be accepted.

```input1
5 3
```

```output1
5
4 3
1 2
3 1
4 5
2 3
```

This graph has three pairs of vertices such that the shortest distance between them is $2$: $(1,\ 4)$, $(2,\ 4)$, and $(3,\ 5)$. Thus, the condition is satisfied.

```input2
5 8
```

```output2
-1
```

There is no graph satisfying the conditions.