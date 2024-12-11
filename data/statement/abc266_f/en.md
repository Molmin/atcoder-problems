Score : $500$ points

## Problem Statement

You are given a connected simple undirected graph $G$ with $N$ vertices numbered $1$ to $N$ and $N$ edges. The $i$-th edge connects Vertex $u_i$ and Vertex $v_i$ bidirectionally.

Answer the following $Q$ queries.

- Determine whether there is a unique simple path from Vertex $x_i$ to Vertex $y_i$ (a simple path is a path without repetition of vertices).

## Constraints

- $3 \leq N \leq 2 \times 10^5$
- $1 \leq u_i &lt; v_i\leq N$
- $(u_i,v_i) \neq (u_j,v_j)$ if $i \neq j$.
- $G$ is a connected simple undirected graph with $N$ vertices and $N$ edges.
- $1 \leq Q \leq 2 \times 10^5$
- $1 \leq x_i &lt; y_i\leq N$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $u_1$ $v_1$
> 
> $u_2$ $v_2$
> 
> $\vdots$
> 
> $u_N$ $v_N$
> 
> $Q$
> 
> $x_1$ $y_1$
> 
> $x_2$ $y_2$
> 
> $\vdots$
> 
> $x_Q$ $y_Q$

## Output

Print $Q$ lines.

The $i$-th line $(1 \leq i \leq Q)$ should contain `Yes` if there is a unique simple path from Vertex $x_i$ to Vertex $y_i$, and `No` otherwise.

```input1
5
1 2
2 3
1 3
1 4
2 5
3
1 2
1 4
1 5
```

```output1
No
Yes
No
```

The simple paths from Vertex $1$ to $2$ are $(1,2)$ and $(1,3,2)$, which are not unique, so the answer to the first query is `No`.

The simple path from Vertex $1$ to $4$ is $(1,4)$, which is unique, so the answer to the second query is `Yes`.

The simple paths from Vertex $1$ to $5$ are $(1,2,5)$ and $(1,3,2,5)$, which are not unique, so the answer to the third query is `No`.

```input2
10
3 5
5 7
4 8
2 9
1 2
7 9
1 6
4 10
2 5
2 10
10
1 8
6 9
8 10
6 8
3 10
3 9
1 10
5 8
1 10
7 8
```

```output2
Yes
No
Yes
Yes
No
No
Yes
No
Yes
No
```