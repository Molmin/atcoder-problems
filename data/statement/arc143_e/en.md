Score : $700$ points

## Problem Statement

We have a tree with $N$ vertices.
The vertices are numbered $1$ to $N$,
and the $i$-th edge connects Vertex $A_i$ and Vertex $B_i$.
Additionally, each vertex has a reversi piece on it.
The status of the piece on each vertex is given by a string $S$:
if the $i$-th character of $S$ is `B`, the piece on Vertex $i$ is placed with the black side up;
if the $i$-th character of $S$ is `W`, the piece on Vertex $i$ is placed with the white side up.

Determine whether it is possible to perform the operation below $N$ times to remove the pieces from all vertices.
If it is possible, find the lexicographically smallest possible sequence $P_1, P_2, \ldots, P_N$ such that Vertices $P_1, P_2, \ldots, P_N$ can be chosen in this order during the process.

- Choose a vertex containing a piece with the white side up, and remove the piece from that vertex.
Then, flip all pieces on the vertices adjacent to that vertex.

Notes on reversi pieces
A reversi piece has a black side and a white side, and flipping it changes which side faces up.

What is the lexicographical order on sequences?

The following is an algorithm to determine the lexicographical order between different sequences $S$ and $T$.

Below, let $S_i$ denote the $i$-th element of $S$. Also, if $S$ is lexicographically smaller than $T$, we will denote that fact as $S \lt T$; if $S$ is lexicographically larger than $T$, we will denote that fact as $S \gt T$.

1. Let $L$ be the smaller of the lengths of $S$ and $T$. For each $i=1,2,\dots,L$, we check whether $S_i$ and $T_i$ are the same.
2. If there is an $i$ such that $S_i \neq T_i$, let $j$ be the smallest such $i$. Then, we compare $S_j$ and $T_j$. If $S_j$ is less than $T_j$ (as a number), we determine that $S \lt T$ and quit; if $S_j$ is greater than $T_j$, we determine that $S \gt T$ and quit.
3. If there is no $i$ such that $S_i \neq T_i$, we compare the lengths of $S$ and $T$. If $S$ is shorter than $T$, we determine that $S \lt T$ and quit; if $S$ is longer than $T$, we determine that $S \gt T$ and quit.

## Constraints

- $1 \leq N \leq 2\times 10^5$
- $1 \leq A_i, B_i \leq N$
- The given graph is a tree.
- $S$ is a string of length $N$ consisting of the characters `B` and `W`.

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $A_1$ $B_1$
> 
> $\vdots$
> 
> $A_{N-1}$ $B_{N-1}$
> 
> $S$

## Output

If the objective is unachievable, print `-1`. If it is achievable, print the answer in the following format:

> $P_1$ $P_2$ $\cdots$ $P_N$

```input1
4
1 2
2 3
3 4
WBWW
```

```output1
1 2 4 3
```

```input2
4
1 2
2 3
3 4
BBBB
```

```output2
-1
```

In this case, you cannot perform the operation at all.