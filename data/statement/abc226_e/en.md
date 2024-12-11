Score : $500$ points

## Problem Statement

Given is an undirected graph with $N$ vertices and $M$ edges.
The vertices are called Vertex $1$, Vertex $2$, $\ldots$, Vertex $N$, and the edges are called Edge $1$, Edge $2$, $\ldots$, Edge $M$. Edge $i$ $(1 \leq i \leq M)$ connects Vertex $U_i$ and Vertex $V_i$.
It is guaranteed that the graph is simple: it has no self-loops and no multi-edges.

There are $2^M$ ways to direct every edge in this graph. We want each vertex to have exactly one edge going from that vertex to another vertex. How many ways are there to direct the edges in that way? Since the answer may be enormous, print it modulo $998244353$.

## Constraints

- $2 \leq N \leq 2\times 10^5$
- $1 \leq M \leq 2\times 10^5$
- $1 \leq U_i,V_i \leq N$
- $U_i \neq V_i$
- All values in input are integers.
- The given graph is simple.

## Input

Input is given from Standard Input in the following format:

> $N$ $M$
> 
> $U_1$ $V_1$
> 
> $U_2$ $V_2$
> 
> $\vdots$
> 
> $U_M$ $V_M$

## Output

Print the answer.

```input1
3 3
1 2
1 3
2 3
```

```output1
2
```

There are two ways to direct the edges to achieve the objective:

- $1\rightarrow 2$ , $2\rightarrow 3$ , $1\leftarrow 3$
- $1\leftarrow 2$ , $2\leftarrow 3$ , $1\rightarrow 3$

```input2
2 1
1 2
```

```output2
0
```

It is obviously impossible to make every vertex have one edge going from that vertex.

```input3
7 7
1 2
2 3
3 4
4 2
5 6
6 7
7 5
```

```output3
4
```