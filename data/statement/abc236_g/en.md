Score : $600$ points

## Problem Statement

We have a directed graph with $N$ vertices.
The $N$ vertices are called Vertex $1$, Vertex $2$, $\ldots$, Vertex $N$.
At time $0$, the graph has no edge.

For each $t = 1, 2, \ldots, T$, at time $t$, a directed edge from Vertex $u_t$ to Vertex $v_t$ will be added.
(The edge may be a self-loop, that is, $u_t = v_t$ may hold.)

A vertex is called *good* when it can be reached by starting at Vertex $1$ and traversing an edge **exactly** $L$ times.

For each $i = 1, 2, \ldots, N$, print the earliest time when Vertex $i$ is good. If there is no time when Vertex $i$ is good, print $-1$ instead.

## Constraints

- $2 \leq N \leq 100$
- $1 \leq T \leq N^2$
- $1 \leq L \leq 10^9$
- $1 \leq u_t, v_t \leq N$
- $i \neq j \Rightarrow (u_i, v_i) \neq (u_j, v_j)$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$ $T$ $L$
> 
> $u_1$ $v_1$
> 
> $u_2$ $v_2$
> 
> $\vdots$
> 
> $u_T$ $v_T$

## Output

In the following format, for each $i = 1, 2, \ldots, N$, print the earliest time $X_i$ when Vertex $i$ is good. If there is no time when Vertex $i$ is good, $X_i$ should be $-1$.

> $X_1$ $X_2$ $\ldots$ $X_N$

```input1
4 5 3
2 3
3 4
1 2
3 2
2 2
```

```output1
-1 4 5 3
```

At time $0$, the graph has no edge. Afterward, edges are added as follows.

- At time $1$, a directed edge from Vertex $2$ to Vertex $3$ is added.
- At time $2$, a directed edge from Vertex $3$ to Vertex $4$ is added.
- At time $3$, a directed edge from Vertex $1$ to Vertex $2$ is added. Now, Vertex $4$ can be reached from Vertex $1$ in exactly three moves: $1 \rightarrow 2 \rightarrow 3 \rightarrow 4$, making Vertex $4$ good.
- At time $4$, a directed edge from Vertex $3$ to Vertex $2$ is added. Now, Vertex $2$ can be reached from Vertex $1$ in exactly three moves: $1 \rightarrow 2 \rightarrow 3 \rightarrow 2$, making Vertex $2$ good.
- At time $5$, a directed edge (self-loop) from Vertex $2$ to Vertex $2$ is added. Now, Vertex $3$ can be reached from Vertex $1$ in exactly three moves: $1 \rightarrow 2 \rightarrow 2 \rightarrow 3$, making Vertex $3$ good.

Vertex $1$ will never be good.

```input2
2 1 1000000000
1 2
```

```output2
-1 -1
```