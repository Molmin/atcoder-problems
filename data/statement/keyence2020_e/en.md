Score : $900$ points

## Problem Statement

We have a connected undirected graph with $N$ vertices and $M$ edges.
Edge $i$ in this graph ($1 \leq i \leq M$) connects Vertex $U_i$ and Vertex $V_i$ bidirectionally.
We are additionally given $N$ integers $D_1, D_2, ..., D_N$.

Determine whether the conditions below can be satisfied by assigning a color - white or black - to each vertex and an integer weight between $1$ and $10^9$ (inclusive) to each edge in this graph.
If the answer is yes, find one such assignment of colors and integers, too.

- There is at least one vertex assigned white and at least one vertex assigned black.
- For each vertex $v$ ($1 \leq v \leq N$), the following holds.-   - The minimum cost to travel from Vertex $v$ to a vertex whose color assigned is different from that of Vertex $v$ by traversing the edges is equal to $D_v$.

Here, the cost of traversing the edges is the sum of the weights of the edges traversed.

## Constraints

- $2 \leq N \leq 100,000$
- $1 \leq M \leq 200,000$
- $1 \leq D_i \leq 10^9$
- $1 \leq U_i, V_i \leq N$
- The given graph is connected and has no self-loops or multiple edges.
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$ $M$
> 
> $D_1$ $D_2$ $...$ $D_N$
> 
> $U_1$ $V_1$
> 
> $U_2$ $V_2$
> 
> $\vdots$
> 
> $U_M$ $V_M$

## Output

If there is no assignment satisfying the conditions, print a single line containing `-1`.

If such an assignment exists, print one such assignment in the following format:

> $S$
> 
> $C_1$
> 
> $C_2$
> 
> $\vdots$
> 
> $C_M$

Here,

- the first line should contain the string $S$ of length $N$. Its $i$-th character ($1 \leq i \leq N$) should be `W` if Vertex $i$ is assigned white and `B` if it is assigned black.
- The $(i + 1)$-th line ($1 \leq i \leq M$) should contain the integer weight $C_i$ assigned to Edge $i$.

```input1
5 5
3 4 3 5 7
1 2
1 3
3 2
4 2
4 5
```

```output1
BWWBB
4
3
1
5
2
```

Assume that we assign the colors and integers as the sample output, and let us consider Vertex $5$, for example. To travel from Vertex $5$, which is assigned black, to a vertex that is assigned white with the minimum cost, we should make these moves: Vertex $5$ $\to$ Vertex $4$ $\to$ Vertex $2$. The total cost of these moves is $7$, which satisfies the condition. We can also verify that the condition is satisfied for other vertices.

```input2
5 7
1 2 3 4 5
1 2
1 3
1 4
2 3
2 5
3 5
4 5
```

```output2
-1
```

```input3
4 6
1 1 1 1
1 2
1 3
1 4
2 3
2 4
3 4
```

```output3
BBBW
1
1
1
2
1
1
```