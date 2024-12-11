Score : $500$ points

## Problem Statement

We have a simple undirected graph with $N$ vertices and $M$ edges. The vertices are numbered $1,\ldots,N$. For each $i=1,\ldots,M$, the $i$-th edge connects Vertex $a_i$ and Vertex $b_i$. Additionally, **the degree of each vertex is at most $3$.**

For each $i=1,\ldots,Q$, answer the following query.

- Find the sum of indices of vertices whose distances from Vertex $x_i$ are at most $k_i$.

## Constraints

- $1 \leq N \leq 1.5 \times 10^5$
- $0 \leq M \leq \min (\frac{N(N-1)}{2},\frac{3N}{2})$
- $1 \leq a_i \lt b_i \leq N$
- $(a_i,b_i) \neq (a_j,b_j)$, if $i\neq j$.
- The degree of each vertex in the graph is at most $3$.
- $1 \leq Q \leq 1.5 \times 10^5$
- $1 \leq x_i \leq N$
- $0 \leq k_i \leq 3$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$ $M$
> 
> $a_1$ $b_1$
> 
> $\vdots$
> 
> $a_M$ $b_M$
> 
> $Q$
> 
> $x_1$ $k_1$
> 
> $\vdots$
> 
> $x_Q$ $k_Q$

## Output

Print $Q$ lines. The $i$-th line should contain the answer to the $i$-th query.

```input1
6 5
2 3
3 4
3 5
5 6
2 6
7
1 1
2 2
2 0
2 3
4 1
6 0
4 3
```

```output1
1
20
2
20
7
6
20
```

For the $1$-st query, the only vertex whose distance from Vertex $1$ is at most $1$ is Vertex $1$, so the answer is $1$.<br>
For the $2$-nd query, the vertices whose distances from Vertex $2$ are at most $2$ are Vertex $2$, $3$, $4$, $5$, and $6$, so the answer is their sum, $20$.<br>
The $3$-rd and subsequent queries can be answered similarly.