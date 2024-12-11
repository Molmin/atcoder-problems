Score : $500$ points

## Problem Statement

There is a rooted tree (see Notes) with $N$ vertices numbered $1$ to $N$.
Each of the vertices, except the root, has a directed edge coming from its parent.
Note that the root may not be Vertex $1$.

Takahashi has added $M$ new directed edges to this graph.
Each of these $M$ edges, $u \rightarrow v$, extends from some vertex $u$ to its descendant $v$.

You are given the directed graph with $N$ vertices and $N-1+M$ edges after Takahashi added edges.
More specifically, you are given $N-1+M$ pairs of integers, $(A_1, B_1), ..., (A_{N-1+M}, B_{N-1+M})$, which represent that the $i$-th edge extends from Vertex $A_i$ to Vertex $B_i$.

Restore the original rooted tree.

## Notes

For "tree" and other related terms in graph theory, see [the article in Wikipedia](https://ja.wikipedia.org/wiki/%E6%9C%A8_(%E6%95%B0%E5%AD%A6)), for example.

## Constraints

- $3 \leq N$
- $1 \leq M$
- $N + M \leq 10^5$
- $1 \leq A_i, B_i \leq N$
- $A_i \neq B_i$
- If $i \neq j$, $(A_i, B_i) \neq (A_j, B_j)$.
- The graph in input can be obtained by adding $M$ edges satisfying the condition in the problem statement to a rooted tree with $N$ vertices.

## Input

Input is given from Standard Input in the following format:

> $N$ $M$
> 
> $A_1$ $B_1$
> 
> $:$
> 
> $A_{N-1+M}$ $B_{N-1+M}$

## Output

Print $N$ lines.
In the $i$-th line, print `0` if Vertex $i$ is the root of the original tree, and otherwise print the integer representing the parent of Vertex $i$ in the original tree.

Note that it can be shown that the original tree is uniquely determined.

```input1
3 1
1 2
1 3
2 3
```

```output1
0
1
2
```

The graph in this input is shown below:

![](https://img.atcoder.jp/nikkei2019-qual/ee05880ceecf703f656dd50bf22c573f.png)

It can be seen that this graph is obtained by adding the edge $1 \rightarrow 3$ to the rooted tree $1 \rightarrow 2 \rightarrow 3$.

```input2
6 3
2 1
2 3
4 1
4 2
6 1
2 6
4 6
6 5
```

```output2
6
4
2
0
6
2
```