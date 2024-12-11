Score : $600$ points

## Problem Statement

Given is a simple undirected graph with $N$ vertices and $M$ edges. The vertices are numbered $1, \cdots, N$, and the $i$-th edge connects Vertices $a_i$ and $b_i$.
Also given is a sequence of positive integers: $c_1, c_2, \cdots, c_N$.

Convert this graph into a directed graph that satisfies the condition below, that is, for each $i$, delete the undirected edge $(a_i, b_i)$ and add one of the two direted edges $a_i \to b_i$ and $b_i \to a_i$.

- For every $i = 1, 2, \cdots, N$, there are exactly $c_i$ vertices reachable from Vertex $i$ (by traversing some number of directed edges), including Vertex $i$ itself.

In this problem, it is guaranteed that the given input **always has a solution**.

## Constraints

- $1 \leq N \leq 100$
- $0 \leq M \leq \frac{N(N - 1)}{2}$
- $1 \leq a_i, b_i \leq N$
- The given graph has no self-loops and no multi-edges.
- $1 \leq c_i \leq N$
- **There always exists a valid solution.**

## Input

Input is given from Standard Input in the following format:

> $N$ $M$
> 
> $a_1$ $b_1$
> 
> $:$
> 
> $a_M$ $b_M$
> 
> $c_1$ $c_2$ $...$ $c_N$

## Output

Print $M$ lines.

To add the edge $a_i \to b_i$ for the $i$-th edge, print `-&amp;gt;` in the $i$-th line; to add the edge $b_i \to a_i$ for the $i$-th edge, print `&amp;lt;-`.

If there are multiple solutions, any of them will be accepted.

```input1
3 3
1 2
2 3
3 1
3 3 3
```

```output1
->
->
->
```

In a cycle of length $3$, you can reach every vertex from any vertex.

```input2
3 2
1 2
2 3
1 2 3
```

```output2
<-
<-
```

```input3
6 3
1 2
4 3
5 6
1 2 1 2 2 1
```

```output3
<-
->
->
```

The graph may be disconnected.