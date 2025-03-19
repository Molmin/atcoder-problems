Score : $300$ points

## Problem Statement

You are given an undirected graph with $N$ vertices and $M$ edges, where the vertices are numbered $1$ through $N$ and the edges are numbered $1$ through $M$. Edge $i$ connects vertices $u_i$ and $v_i$.<br>
To make the graph simple by removing edges, what is the minimum number of edges that must be removed?<br>
Here, a graph is called simple if and only if it does not contain self-loops or multi-edges.

## Constraints

- $1 \leq N \leq 2 \times 10^5$
- $0 \leq M \leq 5 \times 10^5$
- $1 \leq u_i \leq N$
- $1 \leq v_i \leq N$
- All input values are integers.

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

## Output

Print the minimum number of edges that must be removed to make the graph simple.

```input1
3 5
1 2
2 3
3 2
3 1
1 1
```

```output1
2
```

By removing edges $3$ and $5$, the graph becomes simple. This is one of the ways to remove the minimum number of edges, so the answer is $2$.

```input2
1 0
```

```output2
0
```

```input3
6 10
6 2
4 1
5 1
6 6
5 3
5 1
1 4
6 4
4 2
5 6
```

```output3
3
```