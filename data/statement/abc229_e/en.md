Score : $500$ points

## Problem Statement

Given is an undirected graph with $N$ vertices and $M$ edges.<br>
Edge $i$ connects Vertices $A_i$ and $B_i$.

We will erase Vertices $1, 2, \ldots, N$ one by one.<br>
Here, erasing Vertex $i$ means deleting Vertex $i$ and all edges incident to Vertex $i$ from the graph.

For each $i=1, 2, \ldots, N$, how many connected components does the graph have when vertices up to Vertex $i$ are deleted?

## Constraints

- $1 \leq N \leq 2 \times 10^5$
- $0 \leq M \leq \min(\frac{N(N-1)}{2} , 2 \times 10^5 )$
- $1 \leq A_i \lt B_i \leq N$
- $(A_i,B_i) \neq (A_j,B_j)$ if $i \neq j$.
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$ $M$
> 
> $A_1$ $B_1$
> 
> $A_2$ $B_2$
> 
> $\vdots$
> 
> $A_M$ $B_M$

## Output

Print $N$ lines.<br>
The $i$-th line should contain the number of connected components in the graph when vertices up to Vertex $i$ are deleted.

```input1
6 7
1 2
1 4
1 5
2 4
2 3
3 5
3 6
```

```output1
1
2
3
2
1
0
```

![](https://img.atcoder.jp/ghi/3320212a9093132a80105bf02feeb195.png)<br>
The figure above shows the transition of the graph.

```input2
8 7
7 8
3 4
5 6
5 7
5 8
6 7
6 8
```

```output2
3
2
2
1
1
1
1
0
```

The graph may be disconnected from the beginning.