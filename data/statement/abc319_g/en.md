Score : $575$ points

## Problem Statement

We will perform the following operation on a complete undirected graph $G$ with $N$ vertices.

For each $i = 1, 2, \ldots, M$, delete the undirected edge connecting vertices $u_i$ and $v_i$.

Determine if there is a path from vertex $1$ to vertex $N$ in $G$ after the operation. If there is, find the number, modulo $998244353$, of shortest paths from vertex $1$ to vertex $N$.

Here, a shortest path from vertex $1$ to vertex $N$ is a path from vertex $1$ to vertex $N$ that contains the minimum number of edges.

## Constraints

- $2 \leq N \leq 2 \times 10^5$
- $0 \leq M \leq \min\lbrace 2 \times 10^5, N(N-1)/2 \rbrace$
- $1 \leq u_i, v_i \leq N$
- $u_i \neq v_i$
- $i \neq j \implies \lbrace u_i, v_i \rbrace \neq \lbrace u_j, v_j \rbrace$
- All input values are integers.

## Input

The input is given from Standard Input in the following format:

> $N$ $M$
> 
> $u_1$ $v_1$
> 
> $u_2$ $v_2$
> 
> $\vdots$
> 
> $u_M$ $v_M$

## Output

If there is no path from vertex $1$ to vertex $N$ in $G$ after the operation, print `-1`. If there is, print the number, modulo $998244353$, of shortest paths from vertex $1$ to vertex $N$.

```input1
6 7
4 3
1 3
2 4
1 6
4 6
5 1
6 2
```

```output1
3
```

In $G$ after the operation, the shortest paths from vertex $1$ to vertex $N$ are the following three, each containing three edges.

- vertex $1$ $\rightarrow$ vertex $2$ $\rightarrow$ vertex $3$ $\rightarrow$ vertex $6$
- vertex $1$ $\rightarrow$ vertex $2$ $\rightarrow$ vertex $5$ $\rightarrow$ vertex $6$
- vertex $1$ $\rightarrow$ vertex $4$ $\rightarrow$ vertex $5$ $\rightarrow$ vertex $6$

```input2
4 6
1 2
1 3
1 4
2 3
2 4
3 4
```

```output2
-1
```

$G$ has no edges after the operation. There is no path from vertex $1$ to vertex $N$, so print `-1`.