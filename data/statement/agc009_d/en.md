Score : $1400$ points

## Problem Statement

We will recursively define *uninity* of a tree, as follows: (*Uni* is a Japanese word for sea urchins.)

- A tree consisting of one vertex is a tree of uninity $0$.
- Suppose there are zero or more trees of uninity $k$, and a vertex $v$. If a vertex is selected from each tree of uninity $k$ and connected to $v$ with an edge, the resulting tree is a tree of uninity $k+1$.

It can be shown that a tree of uninity $k$ is also a tree of uninity $k+1,k+2,...$, and so forth.

You are given a tree consisting of $N$ vertices.
The vertices of the tree are numbered $1$ through $N$, and the $i$-th of the $N-1$ edges connects vertices $a_i$ and $b_i$.

Find the minimum $k$ such that the given tree is a tree of uninity $k$.

## Constraints

- $2 \leq N \leq 10^5$
- $1 \leq a_i, b_i \leq N(1 \leq i \leq N-1)$
- The given graph is a tree.

## Input

The input is given from Standard Input in the following format:

> $N$
> 
> $a_1$ $b_1$
> 
> :
> 
> $a_{N-1}$ $b_{N-1}$

## Output

Print the minimum $k$ such that the given tree is a tree of uninity $k$.

```input1
7
1 2
2 3
2 4
4 6
6 7
7 5
```

```output1
2
```

A tree of uninity $1$ consisting of vertices $1$, $2$, $3$ and $4$ can be constructed from the following: a tree of uninity $0$ consisting of vertex $1$, a tree of uninity $0$ consisting of vertex $3$, a tree of uninity $0$ consisting of vertex $4$, and vertex $2$.

A tree of uninity $1$ consisting of vertices $5$ and $7$ can be constructed from the following: a tree of uninity $1$ consisting of vertex $5$, and vertex $7$.

A tree of uninity $2$ consisting of vertices $1$, $2$, $3$, $4$, $5$, $6$ and $7$ can be constructed from the following: a tree of uninity $1$ consisting of vertex $1$, $2$, $3$ and $4$, a tree of uninity $1$ consisting of vertex $5$ and $7$, and vertex $6$.

```input2
12
1 2
2 3
2 4
4 5
5 6
6 7
7 8
5 9
9 10
10 11
11 12
```

```output2
3
```