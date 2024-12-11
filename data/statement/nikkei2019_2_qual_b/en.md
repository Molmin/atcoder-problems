Score : $300$ points

## Problem Statement

Given is an integer sequence $D_1,...,D_N$ of $N$ elements. Find the number, modulo $998244353$, of trees with $N$ vertices numbered $1$ to $N$ that satisfy the following condition:

- For every integer $i$ from $1$ to $N$, the distance between Vertex $1$ and Vertex $i$ is $D_i$.

## Notes

- A tree of $N$ vertices is a connected undirected graph with $N$ vertices and $N-1$ edges, and the distance between two vertices are the number of edges in the shortest path between them.
- Two trees are considered different if and only if there are two vertices $x$ and $y$ such that there is an edge between $x$ and $y$ in one of those trees and not in the other.

## Constraints

- $1 \leq N \leq 10^5$
- $0 \leq D_i \leq N-1$

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $D_1$ $D_2$ $...$ $D_N$

## Output

Print the answer.

```input1
4
0 1 1 2
```

```output1
2
```

For example, a tree with edges $(1,2)$, $(1,3)$, and $(2,4)$ satisfies the condition.

```input2
4
1 1 1 1
```

```output2
0
```

```input3
7
0 3 2 1 2 2 1
```

```output3
24
```