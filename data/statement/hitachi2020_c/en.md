Score : $600$ points

## Problem Statement

We have a tree with $N$ vertices. The vertices are numbered $1$ to $N$, and the $i$-th edge connects Vertex $a_i$ and Vertex $b_i$.

Takahashi loves the number $3$. He is seeking a permutation $p_1, p_2, \ldots , p_N$ of integers from $1$ to $N$ satisfying the following condition:

- For every pair of vertices $(i, j)$, if the distance between Vertex $i$ and Vertex $j$ is $3$, the sum or product of $p_i$ and $p_j$ is a multiple of $3$.

Here the distance between Vertex $i$ and Vertex $j$ is the number of edges contained in the shortest path from Vertex $i$ to Vertex $j$.

Help Takahashi by finding a permutation that satisfies the condition.

## Constraints

- $2\leq N\leq 2\times 10^5$
- $1\leq a_i, b_i \leq N$
- The given graph is a tree.

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $a_1$ $b_1$
> 
> $a_2$ $b_2$
> 
> $\vdots$
> 
> $a_{N-1}$ $b_{N-1}$

## Output

If no permutation satisfies the condition, print `-1`.

Otherwise, print a permutation satisfying the condition, with space in between.
If there are multiple solutions, you can print any of them.

```input1
5
1 2
1 3
3 4
3 5
```

```output1
1 2 5 4 3
```

The distance between two vertices is $3$ for the two pairs $(2, 4)$ and $(2, 5)$.

- $p_2 + p_4 = 6$
- $p_2\times p_5 = 6$

Thus, this permutation satisfies the condition.