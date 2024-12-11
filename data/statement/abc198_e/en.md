Score : $500$ points

## Problem Statement

Given is a tree with $N$ vertices numbered $1$ through $N$. The $i$-th edge connects Vertex $A_i$ and Vertex $B_i$. Vertex $i$ is painted in color $C_i$ (in this problem, colors are represented as integers).

Vertex $x$ is said to be **good** when the shortest path from Vertex $1$ to Vertex $x$ does not contain a vertex painted in the same color as Vertex $x$, except Vertex $x$ itself.

Find all good vertices.

## Constraints

- $2 \leq N \leq 10^5$
- $1 \leq C_i \leq 10^5$
- $1 \leq A_i,B_i \leq N$
- The given graph is a tree.
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $C_1$ $\ldots$ $C_N$
> 
> $A_1$ $B_1$
> 
> $\vdots$
> 
> $A_{N-1}$ $B_{N-1}$

## Output

Print all good vertices as integers, in ascending order, using newline as a separator.

```input1
6
2 7 1 8 2 8
1 2
3 6
3 2
4 3
2 5
```

```output1
1
2
3
4
6
```

For example, the shortest path from Vertex $1$ to Vertex $6$ contains Vertices $1,2,3,6$. Among them, only Vertex $6$ itself is painted in the same color as Vertex $6$, so it is a good vertex.<br>
On the other hand, the shortest path from Vertex $1$ to Vertex $5$ contains Vertices $1,2,5$, and Vertex $1$ is painted in the same color as Vertex $5$, so Vertex $5$ is not a good vertex.  

```input2
10
3 1 4 1 5 9 2 6 5 3
1 2
2 3
3 4
4 5
5 6
6 7
7 8
8 9
9 10
```

```output2
1
2
3
5
6
7
8
```