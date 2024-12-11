Score : $1000$ points

## Problem Statement

An undirected graph with numbered vertices is called a **good graph** if it has a spanning tree $T$ that satisfies the following condition. Here, an edge connecting two vertices $u$ and $v$ $(u &lt; v)$ is denoted as edge $(u,v)$.

- For every edge $(u,v)$ $(u &lt; v)$ in the graph, the minimum and maximum vertex numbers on the unique simple path connecting vertices $u$ and $v$ in $T$ are $u$ and $v$, respectively.

You are given a simple connected undirected graph $G$ with $N$ vertices numbered from $1$ to $N$. The graph $G$ has $M$ edges, and the $i$-th edge connects vertices $A_i$ and $B_i$ $(A_i &lt; B_i)$.

For each $i=1,2,\dots,M$, determine whether the graph obtained by removing the $i$-th edge from $G$ is a **good graph**.

## Constraints

- $2 \leq N \leq 2 \times 10^5$
- $N-1 \leq M \leq 2 \times 10^5$
- $1 \leq A_i &lt; B_i \leq N$
- All input values are integers.
- The given graph is a simple connected undirected graph.

## Input

The input is given from Standard Input in the following format:

> $N$ $M$
> 
> $A_1$ $B_1$
> 
> $\vdots$
> 
> $A_M$ $B_M$

## Output

Print $M$ lines. The $i$-th line should contain `Yes` if the graph obtained by removing the $i$-th edge from $G$ is a **good graph**, and `No` otherwise.

```input1
6 9
1 3
1 5
2 5
2 6
3 4
3 5
3 6
4 6
5 6
```

```output1
No
No
No
No
Yes
No
No
Yes
Yes
```

Consider the case where edge $(4,6)$ is removed. A spanning tree formed by edges $(1,3),(2,5),(3,4),(3,5),(5,6)$ satisfies the condition. For example, for edge $(3,6)$, the simple path connecting vertices $3$ and $6$ traverses vertices $3,5,6$ in this order, and the minimum and maximum vertex numbers on the path are $3$ and $6$, respectively, thus satisfying the condition. By verifying the other edges similarly, it can be seen that this spanning tree satisfies the condition, so the answer is `Yes`.

On the other hand, consider the case where edge $(1,5)$ is removed. The same spanning tree does not satisfy the condition. For edge $(4,6)$, the simple path connecting vertices $4$ and $6$ traverses vertices $4,3,5,6$ in this order, and the minimum and maximum vertex numbers on the path are $3$ and $6$, respectively, thus not satisfying the condition. It can also be shown that no other spanning tree satisfies the condition, so the answer is `No`.

```input2
5 4
1 2
2 3
3 4
4 5
```

```output2
No
No
No
No
```

Removing an edge may disconnect the graph.

```input3
15 20
12 13
7 8
5 7
8 10
9 12
4 5
11 12
2 4
6 8
4 14
1 2
14 15
2 9
3 8
2 15
10 11
13 14
8 9
7 14
5 13
```

```output3
No
No
No
Yes
Yes
No
Yes
No
No
No
No
No
No
No
No
Yes
No
No
No
No
```