Score : $400$ points

## Problem Statement

You are given an undirected connected weighted graph with $N$ vertices and $M$ edges that contains neither self-loops nor double edges.<br>
The $i$-th $(1 \leq i \leq M)$ edge connects vertex $a_i$ and vertex $b_i$ with a distance of $c_i$.<br>
Here, a *self-loop* is an edge where $a_i = b_i (1 \leq i \leq M)$, and *double edges* are two edges where $(a_i,b_i)=(a_j,b_j)$ or $(a_i,b_i)=(b_j,a_j) (1 \leq i&lt;j \leq M)$.<br>
A *connected graph* is a graph where there is a path between every pair of different vertices.<br>
Find the number of the edges that are not contained in any shortest path between any pair of different vertices.  

## Constraints

- $2 \leq N \leq 100$
- $N-1 \leq M \leq min(N(N-1)/2,1000)$
- $1 \leq a_i,b_i \leq N$
- $1 \leq c_i \leq 1000$
- $c_i$ is an integer.
- The given graph contains neither self-loops nor double edges.
- The given graph is connected.

## Input

The input is given from Standard Input in the following format:

> $N$ $M$  
> 
> $a_1$ $b_1$ $c_1$  
> 
> $a_2$ $b_2$ $c_2$
> 
> $:$  
> 
> $a_M$ $b_M$ $c_M$

## Output

Print the number of the edges in the graph that are not contained in any shortest path between any pair of different vertices.

```input1
3 3
1 2 1
1 3 1
2 3 3
```

```output1
1
```

In the given graph, the shortest paths between all pairs of different vertices are as follows:

- The shortest path from vertex $1$ to vertex $2$ is: vertex $1$ → vertex $2$, with the length of $1$.
- The shortest path from vertex $1$ to vertex $3$ is: vertex $1$ → vertex $3$, with the length of $1$.
- The shortest path from vertex $2$ to vertex $1$ is: vertex $2$ → vertex $1$, with the length of $1$.
- The shortest path from vertex $2$ to vertex $3$ is: vertex $2$ → vertex $1$ → vertex $3$, with the length of $2$.
- The shortest path from vertex $3$ to vertex $1$ is: vertex $3$ → vertex $1$, with the length of $1$.
- The shortest path from vertex $3$ to vertex $2$ is: vertex $3$ → vertex $1$ → vertex $2$, with the length of $2$.

Thus, the only edge that is not contained in any shortest path, is the edge of length $3$ connecting vertex $2$ and vertex $3$, hence the output should be $1$.

```input2
3 2
1 2 1
2 3 1
```

```output2
0
```

Every edge is contained in some shortest path between some pair of different vertices.