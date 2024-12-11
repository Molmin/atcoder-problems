Score : $400$ points

## Problem Statement

There is a simple directed graph with $N$ vertices numbered from $1$ to $N$ and $M$ edges. The $i$-th edge $(1 \leq i \leq M)$ is a directed edge from vertex $a_i$ to vertex $b_i$.<br>
Determine whether there exists a cycle that contains vertex $1$, and if it exists, find the minimum number of edges among such cycles.

## Constraints

- $2 \leq N \leq 2 \times 10^5$
- $1 \leq M \leq \min \left( \frac{N(N-1)}{2},\ 2 \times 10^5 \right)$
- $1 \leq a_i \leq N$
- $1 \leq b_i \leq N$
- $a_i \neq b_i$
- $(a_i, b_i) \neq (a_j, b_j)$ and $(a_i, b_i) \neq (b_j, a_j)$, if $i \neq j$.
- All input values are integers.

## Input

The input is given from Standard Input in the following format:

> $N$ $M$
> 
> $a_1$ $b_1$
> 
> $a_2$ $b_2$
> 
> $\vdots$
> 
> $a_M$ $b_M$

## Output

If there exists a cycle that contains vertex $1$, print the minimum number of edges among such cycles. Otherwise, print `-1`.

```input1
3 3
1 2
2 3
3 1
```

```output1
3
```

Vertex $1$ $\to$ vertex $2$ $\to$ vertex $3$ $\to$ vertex $1$ is a cycle with three edges, and this is the only cycle that contains vertex $1$.

```input2
3 2
1 2
2 3
```

```output2
-1
```

```input3
6 9
6 1
1 5
2 6
2 1
3 6
4 2
6 4
3 5
5 4
```

```output3
4
```