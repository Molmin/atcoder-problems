Score : $500$ points

## Problem Statement

You are given a simple connected undirected graph with $N$ vertices and $M$ edges.<br>
Edge $i$ connects Vertex $A_i$ and Vertex $B_i$, and has a length of $C_i$.

Let us delete some number of edges while satisfying the conditions below. Find the maximum number of edges that can be deleted.

- The graph is still connected after the deletion.
- For every pair of vertices $(s, t)$, the distance between $s$ and $t$ remains the same before and after the deletion.

## Notes

A simple connected undirected graph is a graph that is simple and connected and has undirected edges.<br>
A graph is simple when it has no self-loops and no multi-edges.<br>
A graph is connected when, for every pair of two vertices $s$ and $t$, $t$ is reachable from $s$ by traversing edges.<br>
The distance between Vertex $s$ and Vertex $t$ is the length of a shortest path between $s$ and $t$.

## Constraints

- $2 \leq N \leq 300$
- $N-1 \leq M \leq \frac{N(N-1)}{2}$
- $1 \leq A_i \lt B_i \leq N$
- $1 \leq C_i \leq 10^9$
- $(A_i, B_i) \neq (A_j, B_j)$ if $i \neq j$.
- The given graph is connected.
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$ $M$
> 
> $A_1$ $B_1$ $C_1$
> 
> $A_2$ $B_2$ $C_2$
> 
> $\vdots$
> 
> $A_M$ $B_M$ $C_M$

## Output

Print the answer.

```input1
3 3
1 2 2
2 3 3
1 3 6
```

```output1
1
```

The distance between each pair of vertices before the deletion is as follows.

- The distance between Vertex $1$ and Vertex $2$ is $2$.
- The distance between Vertex $1$ and Vertex $3$ is $5$.
- The distance between Vertex $2$ and Vertex $3$ is $3$.

Deleting Edge $3$ does not affect the distance between any pair of vertices. It is impossible to delete two or more edges while satisfying the condition, so the answer is $1$.

```input2
5 4
1 3 3
2 3 9
3 5 3
4 5 3
```

```output2
0
```

No edge can be deleted.

```input3
5 10
1 2 71
1 3 9
1 4 82
1 5 64
2 3 22
2 4 99
2 5 1
3 4 24
3 5 18
4 5 10
```

```output3
5
```