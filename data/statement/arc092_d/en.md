Score : $1100$ points

## Problem Statement

You are given a directed graph with $N$ vertices and $M$ edges.
The vertices are numbered $1, 2, ..., N$, and the edges are numbered $1, 2, ..., M$.
Edge $i$ points from Vertex $a_i$ to Vertex $b_i$.

For each edge, determine whether the reversion of that edge would change the number of the strongly connected components in the graph.

Here, the reversion of Edge $i$ means deleting Edge $i$ and then adding a new edge that points from Vertex $b_i$ to Vertex $a_i$.

## Constraints

- $2 \leq N \leq 1000$
- $1 \leq M \leq 200,000$
- $1 \leq a_i, b_i \leq N$
- $a_i \neq b_i$
- If $i \neq j$, then $a_i \neq a_j$ or $b_i \neq b_j$.

## Input

Input is given from Standard Input in the following format:

> $N$ $M$
> 
> $a_1$ $b_1$
> 
> $a_2$ $b_2$
> 
> $:$
> 
> $a_M$ $b_M$

## Output

Print $M$ lines. In the $i$-th line, if the reversion of Edge $i$ would change the number of the strongly connected components in the graph, print `diff`; if it would not, print `same`.

```input1
3 3
1 2
1 3
2 3
```

```output1
same
diff
same
```

The number of the strongly connected components is $3$ without reversion of edges, but it will become $1$ if Edge $2$ is reversed.

```input2
2 2
1 2
2 1
```

```output2
diff
diff
```

Reversion of an edge may result in multiple edges in the graph.

```input3
5 9
3 2
3 1
4 1
4 2
3 5
5 3
3 4
1 2
2 5
```

```output3
same
same
same
same
same
diff
diff
diff
diff
```