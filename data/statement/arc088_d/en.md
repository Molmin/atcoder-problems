Score : $900$ points

## Problem Statement

Takahashi has decided to make a *Christmas Tree* for the Christmas party in AtCoder, Inc.

A Christmas Tree is a tree with $N$ vertices numbered $1$ through $N$ and $N-1$ edges, whose $i$-th edge $(1\leq i\leq N-1)$ connects Vertex $a_i$ and $b_i$.

He would like to make one as follows:

- Specify two non-negative integers $A$ and $B$.
- Prepare $A$ *Christmas Paths* whose lengths are at most $B$. Here, a Christmas Path of length $X$ is a graph with $X+1$ vertices and $X$ edges such that, if we properly number the vertices $1$ through $X+1$, the $i$-th edge $(1\leq i\leq X)$ will connect Vertex $i$ and $i+1$.
- Repeat the following operation until he has one connected tree:-   - Select two vertices $x$ and $y$ that belong to different connected components. Combine $x$ and $y$ into one vertex. More precisely, for each edge $(p,y)$ incident to the vertex $y$, add the edge $(p,x)$. Then, delete the vertex $y$ and all the edges incident to $y$.
- Properly number the vertices in the tree.

Takahashi would like to find the lexicographically smallest pair $(A,B)$ such that he can make a Christmas Tree, that is, find the smallest $A$, and find the smallest $B$ under the condition that $A$ is minimized.

Solve this problem for him.

## Constraints

- $2 \leq N \leq 10^5$
- $1 \leq a_i,b_i \leq N$
- The given graph is a tree.

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $a_1$ $b_1$
> 
> :
> 
> $a_{N-1}$ $b_{N-1}$

## Output

For the lexicographically smallest $(A,B)$, print $A$ and $B$ with a space in between.

```input1
7
1 2
2 3
2 4
4 5
4 6
6 7
```

```output1
3 2
```

We can make a Christmas Tree as shown in the figure below:

![](https://img.atcoder.jp/arc088/96f78221624d6a13628f6052f5db697d.png)

```input2
8
1 2
2 3
3 4
4 5
5 6
5 7
5 8
```

```output2
2 5
```

```input3
10
1 2
2 3
3 4
2 5
6 5
6 7
7 8
5 9
10 5
```

```output3
3 4
```