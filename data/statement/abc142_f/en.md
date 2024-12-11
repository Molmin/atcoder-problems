Score : $600$ points

## Problem Statement

Given is a directed graph $G$ with $N$ vertices and $M$ edges.<br>
The vertices are numbered $1$ to $N$, and the $i$-th edge is directed from Vertex $A_i$ to Vertex $B_i$.<br>
It is guaranteed that the graph contains no self-loops or multiple edges.

Determine whether there exists an induced subgraph (see Notes) of $G$ such that the in-degree and out-degree of every vertex are both $1$. If the answer is yes, show one such subgraph.<br>
Here the null graph is not considered as a subgraph.

## Notes

For a directed graph $G = (V, E)$, we call a directed graph $G' = (V', E')$ satisfying the following conditions an induced subgraph of $G$:

- $V'$ is a (non-empty) subset of $V$.
- $E'$ is the set of all the edges in $E$ that have both endpoints in $V'$.

## Constraints

- $1 \leq N \leq 1000$
- $0 \leq M \leq 2000$
- $1 \leq A_i,B_i \leq N$
- $A_i \neq B_i$
- All pairs $(A_i, B_i)$ are distinct.
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$ $M$
> 
> $A_1$ $B_1$
> 
> $A_2$ $B_2$
> 
> $:$
> 
> $A_M$ $B_M$

## Output

If there is no induced subgraph of $G$ that satisfies the condition, print `-1`.
Otherwise, print an induced subgraph of $G$ that satisfies the condition, in the following format:

> $K$
> 
> $v_1$
> 
> $v_2$
> 
> :
> 
> $v_K$

This represents the induced subgraph of $G$ with $K$ vertices whose vertex set is $\{v_1, v_2, \ldots, v_K\}$. (The order of $v_1, v_2, \ldots, v_K$ does not matter.)
If there are multiple subgraphs of $G$ that satisfy the condition, printing any of them is accepted.

```input1
4 5
1 2
2 3
2 4
4 1
4 3
```

```output1
3
1
2
4
```

The induced subgraph of $G$ whose vertex set is $\{1, 2, 4\}$ has the edge set $\{(1, 2), (2, 4), (4, 1)\}$. The in-degree and out-degree of every vertex in this graph are both $1$.

```input2
4 5
1 2
2 3
2 4
1 4
4 3
```

```output2
-1
```

There is no induced subgraph of $G$ that satisfies the condition.

```input3
6 9
1 2
2 3
3 4
4 5
5 6
5 1
5 2
6 1
6 2
```

```output3
4
2
3
4
5
```