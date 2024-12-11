Score : $600$ points

## Problem Statement

We have a tree with $N$ vertices and $N-1$ edges, respectively numbered $1, 2,\cdots, N$ and $1, 2, \cdots, N-1$. Edge $i$ connects Vertex $u_i$ and $v_i$.

For integers $L, R$ ($1 \leq L \leq R \leq N$), let us define a function $f(L, R)$ as follows:

- Let $S$ be the set of the vertices numbered $L$ through $R$. $f(L, R)$ represents the number of connected components in the subgraph formed only from the vertex set $S$ and the edges whose endpoints both belong to $S$.

Compute $\sum_{L=1}^{N} \sum_{R=L}^{N} f(L, R)$.

## Constraints

- $1 \leq N \leq 2 \times 10^5$
- $1 \leq u_i, v_i \leq N$
- The given graph is a tree.
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $u_1$ $v_1$
> 
> $u_2$ $v_2$
> 
> $:$
> 
> $u_{N-1}$ $v_{N-1}$

## Output

Print $\sum_{L=1}^{N} \sum_{R=L}^{N} f(L, R)$.

```input1
3
1 3
2 3
```

```output1
7
```

We have six possible pairs $(L, R)$ as follows:

- For $L = 1, R = 1$, $S = \{1\}$ and we have $1$ connected component.
- For $L = 1, R = 2$, $S = \{1, 2\}$ and we have $2$ connected components.
- For $L = 1, R = 3$, $S = \{1, 2, 3\}$ and we have $1$ connected component, since $S$ contains both endpoints of each of the edges $1, 2$.
- For $L = 2, R = 2$, $S = \{2\}$ and we have $1$ connected component.
- For $L = 2, R = 3$, $S = \{2, 3\}$ and we have $1$ connected component, since $S$ contains both endpoints of Edge $2$.
- For $L = 3, R = 3$, $S = \{3\}$ and we have $1$ connected component.

The sum of these is $7$.

```input2
2
1 2
```

```output2
3
```

```input3
10
5 3
5 7
8 9
1 9
9 10
8 4
7 4
6 10
7 2
```

```output3
113
```