Score : $600$ points

## Problem Statement

You are given a simple connected undirected graph with $N$ vertices and $M$ edges.  (A graph is said to be simple if it has no multi-edges and no self-loops.)<br>
For $i = 1, 2, \ldots, M$, the $i$-th edge connects Vertex $u_i$ and Vertex $v_i$.

A sequence $(A_1, A_2, \ldots, A_k)$ is said to be a **path** of length $k$ if both of the following two conditions are satisfied:

- For all $i = 1, 2, \dots, k$, it holds that $1 \leq A_i \leq N$.
- For all $i = 1, 2, \ldots, k-1$, Vertex $A_i$ and Vertex $A_{i+1}$ are directly connected with an edge.

An empty sequence is regarded as a path of length $0$.

You are given a sting $S = s_1s_2\ldots s_N$ of length $N$ consisting of $0$ and $1$.
A path $A = (A_1, A_2, \ldots, A_k)$ is said to be a **good path** with respect to $S$ if the following conditions are satisfied:

- For all $i = 1, 2, \ldots, N$, it holds that:-   - if $s_i = 0$, then $A$ has even number of $i$'s.
-   - if $s_i = 1$, then $A$ has odd number of $i$'s.

Under the Constraints of this problem, it can be proved that there is at least one good path with respect to $S$ of length at most $4N$.
Print a good path with respect to $S$ of length at most $4N$.

## Constraints

- $2 \leq N \leq 10^5$
- $N-1 \leq M \leq \min\lbrace 2 \times 10^5, \frac{N(N-1)}{2}\rbrace$
- $1 \leq u_i, v_i \leq N$
- The given graph is simple and connected.
- $N, M, u_i$, and $v_i$ are integers.
- $S$ is a string of length $N$ consisting of $0$ and $1$.

## Input

Input is given from Standard Input in the following format:

> $N$ $M$
> 
> $u_1$ $v_1$
> 
> $u_2$ $v_2$
> 
> $\vdots$
> 
> $u_M$ $v_M$
> 
> $S$

## Output

Print a good path with respect to $S$ of length at most $4N$ in the following format.
Specifically, the first line should contain the length $K$ of the path, and the second line should contain the elements of the path, with spaces in between.

> $K$
> 
> $A_1$ $A_2$ $\ldots$ $A_K$

```input1
6 6
6 3
2 5
4 2
1 3
6 5
3 2
110001
```

```output1
9
2 5 6 5 6 3 1 3 6
```

The path $(2, 5, 6, 5, 6, 3, 1, 3, 6)$ has a length no greater than $4N$, and

- it has  odd number ($1$) of $1$
- it has  odd number ($1$) of $2$
- it has even number ($2$) of $3$
- it has even number ($0$) of $4$
- it has even number ($2$) of $5$
- it has  odd number ($3$) of $6$

so it is a good path with respect to $S = 110001$.

```input2
3 3
3 1
3 2
1 2
000
```

```output2
0
```

An empty path $()$ is a good path with respect to $S = 000000$.
Alternatively, paths like $(1, 2, 3, 1, 2, 3)$ are also accepted.