Score : $700$ points

## Problem Statement

There is a sequence of $N$ terms, and $Q$ queries will be given on this sequence. The $i$-th query is for the interval $[L_i, R_i]$ (the interval $[a,b]$ is a set of integers between $a$ and $b$, inclusive).

You will answer this problem using a binary tree that satisfies the following conditions. Here, $i,j,k$ represent integers.

- Each node has an interval.
- The root node has the interval $[1, N]$.
- The node with the interval $[i, i]$ is a leaf. Also, the interval of a leaf can be represented as $[i,i]$.
- Each non-leaf node has exactly two children. Also, if the interval of a non-leaf node is $[i,j]$, the intervals of the children of this node are $[i,k]$ and $[k+1,j]$ ($i\leq k&lt;j$).

In this binary tree, when a query for the interval $[L,R]$ is given, a search is performed recursively according to the following rules.

1. Initially, the root is investigated.
2. When a node is investigated, if the interval of this node is included in $[L, R]$, its descendants are not investigated.
3. When a node is investigated, if the interval of this node have no intersection with $[L,R]$, its descendants are not investigated.
4. When a node is investigated, if neither 2. nor 3. applies, the two child nodes are investigated. (It can be shown that either 2. or 3. always applies to a leaf node.)

When answering $Q$ queries, let $d$ be the maximum depth (distance from the root) of the investigated nodes, and $c$ be the total number of times nodes of depth $d$ are investigated. Here, if multiple nodes of depth $d$ are investigated in a single query, or if the same node is investigated in multiple queries, all those investigations count separately.

You want to design the binary tree to minimize $d$, and then to minimize $c$ while minimizing $d$. What are the values of $d$ and $c$ then?

## Constraints

- $2\leq N \leq 4000$
- $1\leq Q \leq 10^5$
- $1\leq L_i \leq R_i \leq N$ $(1\leq i \leq Q)$
- All input values are integers.

## Input

The input is given from Standard Input in the following format:

> $N$ $Q$
> 
> $L_1$ $R_1$
> 
> $L_2$ $R_2$
> 
> $\vdots$
> 
> $L_Q$ $R_Q$

## Output

Print the integers $d$ and $c$ in question, in this order, separated by a space.

```input1
6 4
2 3
3 4
2 4
3 3
```

```output1
3 4
```

We have an interval $[1,6]$, and queries for the intervals $[2,3],[3,4],[2,4],[3,3]$. Here, if you use the binary tree shown in the figure below,

- for the first query, nodes $1,2,3,4,5$ are investigated, and the maximum depth among these is $2$ for nodes $4,5$;
- for the second query, nodes $1,2,3,4,5,6,7,8,9$ are investigated, and the maximum depth among these is $3$ for nodes $8,9$;
- for the third query, nodes $1,2,3,4,5,6,7$ are investigated, and the maximum depth among these is $2$ for nodes $4,5,6,7$;
- for the fourth query, nodes $1,2,3,4,5,8,9$ are investigated, and the maximum depth among these is $3$ for nodes $8,9$.

Therefore, in this case, $d=3$, and nodes of depth $3$ were investigated four times ー nodes $8,9$ in the second query and nodes $8,9$ in the fourth query ー so $c=4$. In fact, this is an optimal method.

(In the figure, the upper row shows the node number, and the lower row shows the interval of each node.)

![](https://img.atcoder.jp/arc164/c5776dc7ace92d9830788319820bed2d.png)

```input2
12 6
1 10
2 7
3 6
4 9
5 8
11 12
```

```output2
4 4
```