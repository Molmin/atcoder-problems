Score : $400$ points

## Problem Statement

You are given an undirected graph with $N$ vertices numbered $1$ to $N$ and $M$ edges numbered $1$ to $M$. Edge $i$ connects vertex $u_i$ and vertex $v_i$.

Determine whether every connected component in this graph satisfies the following condition.

- The connected component has the same number of vertices and edges.

## Notes

An **undirected graph** is a graph with edges without direction.<br>
A **subgraph** of a graph is a graph formed from a subset of vertices and edges of that graph.<br>
A graph is **connected** when one can travel between every pair of vertices in the graph via edges.<br>
A **connected component** is a connected subgraph that is not part of any larger connected subgraph.

## Constraints

- $1 \leq N \leq 2 \times 10^5$
- $0 \leq M \leq 2 \times 10^5$
- $1 \leq u_i \leq v_i \leq N$
- All values in the input are integers.

## Input

The input is given from Standard Input in the following format:

> $N$ $M$
> 
> $u_1$ $v_1$
> 
> $\vdots$
> 
> $u_M$ $v_M$

## Output

If every connected component satisfies the condition, print `Yes`; otherwise, print `No`.

```input1
3 3
2 3
1 1
2 3
```

```output1
Yes
```

The graph has a connected component formed from just vertex $1$, and another formed from vertices $2$ and $3$.<br>
The former has one edge (edge $2$), and the latter has two edges (edges $1$ and $3$), satisfying the condition.

```input2
5 5
1 2
2 3
3 4
3 5
1 5
```

```output2
Yes
```

```input3
13 16
7 9
7 11
3 8
1 13
11 11
6 11
8 13
2 11
3 3
8 12
9 11
1 11
5 13
3 12
6 9
1 10
```

```output3
No
```