Score : $400$ points

## Problem Statement

Takahashi found a puzzle along some road.<br>
It is composed of an undirected graph with nine vertices and $M$ edges, and eight pieces.

The nine vertices of the graph are called Vertex $1$, Vertex $2$, $\ldots$, Vertex $9$. For each $i = 1, 2, \ldots, M$, the $i$-th edge connects Vertex $u_i$ and Vertex $v_i$.<br>
The eight pieces are called Piece $1$, Piece $2$, $\ldots$, Piece $8$.
For each $j = 1, 2, \ldots, 8$, Piece $j$ is on Vertex $p_j$.<br>
Here, it is guaranteed that all pieces are on distinct vertices.
Note that there is exactly one *empty* vertex without a piece.

Takahashi can do the following operation on the puzzle any number of times (possibly zero).

Choose a piece on a vertex adjacent to the empty vertex, and move it to the empty vertex.

By repeating this operation, he aims to *complete* the puzzle.
The puzzle is considered complete when the following holds.

- For each $j = 1, 2, \ldots, 8$, Piece $j$ is on Vertex $j$.

Determine whether it is possible for Takahashi to complete the puzzle. If it is possible, find the minimum number of operations needed to do so.

## Constraints

- $0 \leq M \leq 36$
- $1 \leq u_i, v_i \leq 9$
- The given graph has no multi-edges or self-loops.
- $1 \leq p_j \leq 9$
- $j \neq j' \Rightarrow p_j \neq p_{j'}$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $M$
> 
> $u_1$ $v_1$
> 
> $u_2$ $v_2$
> 
> $\vdots$
> 
> $u_M$ $v_M$
> 
> $p_1$ $p_2$ $\ldots$ $p_8$

## Output

If it is possible for Takahashi to complete the puzzle, find the minimum number of operations needed to do so.
Otherwise, print $-1$.

```input1
5
1 2
1 3
1 9
2 9
3 9
3 9 2 4 5 6 7 8
```

```output1
5
```

The following procedure completes the puzzle in five operations.

1. Move Piece $2$ from Vertex $9$ to Vertex $1$.
2. Move Piece $3$ from Vertex $2$ to Vertex $9$.
3. Move Piece $2$ from Vertex $1$ to Vertex $2$.
4. Move Piece $1$ from Vertex $3$ to Vertex $1$.
5. Move Piece $3$ from Vertex $9$ to Vertex $3$.

On the other hand, it is impossible to complete the puzzle in less than five operations. Thus, we should print $5$.<br>
Note that the given graph may not be connected.

```input2
5
1 2
1 3
1 9
2 9
3 9
1 2 3 4 5 6 7 8
```

```output2
0
```

The puzzle is already complete from the beginning.
Thus, the minimum number of operations needed to complete the puzzle is $0$.

```input3
12
8 5
9 6
4 5
4 1
2 5
8 9
2 1
3 6
8 7
6 5
7 4
2 3
1 2 3 4 5 6 8 7
```

```output3
-1
```

No sequence of operations can complete the puzzle, so we should print $-1$.

```input4
12
6 5
5 4
4 1
4 7
8 5
2 1
2 5
6 9
3 6
9 8
8 7
3 2
2 3 4 6 1 9 7 8
```

```output4
16
```