Score : $500$ points

## Problem Statement

There is a graph with $N + Q$ vertices, numbered $1, 2, \ldots, N + Q$. Initially, the graph has no edges.

For this graph, perform the following operation for $i = 1, 2, \ldots, Q$ in order:

- For each integer $j$ satisfying $L_i \leq j \leq R_i$, add an undirected edge with cost $C_i$ between vertices $N + i$ and $j$.

Determine if the graph is connected after all operations are completed. If it is connected, find the cost of a minimum spanning tree of the graph.

A minimum spanning tree is a spanning tree with the smallest possible cost, and the cost of a spanning tree is the sum of the costs of the edges used in the spanning tree.

## Constraints

- $1 \leq N, Q \leq 2 \times 10^5$
- $1 \leq L_i \leq R_i \leq N$
- $1 \leq C_i \leq 10^9$
- All input values are integers.

## Input

The input is given from Standard Input in the following format:

> $N$ $Q$
> 
> $L_1$ $R_1$ $C_1$
> 
> $L_2$ $R_2$ $C_2$
> 
> $\vdots$
> 
> $L_Q$ $R_Q$ $C_Q$

## Output

If the graph is connected, print the cost of a minimum spanning tree. Otherwise, print $-1$.

```input1
4 3
1 2 2
1 3 4
2 4 5
```

```output1
22
```

The following edges form a minimum spanning tree:

- An edge with cost $2$ connecting vertices $1$ and $5$
- An edge with cost $2$ connecting vertices $2$ and $5$
- An edge with cost $4$ connecting vertices $1$ and $6$
- An edge with cost $4$ connecting vertices $3$ and $6$
- An edge with cost $5$ connecting vertices $3$ and $7$
- An edge with cost $5$ connecting vertices $4$ and $7$

Since $2 + 2 + 4 + 4 + 5 + 5 = 22$, print $22$.

```input2
6 2
1 2 10
4 6 10
```

```output2
-1
```

The graph is disconnected.

```input3
200000 4
1 200000 1000000000
1 200000 998244353
1 200000 999999999
1 200000 999999999
```

```output3
199651870599998
```