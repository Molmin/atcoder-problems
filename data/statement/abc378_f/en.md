Score : $500$ points

## Problem Statement

You are given a tree with $N$ vertices. The $i$-th edge $(1 \leq i \leq N-1)$ connects vertices $u_i$ and $v_i$ bidirectionally.

Adding one undirected edge to the given tree always yields a graph with exactly one cycle.

Among such graphs, how many satisfy all of the following conditions?

- The graph is simple.
- All vertices in the cycle have degree $3$.

## Constraints

- $3 \leq N \leq 2 \times 10^5$
- $1 \leq u_i, v_i \leq N$
- The given graph is a tree.
- All input values are integers.

## Input

The input is given from Standard Input in the following format:

> $N$
> 
> $u_1$ $v_1$
> 
> $u_2$ $v_2$
> 
> $\vdots$
> 
> $u_{N-1}$ $v_{N-1}$

## Output

Print the answer.

```input1
6
1 2
2 3
3 4
4 5
3 6
```

```output1
1
```

Adding an edge connecting vertices $2$ and $4$ yields a simple graph where all vertices in the cycle have degree $3$, so it satisfies the conditions.

```input2
7
1 2
2 7
3 5
7 3
6 2
4 7
```

```output2
0
```

There are cases where no graphs satisfy the conditions.

```input3
15
1 15
11 14
2 10
1 7
9 8
6 9
4 12
14 5
4 9
8 11
7 4
1 13
3 6
11 10
```

```output3
6
```