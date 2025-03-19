Score : $475$ points

## Problem Statement

You are given a tree with $NK$ vertices. The vertices are numbered $1,2,\dots,NK$, and the $i$-th edge ($i=1,2,\dots,NK-1$) connects vertices $u_i$ and $v_i$ bidirectionally.

Determine whether this tree can be decomposed into $N$ paths, each of length $K$. More precisely, determine whether there exists an $N \times K$ matrix $P$ satisfying the following:

- $P_{1,1}, \dots, P_{1,K}, P_{2,1}, \dots, P_{N,K}$ is a permutation of $1,2,\dots,NK$.
- For each $i=1,2,\dots,N$ and $j=1,2,\dots,K-1$, there is an edge connecting vertices $P_{i,j}$ and $P_{i,j+1}$.

## Constraints

- $1 \leq N$
- $1 \leq K$
- $NK \leq 2 \times 10^5$
- $1 \leq u_i &lt; v_i \leq NK$
- The given graph is a tree.
- All input values are integers.

## Input

The input is given from Standard Input in the following format:

> $N$ $K$
> 
> $u_1$ $v_1$
> 
> $u_2$ $v_2$
> 
> $\vdots$
> 
> $u_{NK-1}$ $v_{NK-1}$

## Output

If it is possible to decompose the tree into $N$ paths each of length $K$, print `Yes`. Otherwise, print `No`.

```input1
3 2
1 2
2 3
3 4
2 5
5 6
```

```output1
Yes
```

It can be decomposed into a path with vertices $1,2$, a path with vertices $3,4$, and a path with vertices $5,6$.

```input2
3 2
1 2
2 3
3 4
2 5
3 6
```

```output2
No
```