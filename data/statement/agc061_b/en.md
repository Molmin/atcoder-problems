Score : $800$ points

## Problem Statement

There is a graph with $N$ vertices $v_1, \ldots, v_N$ on the left, and $N + 1$ vertices $u_1, \ldots, u_{N + 1}$ on the right. Each vertex $v_i$ ($1 \leq i \leq N$) is connected to each vertex $u_j$ ($1 \leq j \leq N + 1$), that is, the graph contains $N(N + 1)$ edges.

We color every edge with one of the $N$ colors $1, \ldots, N$. A coloring is **suitable** if for each $k = 1, \ldots, N$ there are exactly $2k$ edges of color $k$, and those edges form a simple path.

Formally, for each $k = 1, \ldots, N$ there should exist a sequence of distinct vertices $w_0, \ldots, w_{2k}$ such that all of the following is true:

- For each $i = 0, \ldots, 2k - 1$, vertices $w_i$ and $w_{i + 1}$ are connected with an edge of color $k$,
- No other edges of color $k$ exist.

Find any suitable coloring, or determine that it doesn't exist.

For each input file, solve $T$ test cases.

## Constraints

- $1 \leq T \leq 100$
- $1 \leq N \leq 100$

## Input

Input is given from Standard Input in the following format:

> $T$
> 
> $case_1$
> 
> $case_2$
> 
> $\vdots$
> 
> $case_T$

Each case is in the following format:

> $N$

## Output

For each test case, if a suitable coloring does not exist, print `No`. Otherwise, print a suitable coloring description in the following format:

> Yes
> 
> $C_{1, 1}$ $C_{1, 2}$ $\ldots$ $C_{1, N + 1}$
> 
> $\vdots$
> 
> $C_{N, 1}$ $C_{N, 2}$ $\ldots$ $C_{N, N + 1}$

Here, $C_{i, j}$ is the color of the edge between $v_i$ and $u_j$.

If there are many suitable colorings, print any of them.

```input1
2
1
2
```

```output1
Yes
1 1
No
```