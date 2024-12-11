Score : $700$ points

## Problem Statement

We have a graph with $N$ vertices and $M$ edges, and there are two people on the graph: Takahashi and Aoki.

The $i$-th edge connects Vertex $U_i$ and Vertex $V_i$.
The time it takes to traverse this edge is $D_i$ minutes, regardless of direction and who traverses the edge (Takahashi or Aoki).

Takahashi departs Vertex $S$ and Aoki departs Vertex $T$ at the same time. Takahashi travels to Vertex $T$ and Aoki travels to Vertex $S$, both in the shortest time possible.
Find the number of the pairs of ways for Takahashi and Aoki to choose their shortest paths such that they never meet (at a vertex or on an edge) during the travel, modulo $10^9 + 7$.

## Constraints

- $1 \leq N \leq 100$ $000$
- $1 \leq M \leq 200$ $000$
- $1 \leq S, T \leq N$
- $S \neq T$
- $1 \leq U_i, V_i \leq N$ ($1 \leq i \leq M$)
- $1 \leq D_i \leq 10^9$ ($1 \leq i \leq M$)
- If $i \neq j$, then $(U_i, V_i) \neq (U_j, V_j)$ and $(U_i, V_i) \neq (V_j, U_j)$.
- $U_i \neq V_i$ ($1 \leq i \leq M$)
- $D_i$ are integers.
- The given graph is connected.

## Input

Input is given from Standard Input in the following format:

> $N$ $M$
> 
> $S$ $T$
> 
> $U_1$ $V_1$ $D_1$
> 
> $U_2$ $V_2$ $D_2$
> 
> $:$
> 
> $U_M$ $V_M$ $D_M$

## Output

Print the answer.

```input1
4 4
1 3
1 2 1
2 3 1
3 4 1
4 1 1
```

```output1
2
```

There are two ways to choose shortest paths that satisfies the condition:

- Takahashi chooses the path $1 \rightarrow 2 \rightarrow 3$, and Aoki chooses the path $3 \rightarrow 4 \rightarrow 1$.
- Takahashi chooses the path $1 \rightarrow 4 \rightarrow 3$, and Aoki chooses the path $3 \rightarrow 2 \rightarrow 1$.

```input2
3 3
1 3
1 2 1
2 3 1
3 1 2
```

```output2
2
```

```input3
3 3
1 3
1 2 1
2 3 1
3 1 2
```

```output3
2
```

```input4
8 13
4 2
7 3 9
6 2 3
1 6 4
7 6 9
3 8 9
1 2 2
2 8 12
8 6 9
2 5 5
4 2 18
5 3 7
5 1 515371567
4 8 6
```

```output4
6
```