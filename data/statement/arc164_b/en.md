Score : $500$ points

## Problem Statement

There is a simple connected undirected graph with $N$ vertices numbered from $1$ to $N$.
This graph has $M$ edges, and the $i$-th edge connects two vertices $a_i$ and $b_i$.

Each vertex has a color, either white or black, and the initial state is given by $c_i$.
$c_i$ is either $0$ or $1$, where $c_i=0$ means that vertex $i$ is initially white, and $c_i=1$ means that vertex $i$ is initially black.

On this graph, you can choose any vertex as your starting point and repeat the following operation as many times as you like.

- Move to a vertex of a different color connected by an edge from the current vertex. Immediately after moving, reverse the color of the vertex you moved from (change to black if it was white, and vice versa).

Is it possible to return to the starting point after performing the operation at least once?

## Constraints

- $2 \leq N \leq 2 \times 10^5$
- $N-1 \leq M \leq \mathrm{min} \lbrace 2 \times 10^5,N(N-1)/2 \rbrace$
- $1 \leq a_i, b_i \leq N$ $(1 \leq i \leq M)$
- $c_i=0$ or $c_i=1$ $(1 \leq i \leq N)$
- The given graph is simple and connected.
- All input values are integers.

## Input

The input is given from Standard Input in the following format:

> $N$ $M$
> 
> $a_1$ $b_1$
> 
> $a_2$ $b_2$
> 
> $\vdots$
> 
> $a_M$ $b_M$
> 
> $c_1$ $c_2$ $\ldots$ $c_N$

## Output

If it is possible to return to the starting point after performing the operation at least once, print `Yes`; otherwise, print `No`.

```input1
4 4
1 2
2 3
3 4
4 2
0 1 0 1
```

```output1
Yes
```

For example, consider starting from vertex $1$.
In the first operation, move to vertex $2$ and change the color of the vertex $1$ from white to black. This change in the graph is shown in the figure below (the vertex circled is the current vertex).

Then, if you move to vertices $3$, $4$, and $2$ in order, the colors of vertices $1,2,3,4$ will then be black, white, black, and white, respectively.
Therefore, you can move to vertex $1$ in the next operation, returning to the starting point.

![](https://img.atcoder.jp/arc164/69700c7a0d96daa9c93ad01b89530e53.png)

```input2
5 6
1 2
2 3
3 4
4 5
1 4
2 5
0 1 0 1 0
```

```output2
No
```

In this graph, no matter which vertex you choose as the starting point, you cannot return to the starting point by making moves that satisfy the conditions.