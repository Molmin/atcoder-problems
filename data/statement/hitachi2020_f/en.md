Score : $1100$ points

## Problem Statement

We have a tree $G$ with $N$ vertices numbered $1$ to $N$.
The $i$-th edge of $G$ connects Vertex $a_i$ and Vertex $b_i$.

Consider adding zero or more edges in $G$, and let $H$ be the graph resulted.

Find the number of graphs $H$ that satisfy the following conditions, modulo $998244353$.

- $H$ does not contain self-loops or multiple edges.
- The diameters of $G$ and $H$ are equal.
- For every pair of vertices in $H$ that is not directly connected by an edge, the addition of an edge directly connecting them would reduce the diameter of the graph.

## Constraints

- $3 \le N \le 2 \times 10^5$
- $1 \le a_i, b_i \le N$
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

Print the answer.

```input1
6
1 6
2 1
5 2
3 4
2 3
```

```output1
3
```

For example, adding the edges $(1, 5), (3, 5)$ in $G$ satisfies the conditions.

```input2
3
1 2
2 3
```

```output2
1
```

The only graph $H$ that satisfies the conditions is $G$.

```input3
9
1 2
2 3
4 2
1 7
6 1
2 5
5 9
6 8
```

```output3
27
```

```input4
19
2 4
15 8
1 16
1 3
12 19
1 18
7 11
11 15
12 9
1 6
7 14
18 2
13 12
13 5
16 13
7 1
11 10
7 17
```

```output4
78732
```