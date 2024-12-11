Score : $800$ points

## Problem Statement

There is a directed graph with $N$ vertices and $N$ edges. The vertices are numbered $1, 2, ..., N$.

The graph has the following $N$ edges: $(p_1, 1), (p_2, 2), ..., (p_N, N)$, and the graph is weakly connected. Here, an edge from Vertex $u$ to Vertex $v$ is denoted by $(u, v)$, and a weakly connected graph is a graph which would be connected if each edge was bidirectional.

We would like to assign a value to each of the vertices in this graph so that the following conditions are satisfied. Here, $a_i$ is the value assigned to Vertex $i$.

- Each $a_i$ is a non-negative integer.
- For each edge $(i, j)$, $a_i \neq a_j$ holds.
- For each $i$ and each integer $x(0 \leq x &lt; a_i)$, there exists a vertex $j$ such that the edge $(i, j)$ exists and $x = a_j$ holds.

Determine whether there exists such an assignment.

## Constraints

- $2 \leq N \leq 200$ $000$
- $1 \leq p_i \leq N$
- $p_i \neq i$
- The graph is weakly connected.

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $p_1$ $p_2$ ... $p_N$

## Output

If the assignment is possible, print `POSSIBLE`; otherwise, print `IMPOSSIBLE`.

```input1
4
2 3 4 1
```

```output1
POSSIBLE
```

The assignment is possible: {$a_i$} = {$0, 1, 0, 1$} or {$a_i$} $=$ {$1, 0, 1, 0$}.

```input2
3
2 3 1
```

```output2
IMPOSSIBLE
```

```input3
4
2 3 1 1
```

```output3
POSSIBLE
```

The assignment is possible: {$a_i$} $=$ {$2, 0, 1, 0$}.

```input4
6
4 5 6 5 6 4
```

```output4
IMPOSSIBLE
```