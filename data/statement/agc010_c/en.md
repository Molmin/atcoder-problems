Score : $700$ points

## Problem Statement

There is a tree with $N$ vertices, numbered $1$ through $N$.
The $i$-th of the $N-1$ edges connects vertices $a_i$ and $b_i$.

Currently, there are $A_i$ stones placed on vertex $i$.
Determine whether it is possible to remove all the stones from the vertices by repeatedly performing the following operation:

- Select a pair of different leaves. Then, remove exactly one stone from every vertex on the path between those two vertices.
  Here, a *leaf* is a vertex of the tree whose degree is $1$, and the selected leaves themselves are also considered as vertices on the path connecting them.

Note that the operation cannot be performed if there is a vertex with no stone on the path.

## Constraints

- $2 \leq N \leq 10^5$
- $1 \leq a_i,b_i \leq N$
- $0 \leq A_i \leq 10^9$
- The given graph is a tree.

## Input

The input is given from Standard Input in the following format:

> $N$
> 
> $A_1$ $A_2$ … $A_N$
> 
> $a_1$ $b_1$
> 
> :
> 
> $a_{N-1}$ $b_{N-1}$

## Output

If it is possible to remove all the stones from the vertices, print `YES`. Otherwise, print `NO`.

```input1
5
1 2 1 1 2
2 4
5 2
3 2
1 3
```

```output1
YES
```

All the stones can be removed, as follows:

- Select vertices $4$ and $5$. Then, there is one stone remaining on each vertex except $4$.
- Select vertices $1$ and $5$. Then, there is no stone on any vertex.

```input2
3
1 2 1
1 2
2 3
```

```output2
NO
```

```input3
6
3 2 2 2 2 2
1 2
2 3
1 4
1 5
4 6
```

```output3
YES
```