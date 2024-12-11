Score : $200$ points

## Problem Statement

You are given a tree with $N$ vertices and $N-1$ edges.<br>
The vertices are numbered $1,2,\ldots,N$. The $i$-th edge connects Vertex $a_i$ and Vertex $b_i$.

Determine whether this tree is a star.

Here, a star is a tree where there is a vertex directly connected to all other vertices.

## Notes

For the definition of a tree, see [Tree (graph theory) - Wikipedia](https://en.wikipedia.org/wiki/Tree_(graph_theory)).

## Constraints

- $3 \leq N \leq 10^5$
- $1 \leq a_i \lt b_i \leq N$
- The given graph is a tree.

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

If the given graph is a star, print `Yes`; otherwise, print `No`.

```input1
5
1 4
2 4
3 4
4 5
```

```output1
Yes
```

The given graph is a star.

```input2
4
2 4
1 4
2 3
```

```output2
No
```

The given graph is not a star.

```input3
10
9 10
3 10
4 10
8 10
1 10
2 10
7 10
6 10
5 10
```

```output3
Yes
```