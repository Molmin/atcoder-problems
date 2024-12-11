## Problem Statement

We have an undirected graph with $N$ vertices and $M$ edges. The vertices are numbered $1$ through $N$, and the edges are numbered $1$ through $M$. Edge $i$ connects vertices $a_i$ and $b_i$. The graph is connected.

On this graph, $Q$ pairs of brothers are participating in an activity called *Stamp Rally*. The Stamp Rally for the $i$-th pair will be as follows:

- One brother starts from vertex $x_i$, and the other starts from vertex $y_i$.
- The two explore the graph along the edges to visit $z_i$ vertices in total, including the starting vertices. Here, a vertex is counted only once, even if it is visited multiple times, or visited by both brothers.
- The score is defined as the largest index of the edges traversed by either of them. Their objective is to minimize this value.

Find the minimum possible score for each pair.

## Constraints

- $3 \leq N \leq 10^5$
- $N - 1 \leq M \leq 10^5$
- $1 \leq a_i&lt;b_i \leq N$
- The given graph is connected.
- $1 \leq Q \leq 10^5$
- $1 \leq x_j&lt;y_j \leq N$
- $3 \leq z_j \leq N$

## Input

The input is given from Standard Input in the following format:

> $N$ $M$
> 
> $a_1$ $b_1$
> 
> $a_2$ $b_2$
> 
> $:$
> 
> $a_M$ $b_M$
> 
> $Q$
> 
> $x_1$ $y_1$ $z_1$
> 
> $x_2$ $y_2$ $z_2$
> 
> $:$
> 
> $x_Q$ $y_Q$ $z_Q$

## Output

Print $Q$ lines. The $i$-th line should contain the minimum possible score for the $i$-th pair of brothers.

```input1
5 6
2 3
4 5
1 2
1 3
1 4
1 5
6
2 4 3
2 4 4
2 4 5
1 3 3
1 3 4
1 3 5
```

```output1
1
2
3
1
5
5
```