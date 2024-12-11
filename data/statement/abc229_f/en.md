Score : $500$ points

## Problem Statement

Given is an undirected graph with $N+1$ vertices.<br>
The vertices are called Vertex $0$, Vertex $1$, $\ldots$, Vertex $N$.

For each $i=1,2,\ldots,N$, the graph has an undirected edge with a weight of $A_i$ connecting Vertex $0$ and Vertex $i$.

Additionally, for each $i=1,2,\ldots,N$, the graph has an undirected edge with a weight of $B_i$ connecting Vertex $i$ and Vertex $i+1$. (Here, Vertex $N+1$ stands for Vertex $1$.)

The graph has no edge other than these $2N$ edges above.

Let us delete some of the edges from this graph so that the graph will be bipartite.<br>
What is the minimum total weight of the edges that have to be deleted?

## Constraints

- $3 \leq N \leq 2 \times 10^5$
- $1 \leq A_i \leq 10^9$
- $1 \leq B_i \leq 10^9$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $A_1$ $A_2$ $\dots$ $A_N$
> 
> $B_1$ $B_2$ $\dots$ $B_N$

## Output

Print the answer.

```input1
5
31 4 159 2 65
5 5 5 5 10
```

```output1
16
```

![](https://img.atcoder.jp/ghi/ded08d4aa13d31bea28b91afe246c790.png)<br>
Deleting the edge connecting Vertices $0,2$ (weight: $4$), the edge connecting Vertices $0,4$ (weight: $2$), and the edge connecting Vertices $1,5$ (weight: $10$) makes the graph bipartite.

```input2
4
100 100 100 1000000000
1 2 3 4
```

```output2
10
```