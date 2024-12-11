Score : $600$ points

## Problem Statement

We have a rooted tree with $N$ vertices numbered $1,2,\dots,N$.<br>
The tree is rooted at Vertex $1$, and the parent of Vertex $i \ge 2$ is Vertex $P_i(&lt;i)$.<br>
For each integer $k=1,2,\dots,N$, solve the following problem:

There are $2^{k-1}$ ways to choose some of the vertices numbered between $1$ and $k$ so that Vertex $1$ is chosen.<br>
How many of them satisfy the following condition: the subgraph induced by the set of chosen vertices forms a perfect binary tree (with $2^d-1$ vertices for a positive integer $d$) rooted at Vertex $1$?<br>
Since the count may be enormous, print the count modulo $998244353$.

What is an induced subgraph?

Let $S$ be a subset of the vertex set of a graph $G$.  The subgraph $H$ induced by this vertex set $S$ is constructed as follows:  

- Let the vertex set of $H$ equal $S$.
- Then, we add edges to $H$ as follows:
- -   - For all vertex pairs $(i, j)$ such that $i,j \in S, i &lt; j$, if there is an edge connecting $i$ and $j$ in $G$, then add an edge connecting $i$ and $j$ to $H$.

What is a perfect binary tree?

A perfect binary tree is a rooted tree that satisfies all of the following conditions:

- Every vertex that is not a leaf has exactly $2$ children.
- All leaves have the same distance from the root.

Here, we regard a graph with $1$ vertex and $0$ edges as a perfect binary tree, too.  

## Constraints

- All values in input are integers.
- $1 \le N \le 3 \times 10^5$
- $1 \le P_i &lt; i$

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $P_2$ $P_3$ $\dots$ $P_N$

## Output

Print $N$ lines.
The $i$-th ($1 \le i \le N$) line should contain the answer as an integer when $k=i$.

```input1
10
1 1 2 1 2 5 5 5 1
```

```output1
1
1
2
2
4
4
4
5
7
10
```

The following ways of choosing vertices should be counted:

- $\{1\}$ when $k \ge 1$
- $\{1,2,3\}$ when $k \ge 3$
- $\{1,2,5\},\{1,3,5\}$ when $k \ge 5$
- $\{1,2,4,5,6,7,8\}$ when $k \ge 8$
- $\{1,2,4,5,6,7,9\},\{1,2,4,5,6,8,9\}$ when $k \ge 9$
- $\{1,2,10\},\{1,3,10\},\{1,5,10\}$ when $k = 10$

```input2
1
```

```output2
1
```

If $N=1$, the $2$-nd line of the Input is empty.

```input3
10
1 2 3 4 5 6 7 8 9
```

```output3
1
1
1
1
1
1
1
1
1
1
```

```input4
13
1 1 1 2 2 2 3 3 3 4 4 4
```

```output4
1
1
2
4
4
4
4
4
7
13
13
19
31
```