Score : $600$ points

## Problem Statement

You are given a connected undirected graph $G$ with $N$ vertices and $M$ edges. For each $i=1,2,\ldots,M$, the $i$-th edge connects vertices $a_i$ and $b_i$, and is colored red if $c_i=$ `R` and blue if $c_i=$ `B`.

Determine if there is a spanning tree of $G$ that satisfies the following condition, and if so, display such a tree.

- For every $i=1,2,\ldots,N$,-   - if $s_i =$ `R`, at least one red edge has vertex $i$ as its endpoint;
-   - if $s_i =$ `B`, at least one blue edge has vertex $i$ as its endpoint.

## Constraints

- $2 \leq N \leq 2 \times 10^5$
- $N-1 \leq M \leq 2 \times 10^5$
- $1 \leq a_i \lt b_i \leq N$
- $c_i$ is `R` or `B`.
- $(a_i,b_i,c_i) \neq (a_j,b_j,c_j)$ if $i \neq j$.
- The given graph is connected.
- $s_i$ is `R` or `B`.
- $N,M,a_i,b_i$ are integers.

## Input

The input is given from Standard Input in the following format:

> $N$ $M$
> 
> $a_1$ $b_1$ $c_1$
> 
> $\vdots$
> 
> $a_M$ $b_M$ $c_M$
> 
> $s_1 s_2 \ldots s_N$

## Output

If no spanning tree of $G$ satisfies the condition, print `No`.

> No

Otherwise, print such a tree in the following format:

> Yes
> 
> $t_1$ $t_2$ $\ldots$ $t_{N-1}$

This means that the $i$-th edge of the spanning tree is the $t_i$-th edge of $G$.<br>
If multiple spanning trees of $G$ satisfy the condition, any one of them is accepted.

```input1
3 3
1 2 R
1 3 B
2 3 B
RRB
```

```output1
Yes
2 1
```

Here we show that the spanning tree formed by the first and second edges of $G$ satisfies the condition.

- $s_1 =$ `R`, so for $i=1$, at least one red edge must have vertex $1$ as its endpoint. The first edge of $G$ is such an edge.
- $s_2 =$ `R`, so for $i=2$, at least one red edge must have vertex $2$ as its endpoint. The first edge of $G$ is such an edge.
- $s_3 =$ `B`, so for $i=3$, at least one blue edge must have vertex $3$ as its endpoint. The second edge of $G$ is such an edge.

```input2
3 4
1 2 R
1 2 B
1 3 B
2 3 B
RRR
```

```output2
No
```

```input3
8 16
5 7 B
2 7 R
1 6 R
1 4 R
6 7 R
4 6 B
4 8 R
2 3 R
3 5 R
6 7 B
2 6 B
5 6 R
1 3 B
4 5 B
2 7 B
1 8 B
BRBRRBRB
```

```output3
Yes
1 2 4 9 11 13 16
```

```input4
8 10
1 7 R
1 3 B
2 5 B
2 8 R
1 5 R
3 6 R
2 6 B
3 4 B
2 8 B
4 6 B
RRRBBBRB
```

```output4
No
```