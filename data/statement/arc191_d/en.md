Score : $700$ points

## Problem Statement

You are given a simple connected undirected graph with $N$ vertices and $M$ edges, where the vertices are numbered $1$ to $N$ and the edges are numbered $1$ to $M$. Edge $i$ connects vertex $u_i$ and vertex $v_i$ in both directions.

Initially, there is a piece A on vertex $S$ and a piece B on vertex $T$. Here, $S$ and $T$ are given as input.

You may perform the following operation any number of times in any order:

- Choose either piece A or piece B, and move it from its current vertex to an adjacent vertex via an edge. However, you cannot make a move that results in both pieces ending up on the same vertex.

Your goal is to reach the state in which piece A is on vertex $T$ and piece B is on vertex $S$.

Determine whether this is possible, and if it is, find the minimum number of operations required to achieve it.

## Constraints

- $2 \le N \le 2\times 10^5$
- $\displaystyle N-1 \le M \le \min\left(\frac{N(N-1)}{2},\,2\times 10^5\right)$
- $1 \le u_i &lt; v_i \le N$
- The given graph is simple and connected.
- $1 \le S, T \le N$
- $S \neq T$
- All input values are integers.

## Input

The input is given from Standard Input in the following format:

> $N$ $M$ $S$ $T$
> 
> $u_1$ $v_1$
> 
> $u_2$ $v_2$
> 
> $\vdots$
> 
> $u_M$ $v_M$

## Output

If it is impossible to achieve the goal, print `-1`.

If it is possible, print the minimum number of operations required.

```input1
4 4 3 4
2 4
1 4
3 4
2 3
```

```output1
3
```

For example, the following sequence of operations completes the goal in three moves:

1. Move piece A to vertex $2$.1.    - Piece A is on vertex $2$, piece B is on vertex $4$.
2. Move piece B to vertex $3$.1.    - Piece A is on vertex $2$, piece B is on vertex $3$.
3. Move piece A to vertex $4$.1.    - Piece A is on vertex $4$, piece B is on vertex $3$.

It is impossible to complete the goal in fewer than three moves, so print $3$.

```input2
2 1 1 2
1 2
```

```output2
-1
```

No matter how you move the pieces, you cannot achieve the goal.

```input3
5 6 3 5
1 2
2 3
1 5
2 4
1 3
2 5
```

```output3
4
```