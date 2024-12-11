Score : $500$ points

## Problem Statement

You are given a simple connected undirected graph with $N$ vertices and $M$ edges, where vertices are numbered $1$ to $N$ and edges are numbered $1$ to $M$. Edge $i$ $(1 \leq i \leq M)$ connects vertices $u_i$ and $v_i$ bidirectionally and has weight $w_i$.

For a path, define its weight as the maximum weight of an edge in the path.
Define $f(x, y)$ as the minimum possible path weight of a path from vertex $x$ to vertex $y$.

You are given two sequences of length $K$: $(A_1, A_2, \ldots, A_K)$ and $(B_1, B_2, \ldots, B_K)$. It is guaranteed that $A_i \neq B_j$ $(1 \leq i,j \leq K)$.

Permute the sequence $B$ freely so that $\displaystyle \sum_{i=1}^{K} f(A_i, B_i)$ is minimized.

## Constraints

- $2 \leq N \leq 2 \times 10^5$
- $N-1 \leq M \leq \min(\frac{N \times (N-1)}{2},2 \times 10^5)$
- $1 \leq K \leq N$
- $1 \leq u_i&lt;v_i \leq N$ $(1 \leq i \leq M)$
- $1 \leq w_i \leq 10^9$
- $1 \leq A_i,B_i \leq N$ $(1 \leq i \leq K)$
- The given graph is simple and connected.
- All input values are integers.

## Input

The input is given from Standard Input in the following format:

> $N$ $M$ $K$
> 
> $u_1$ $v_1$ $w_1$
> 
> $u_2$ $v_2$ $w_2$
> 
> $\vdots$
> 
> $u_M$ $v_M$ $w_M$
> 
> $A_1$ $A_2$ $\ldots$ $A_K$
> 
> $B_1$ $B_2$ $\ldots$ $B_K$

## Output

Print the minimum value of $\displaystyle \sum_{i=1}^{K} f(A_i, B_i)$.

```input1
4 4 3
1 3 2
3 4 1
2 4 5
1 4 4
1 1 3
4 4 2
```

```output1
8
```

If we rearrange $B$ as $(2,4,4)$:

- $f(1,2) = 5$: The path from vertex $1$ to vertex $2$ passing through vertex $4$ contains edge $3$ with a maximum edge weight of $5$. There is no path with a maximum edge weight less than or equal to $4$, so $5$ is the minimum possible.
- $f(1,4) = 2$: The path from vertex $1$ to vertex $4$ passing through vertex $3$ contains edge $1$ with a maximum edge weight of $2$. There is no path with a maximum edge weight less than or equal to $1$, so $2$ is the minimum possible.
- $f(3,4) = 1$: The path from vertex $3$ to vertex $4$ passing through the direct edge contains an edge with a maximum edge weight of $1$. No path can have a maximum weight $0$ or less, so $1$ is the minimum possible.

Thus, $\displaystyle \sum_{i=1}^{3} f(A_i, B_i) = 5+2+1=8$. No permutation of $B$ yields $7$ or less, so the answer is $8$.

```input2
3 3 2
1 2 5
2 3 2
1 3 1
1 1
2 3
```

```output2
3
```