Score : $600$ points

## Problem Statement

We have a simple connected undirected graph with $N$ vertices and $M$ edges.<br>
The vertices are numbered as Vertex $1$, Vertex $2$, $\dots$, Vertex $N$.<br>
The edges are numbered as Edge $1$, Edge $2$, $\dots$, Edge $M$.  Edge $i$ connects Vertex $a_i$ and Vertex $b_i$ bidirectionally.  There is no edge that directly connects Vertex $1$ and Vertex $N$.<br>
Each vertex is either empty or occupied by a wall.  Initially, every vertex is empty.

Aoki is going to travel from Vertex $1$ to Vertex $N$ along the edges on the graph.  However, Aoki is not allowed to move to a vertex occupied by a wall.

Takahashi has decided to choose some of the vertices to build walls on, so that Aoki cannot travel to Vertex $N$ no matter which route he takes.<br>
Building a wall on Vertex $i$ costs Takahashi $c_i$ yen (the currency of Japan).  **He cannot build a wall on Vertex $1$ and Vertex $N$**.

How many yens is required for Takahashi to build walls so that the conditions is satisfied?  Also, print the way of building walls to achieve the minimum cost.

## Constraints

- $3 \leq N \leq 100$
- $N - 1 \leq M \leq \frac{N(N-1)}{2} - 1$
- $1 \leq a_i \lt b_i \leq N$ $(1 \leq i \leq M)$
- $(a_i, b_i) \neq (1, N)$
- The given graph is simple and connected.
- $1 \leq c_{i} \leq 10^9$ $(2 \leq i \leq N-1)$
- $c_1 = c_N = 0$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

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
> $c_1$ $c_2$ $\dots$ $c_N$

## Output

Print in the following format. Here, $C,k$, and $p_i$ are defined as follows.

- $C$ is the cost that Takahashi will pay
- $k$ is the number of vertices for Takahashi to build walls on
- $(p_1,p_2,\dots,p_k)$ is a sequence of vertices on which Takahashi will build walls

> $C$
> 
> $k$
> 
> $p_1$ $p_2$ $\dots$ $p_k$

If there are multiple ways to build walls to satisfy the conditions with the minimum cost, print any of them.

```input1
5 5
1 2
2 3
3 5
2 4
4 5
0 8 3 4 0
```

```output1
7
2
3 4
```

If Takahashi builds walls on Vertex $3$ and Vertex $4$, paying $3 + 4 = 7$ yen, Aoki is unable to travel from Vertex $1$ to Vertex $5$.<br>
There is no way to satisfy the condition with less cost, so $7$ yen is the answer.

```input2
3 2
1 2
2 3
0 1 0
```

```output2
1
1
2
```

```input3
5 9
1 2
1 3
1 4
2 3
2 4
2 5
3 4
3 5
4 5
0 1000000000 1000000000 1000000000 0
```

```output3
3000000000
3
2 3 4
```