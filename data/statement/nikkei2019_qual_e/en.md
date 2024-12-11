Score : $800$ points

## Problem Statement

There is a connected undirected graph with $N$ vertices and $M$ edges.
The vertices are numbered $1$ to $N$, and the edges are numbered $1$ to $M$.
Also, each of these vertices and edges has a specified weight.
Vertex $i$ has a weight of $X_i$; Edge $i$ has a weight of $Y_i$ and connects Vertex $A_i$ and $B_i$.

We would like to remove zero or more edges so that the following condition is satisfied:

- For each edge that is not removed, the sum of the weights of the vertices in the connected component containing that edge, is greater than or equal to the weight of that edge.

Find the minimum number of edges that need to be removed.

## Constraints

- $1 \leq N \leq 10^5$
- $N-1 \leq M \leq 10^5$
- $1 \leq X_i \leq 10^9$
- $1 \leq A_i &lt; B_i \leq N$
- $1 \leq Y_i \leq 10^9$
- $(A_i,B_i) \neq (A_j,B_j)$ ($i \neq j$)
- The given graph is connected.
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$ $M$
> 
> $X_1$ $X_2$ $...$ $X_N$
> 
> $A_1$ $B_1$ $Y_1$
> 
> $A_2$ $B_2$ $Y_2$
> 
> $:$
> 
> $A_M$ $B_M$ $Y_M$

## Output

Find the minimum number of edges that need to be removed.

```input1
4 4
2 3 5 7
1 2 7
1 3 9
2 3 12
3 4 18
```

```output1
2
```

Assume that we removed Edge $3$ and $4$.
In this case, the connected component containing Edge $1$ contains Vertex $1, 2$ and $3$, and the sum of the weights of these vertices is $2+3+5=10$.
The weight of Edge $1$ is $7$, so the condition is satisfied for Edge $1$.
Similarly, it can be seen that the condition is also satisfied for Edge $2$.
Thus, a graph satisfying the condition can be obtained by removing two edges.

The condition cannot be satisfied by removing one or less edges, so the answer is $2$.

```input2
6 10
4 4 1 1 1 7
3 5 19
2 5 20
4 5 8
1 6 16
2 3 9
3 6 16
3 4 1
2 6 20
2 4 19
1 2 9
```

```output2
4
```

```input3
10 9
81 16 73 7 2 61 86 38 90 28
6 8 725
3 10 12
1 4 558
4 9 615
5 6 942
8 9 918
2 7 720
4 7 292
7 10 414
```

```output3
8
```