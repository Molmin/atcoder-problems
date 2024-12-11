Score : $500$ points

## Problem Statement

You are given a simple connected undirected graph with $N$ vertices and $M$ edges (a simple graph contains no self-loop and no multi-edges).<br>
For $i = 1, 2, \ldots, M$, the $i$-th edge connects vertex $u_i$ and vertex $v_i$ bidirectionally.

Determine whether there is a way to paint each vertex black or white to satisfy both of the following conditions, and show one such way if it exists.

- At least one vertex is painted black.
- For every $i = 1, 2, \ldots, K$, the following holds:-   - the minimum distance between vertex $p_i$ and a vertex painted black is exactly $d_i$.

Here, the distance between vertex $u$ and vertex $v$ is the minimum number of edges in a path connecting $u$ and $v$.

## Constraints

- $1 \leq N \leq 2000$
- $N-1 \leq M \leq \min\lbrace N(N-1)/2, 2000 \rbrace$
- $1 \leq u_i, v_i \leq N$
- $0 \leq K \leq N$
- $1 \leq p_1 \lt p_2 \lt \cdots \lt p_K \leq N$
- $0 \leq d_i \leq N$
- The given graph is simple and connected.
- All values in the input are integers.

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
> 
> $K$
> 
> $p_1$ $d_1$
> 
> $p_2$ $d_2$
> 
> $\vdots$
> 
> $p_K$ $d_K$

## Output

If there is no way to paint each vertex black or white to satisfy the conditions, print `No`.<br>
Otherwise, print `Yes` in the first line, and a string $S$ representing a coloring of the vertices in the second line, as shown below.<br>
Here, $S$ is a string of length $N$ such that, for each $i = 1, 2, \ldots, N$, the $i$-th character of $S$ is $1$ if vertex $i$ is painted black and $0$ if white.

> Yes
> 
> $S$

If multiple solutions exist, you may print any of them.

```input1
5 5
1 2
2 3
3 1
3 4
4 5
2
1 0
5 2
```

```output1
Yes
10100
```

One way to satisfy the conditions is to paint vertices $1, 3$ black and vertices $2, 4, 5$ white.<br>
Indeed, for each $i = 1, 2, 3, 4, 5$, let $A_i$ denote the minimum distance between vertex $i$ and a vertex painted black, and we have $(A_1, A_2, A_3, A_4, A_5) = (0, 1, 0, 1, 2)$, where $A_1 = 0, A_5 = 2$.

```input2
5 5
1 2
2 3
3 1
3 4
4 5
5
1 1
2 1
3 1
4 1
5 1
```

```output2
No
```

There is no way to satisfy the conditions by painting each vertex black or white, so you should print `No`.

```input3
1 0
0
```

```output3
Yes
1
```