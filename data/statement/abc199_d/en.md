Score : $400$ points

## Problem Statement

We have a simple undirected graph with $N$ vertices and $M$ edges. The vertices are numbered $1$ through $N$, and the edges are numbered $1$ through $M$.<br>
Edge $i$ connects Vertex $A_i$ and Vertex $B_i$.<br>
Find the number of ways to paint each vertex in this graph red, green, or blue so that the following condition is satisfied:

- two vertices directly connected by an edge are always painted in different colors.

Here, it is not mandatory to use all the colors.

## Constraints

- $1 \le N \le 20$
- $0 \le M \le \frac{N(N - 1)}{2}$
- $1 \le A_i \le N$
- $1 \le B_i \le N$
- The given graph is simple (that is, has no multi-edges and no self-loops).

## Input

Input is given from Standard Input in the following format:

> $N$ $M$
> 
> $A_1$ $B_1$
> 
> $A_2$ $B_2$
> 
> $A_3$ $B_3$
> 
> $\hspace{15pt} \vdots$
> 
> $A_M$ $B_M$

## Output

Print the answer.

```input1
3 3
1 2
2 3
3 1
```

```output1
6
```

Let $c_1, c_2, c_3$ be the colors of Vertices $1, 2, 3$ and `R`, `G`, `B` denote red, green, blue, respectively. There are six ways to satisfy the condition:

- $c_1c_2c_3 =$ `RGB`
- $c_1c_2c_3 =$ `RBG`
- $c_1c_2c_3 =$ `GRB`
- $c_1c_2c_3 =$ `GBR`
- $c_1c_2c_3 =$ `BRG`
- $c_1c_2c_3 =$ `BGR`

```input2
3 0
```

```output2
27
```

Since the graph has no edge, we can freely choose the colors of the vertices.

```input3
4 6
1 2
2 3
3 4
2 4
1 3
1 4
```

```output3
0
```

There may be no way to satisfy the condition.

```input4
20 0
```

```output4
3486784401
```

The answer may not fit into the $32$-bit signed integer type.