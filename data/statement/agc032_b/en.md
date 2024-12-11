Score : $700$ points

## Problem Statement

You are given an integer $N$.
Build an undirected graph with $N$ vertices with indices $1$ to $N$ that satisfies the following two conditions:

- The graph is simple and connected.
- There exists an integer $S$ such that, for every vertex, the sum of the indices of the vertices adjacent to that vertex is $S$.

It can be proved that at least one such graph exists under the constraints of this problem.

## Constraints

- All values in input are integers.
- $3 \leq N \leq 100$

## Input

Input is given from Standard Input in the following format:

> $N$

## Output

In the first line, print the number of edges, $M$, in the graph you made. In the $i$-th of the following $M$ lines, print two integers $a_i$ and $b_i$, representing the endpoints of the $i$-th edge.

The output will be judged correct if the graph satisfies the conditions.

```input1
3
```

```output1
2
1 3
2 3
```

- For every vertex, the sum of the indices of the vertices adjacent to that vertex is $3$.