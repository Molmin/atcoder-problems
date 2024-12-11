Score : $800$ points

## Problem Statement

We have a tree with $N$ vertices, numbered $1, \ldots, N$.
For each $i=1,\ldots,N-1$, the $i$-th edge connects Vertex $a_i$ and Vertex $b_i$.<br>
An operation on this tree when at most one piece is put on each vertex is defined as follows.

- Simultaneously move every piece to one of the vertices adjacent to the one occupied by the piece.

An operation is said to be **good** when the conditions below are satisfied.

- Each edge is traversed by at most one piece.
- Each vertex will be occupied by at most one piece after the operation.

Takahashi will put a piece on one or more vertices of his choice. Among the $2^N-1$ ways to put pieces, find the number of ones that satisfy the condition below, modulo $998244353$.

- For every non-negative integer $K$, the following holds.-   - It is possible to perform a good operation $K$ times.
-   - Let $S_K$ be the set of vertices occupied by pieces just after $K$ good operations. Then, $S_K$ is unique.

## Constraints

- $2 \leq N \leq 2 \times 10^5$
- $1 \leq a_i \lt b_i \leq N$
- The given graph is a tree.
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $a_1$ $b_1$
> 
> $\vdots$
> 
> $a_{N-1}$ $b_{N-1}$

## Output

Print the answer.

```input1
3
1 2
1 3
```

```output1
2
```

Here are the two ways to satisfy the condition.

- Put a piece on Vertex $1$ and Vertex $2$.
- Put a piece on Vertex $1$ and Vertex $3$.

Note that he must put a piece on at least one vertex. 

```input2
7
1 2
1 3
2 4
2 5
3 6
3 7
```

```output2
0
```

There might be no way to satisfy the condition.

```input3
19
9 14
2 13
1 3
17 19
13 18
12 19
4 5
2 10
4 9
8 11
3 15
6 8
8 10
6 19
9 13
11 15
7 17
16 17
```

```output3
100
```