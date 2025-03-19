Score : $625$ points

## Problem Statement

You are given a directed graph with $N$ vertices and $M$ edges. The vertices are numbered $1,2,\dots,N$. Edge $j$ ($j=1,2,\dots,M$) goes from vertex $u_j$ to vertex $v_j$. It is guaranteed that vertex $N$ is reachable from vertex $1$.

Initially, all edges have weight $0$. We choose exactly $K$ out of the $M$ edges and change their weights to $1$. Find the maximum possible value of the shortest distance from vertex $1$ to vertex $N$ in the resulting graph.

## Constraints

- $2 \leq N \leq 30$
- $1 \leq K \leq M \leq 100$
- $1 \leq u_j, v_j \leq N$
- $u_j \neq v_j$
- In the given graph, vertex $N$ is reachable from vertex $1$.
- All input values are integers.

## Input

The input is given from Standard Input in the following format:

> $N$ $M$ $K$
> 
> $u_1$ $v_1$
> 
> $u_2$ $v_2$
> 
> $\vdots$
> 
> $u_M$ $v_M$

## Output

Print the answer.

```input1
3 3 2
1 2
2 3
1 3
```

```output1
1
```

By choosing edges $1,3$, the shortest distance from vertex $1$ to vertex $3$ becomes $1$. There is no way to make the shortest distance $2$ or greater, so the answer is $1$.

```input2
4 4 3
1 2
1 3
3 2
2 4
```

```output2
2
```

By choosing edges $1,2,4$, the shortest distance from vertex $1$ to vertex $4$ becomes $2$. There is no way to make the shortest distance $3$ or greater, so the answer is $2$.

```input3
2 2 1
1 2
1 2
```

```output3
0
```

Note that there may be multi-edges.