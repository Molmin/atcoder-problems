Score : $500$ points

## Problem Statement

Given is a connected undirected graph with $N$ vertices and $M$ edges. The vertices are numbered $1$ to $N$, and the edges are described by a grid of characters $S$.
If $S_{i,j}$ is `1`, there is an edge connecting Vertex $i$ and $j$; otherwise, there is no such edge.

Determine whether it is possible to divide the vertices into non-empty sets $V_1, \dots, V_k$ such that the following condition is satisfied. If the answer is yes, find the maximum possible number of sets, $k$, in such a division.

- Every edge connects two vertices belonging to two "adjacent" sets. More formally, for every edge $(i,j)$, there exists $1\leq t\leq k-1$ such that $i\in V_t,j\in V_{t+1}$ or $i\in V_{t+1},j\in V_t$ holds.

## Constraints

- $2 \leq N \leq 200$
- $S_{i,j}$ is `0` or `1`.
- $S_{i,i}$ is `0`.
- $S_{i,j}=S_{j,i}$
- The given graph is connected.
- $N$ is an integer.

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $S_{1,1}...S_{1,N}$
> 
> $:$
> 
> $S_{N,1}...S_{N,N}$

## Output

If it is impossible to divide the vertices into sets so that the condition is satisfied, print $-1$.
Otherwise, print the maximum possible number of sets, $k$, in a division that satisfies the condition.

```input1
2
01
10
```

```output1
2
```

We can put Vertex $1$ in $V_1$ and Vertex $2$ in $V_2$.

```input2
3
011
101
110
```

```output2
-1
```

```input3
6
010110
101001
010100
101000
100000
010000
```

```output3
4
```