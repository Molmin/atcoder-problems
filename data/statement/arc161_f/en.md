Score : $900$ points

## Problem Statement

We define the **density** of a non-empty simple undirected graph as $\displaystyle\frac{(\text{number\ of\ edges})}{(\text{number\ of\ vertices})}$.

You are given positive integers $N$, $D$, and a simple undirected graph $G$ with $N$ vertices and $DN$ edges.
The vertices of $G$ are numbered from $1$ to $N$, and the $i$-th edge connects vertex $A_i$ and vertex $B_i$.
Determine whether $G$ satisfies the following condition.

**Condition:** Let $V$ be the vertex set of $G$.
For any non-empty **proper** subset $X$ of $V$, the density of the induced subgraph of $G$ by $X$ is **strictly less than** $D$.

There are $T$ test cases to solve.

What is an induced subgraph?

For a vertex subset $X$ of graph $G$, the **induced subgraph** of $G$ by $X$ is the graph with vertex set $X$ and edge set containing all edges of $G$ that connect two vertices in $X$.
In the above condition, note that we only consider vertex subsets that are neither empty nor the entire set.

## Constraints

- $T \geq 1$
- $N \geq 1$
- $D \geq 1$
- The sum of $DN$ over the test cases in each input file is at most $5 \times 10^4$.
- $1 \leq A_i &lt; B_i \leq N \ \ (1 \leq i \leq DN)$
- $(A_i, B_i) \neq (A_j, B_j) \ \ (1 \leq i &lt; j \leq DN)$

## Input

The input is given from Standard Input in the following format:

> $T$
> 
> $\mathrm{case}_1$
> 
> $\mathrm{case}_2$
> 
> $\vdots$
> 
> $\mathrm{case}_T$

Each test case $\mathrm{case}_i \ (1 \leq i \leq T)$ is in the following format:

> $N$ $D$
> 
> $A_1$ $B_1$
> 
> $A_2$ $B_2$
> 
> $\vdots$
> 
> $A_{DN}$ $B_{DN}$

## Output

Print $T$ lines.
The $i$-th line should contain `Yes` if the given graph $G$ for the $i$-th test case satisfies the condition, and `No` otherwise.

```input1
2
3 1
1 2
1 3
2 3
4 1
1 2
1 3
2 3
3 4
```

```output1
Yes
No
```

- The first test case is the same as Sample Input 1 in [Problem D](https://atcoder.jp/contests/arc161/tasks/arc161_d), and it satisfies the condition.
- For the second test case, the edge set of the induced subgraph by the non-empty proper subset $\{1, 2, 3\}$ of the vertex set $\{1, 2, 3, 4\}$ is $\{(1, 2), (1, 3), (2, 3)\}$, and its density is $\displaystyle\frac{3}{3} = 1 = D$.
Therefore, this graph does not satisfy the condition.