Score : $800$ points

## Problem Statement

You are given a connected simple undirected graph with $N$ vertices and $\displaystyle\frac{3}{2}N$ edges, where $N$ is a positive **even number**. 
The vertices are labeled from $1$ to $N$, and the $i$-th edge connects vertex $A_i$ and vertex $B_i$.
Moreover, for every vertex, the **number of incident edges is exactly $3$**.

You will color each vertex of the given graph either black ( `B` ) or white ( `W` ).
Here, the string obtained by arranging the colors ( `B` or `W` ) of the vertices in the order of vertex labels is called a **color sequence**.

Determine whether there is a color sequence that **cannot** result from performing the following operation once when all vertices are colored, and if there is such a color sequence, find one.

**Operation:** For each vertex $k = 1, 2, \dots, N$, let $C_k$ be the color that occupies the majority (more than half) of the colors of the vertices connected to $k$ by an edge.
For every vertex $k$, change its color to $C_k$ simultaneously.

There are $T$ test cases to solve.

## Constraints

- $T \geq 1$
- $N \geq 4$
- The sum of $N$ over the test cases in each input file is at most $5 \times 10^4$.
- $N$ is an **even number**.
- $1 \leq A_i &lt; B_i \leq N \ \ \left(1 \leq i \leq \displaystyle\frac{3}{2}N\right)$
- $(A_i, B_i) \neq (A_j, B_j) \ \ \left(1 \leq i &lt; j \leq \displaystyle\frac{3}{2}N\right)$
- The given graph is connected.
- Each vertex $k \ (1 \leq k \leq N)$ appears **exactly $3$ times** as $A_i, B_i \ \left(1 \leq i \leq \displaystyle\frac{3}{2}N\right)$.

## Input

The input is given from Standard Input in the following format:

> $T$
> 
> $\mathrm{case}_1$
> 
> $\mathrm{case}_2$
> 
> $\vdots$
> 
> $\mathrm{case}_T$

Each test case $\mathrm{case}_i \ (1 \leq i \leq T)$ is in the following format:

> $N$
> 
> $A_1$ $B_1$
> 
> $A_2$ $B_2$
> 
> $\vdots$
> 
> $A_{\frac{3}{2}N}$ $B_{\frac{3}{2}N}$

## Output

Print $T$ lines.
For the $i$-th line, if there is a color sequence that cannot result from performing the operation for the $i$-th test case, print such a color sequence; otherwise, print `-1`.
If there are multiple color sequences that cannot result from performing the operation, any of them will be considered correct.

```input1
2
4
1 2
1 3
1 4
2 3
2 4
3 4
10
1 2
1 3
1 4
2 3
2 4
3 5
4 5
5 6
6 7
6 8
7 9
7 10
8 9
8 10
9 10
```

```output1
BWWW
BWWWBWWWBB
```

Let us consider the first test case.
For the color of vertex $1$ to be `B`, at least two of the colors of vertices $2, 3, 4$ must be `B` before the operation.
Then, for at least one of the vertices $2, 3, 4$, at least two of the colors of the vertices connected to that vertex by an edge are `B`, so the color of that vertex after the operation will be `B`.
Therefore, the color sequence `BWWW` cannot result from performing the operation.