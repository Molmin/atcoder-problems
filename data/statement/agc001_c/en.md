Score : $600$ points

## Problem Statement

Given an undirected tree, let the distance between vertices $u$ and $v$ be the
number of edges on the simple path from $u$ to $v$.
The diameter of a tree is the maximum among the distances between any two vertices.
We will call a tree *good* if and only if its diameter is at most $K$.

You are given an undirected tree with $N$ vertices numbered $1$ through $N$.
For each $i (1 \leq i \leq N-1)$, there is an edge connecting vertices $A_i$ and $B_i$.

You want to remove zero or more vertices from the tree, so that the resulting tree is good.
When a vertex is removed, all incident edges will also be removed.
The resulting graph must be connected.

Find the minimum number of vertices that you need to remove in order to produce a good tree.

## Constraints

- $2 \leq N \leq 2000$
- $1 \leq K \leq N-1$
- $1 \leq A_i \leq N, 1 \leq B_i \leq N$
- The graph defined by $A_i$ and $B_i$ is a tree.

## Input

The input is given from Standard Input in the following format:

> $N$ $K$
> 
> $A_1$ $B_1$
> 
> $A_2$ $B_2$
> 
> :
> 
> $A_{N-1}$ $B_{N-1}$

## Output

Print the minimum number of vertices that you need to remove in order to produce a good tree.

```input1
6 2
1 2
3 2
4 2
1 6
5 6
```

```output1
2
```

The tree is shown below. Removing vertices $5$ and $6$ will result in a good tree with the diameter of $2$.

![ctree.png](https://agc001.contest.atcoder.jp/img/agc/001/Gg9pvPKw/ctree.png)

```input2
6 5
1 2
3 2
4 2
1 6
5 6
```

```output2
0
```

Since the given tree is already good, you do not need to remove any vertex.