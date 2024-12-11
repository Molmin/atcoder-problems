Score : $500$ points

## Problem Statement

We have a simple directed graph $G$ with $N$ vertices and $M$ edges. The vertices are labeled as Vertex $1$, Vertex $2$, $\ldots$, Vertex $N$.
The $i$-th edge $(1\leq i\leq M)$ goes from Vertex $U_i$ to Vertex $V_i$.

Takahashi will start at a vertex and repeatedly travel on $G$ from one vertex to another along a directed edge.
How many vertices of $G$ have the following condition: Takahashi can start at that vertex and continue traveling indefinitely by carefully choosing the path? 

## Constraints

- $1 \leq N \leq 2\times 10^5$
- $0 \leq M \leq \min(N(N-1), 2\times 10^5)$
- $1 \leq U_i,V_i\leq N$
- $U_i\neq V_i$
- $(U_i,V_i)\neq (U_j,V_j)$ if $i\neq j$.
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$ $M$
> 
> $U_1$ $V_1$
> 
> $U_2$ $V_2$
> 
> $\vdots$
> 
> $U_M$ $V_M$

## Output

Print the answer.

```input1
5 5
1 2
2 3
3 4
4 2
4 5
```

```output1
4
```

When starting at Vertex $2$, Takahashi can continue traveling indefinitely: $2$ $\to$ $3$ $\to$ $4$ $\to$ $2$ $\to$ $3$ $\to$ $\cdots$
The same goes when starting at Vertex $3$ or Vertex $4$.
From Vertex $1$, he can first go to Vertex $2$ and then continue traveling indefinitely again.<br>
On the other hand, from Vertex $5$, he cannot move at all.

Thus, four vertices ―Vertex $1$, $2$, $3$, and $4$― satisfy the conditions, so $4$ should be printed.

```input2
3 2
1 2
2 1
```

```output2
2
```

Note that, in a simple directed graph, there may be two edges in opposite directions between the same pair of vertices.
Additionally, $G$ may not be connected.