Score : $700$ points

## Problem Statement

We have an undirected graph with $N$ vertices numbered $0$ through $N-1$ and no edges at first.
You may add edges to this graph as you like.
When you are done with adding edges, the following operation will be performed once using a given integer $K$.

- For each edge you have added, let $u$ and $v$ be its endpoints, and an edge will be added between two vertices $(u+K)$ $\mathrm{mod}$ $N$ and $(v+K)$ $\mathrm{mod}$ $N$.
This edge will be added even if there is already an edge between these vertices, resulting in multi-edges.

For the given $N$ and $K$, find a set of edges that you should add so that the graph will be a tree after the operation.
If there is no such set of edges, indicate that fact.

## Constraints

- $2\leq N\leq 2\times 10^5$
- $1\leq K\leq N-1$
- All values in the input are integers.

## Input

The input is given from Standard Input in the following format:

> $N$ $K$

## Output

If there is a set of edges that satisfies the requirement, let $M$ be the number of edges, and $a_i$ and $b_i$ be the two vertices connected by the $i$-th edge, and print a solution in the following format.
Here, $0\leq M\leq N$ must hold, and all values must be integers. The edges may be printed in any order, as well as the endpoints of an edge.

> $M$
> 
> $a_1$ $b_1$
> 
> $a_2$ $b_2$
> 
> $\vdots$
> 
> $a_M$ $b_M$

If multiple solutions exist, any of them will be accepted.

If no set of edges satisfies the requirement, print `-1`.

```input1
5 2
```

```output1
2
2 3
2 4
```

The operation will add the edges $4$-$0$ and $4$-$1$.
Then, the graph will be a tree, so this is a legitimate output.

```input2
2 1
```

```output2
-1
```

There is no way to have a tree after the operation.

```input3
7 1
```

```output3
3
0 1
2 3
4 5
```