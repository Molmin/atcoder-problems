Score : $900$ points

## Problem Statement

Takahashi has an ability to generate a tree using a permutation $(p_1,p_2,...,p_n)$ of $(1,2,...,n)$, in the following process:

First, prepare Vertex $1$, Vertex $2$, ..., Vertex $N$.
For each $i=1,2,...,n$, perform the following operation:

- If $p_i = 1$, do nothing.
- If $p_i \neq 1$, let $j'$ be the largest $j$ such that $p_j &lt; p_i$. Span an edge between Vertex $i$ and Vertex $j'$.

Takahashi is trying to make his favorite tree with this ability.
His favorite tree has $n$ vertices from Vertex $1$ through Vertex $n$, and its $i$-th edge connects Vertex $v_i$ and $w_i$.
Determine if he can make a tree isomorphic to his favorite tree by using a proper permutation.
If he can do so, find the lexicographically smallest such permutation.

## Notes

For the definition of isomorphism of trees, see [wikipedia](https://en.wikipedia.org/wiki/Graph_isomorphism). Intuitively, two trees are isomorphic when they are the "same" if we disregard the indices of their vertices.

## Constraints

- $2 \leq n \leq 10^5$
- $1 \leq v_i, w_i \leq n$
- The given graph is a tree.

## Input

Input is given from Standard Input in the following format:

> $n$
> 
> $v_1$ $w_1$
> 
> $v_2$ $w_2$
> 
> $:$
> 
> $v_{n-1}$ $w_{n-1}$

## Output

If there is no permutation that can generate a tree isomorphic to Takahashi's favorite tree, print `-1`.
If it exists, print the lexicographically smallest such permutation, with spaces in between.

```input1
6
1 2
1 3
1 4
1 5
5 6
```

```output1
1 2 4 5 3 6
```

If the permutation $(1, 2, 4, 5, 3, 6)$ is used to generate a tree, it looks as follows:

![](https://img.atcoder.jp/arc095/db000b879402aed649a1516620eb1e21.png)

This is isomorphic to the given graph.

```input2
6
1 2
2 3
3 4
1 5
5 6
```

```output2
1 2 3 4 5 6
```

```input3
15
1 2
1 3
2 4
2 5
3 6
3 7
4 8
4 9
5 10
5 11
6 12
6 13
7 14
7 15
```

```output3
-1
```