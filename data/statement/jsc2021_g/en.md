Score : $600$ points

## Problem Statement

We have a graph with $N$ vertices numbered $1, 2, \dots, N$. Initially, it has no edges.<br>
Now, let us add some number of undirected edges to $G$ so that the following condition holds for any $i, j\,(i \neq j)$ after addition.

- If $A_{i, j} = 1$, there is an edge directly connecting Vertex $i$ and Vertex $j$;
- if $A_{i, j} = 0$, there is no edge directly connecting Vertex $i$ and Vertex $j$;
- if $A_{i, j} = -1$, either is fine.

Among the graphs that can be $G$ after addition, how many are trees?<br>
Since the count can be enormous, find it modulo $(10^9 + 7)$.

## Constraints

- All values in input are integers.
- $2 \leq N \leq 300$
- $-1 \leq A_{i, j} = A_{j, i} \leq 1$
- $A_{i, i} = 0$

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $A_{1, 1}$ $\cdots$ $A_{1, N}$
> 
> $\vdots$
> 
> $A_{N, 1}$ $\cdots$ $A_{N, N}$

## Ouput

Print the count modulo $(10^9 + 7)$.

```input1
4
0 1 -1 0
1 0 -1 -1
-1 -1 0 0
0 -1 0 0
```

```output1
2
```

We need an edge between Vertex $1$ and Vertex $2$, and we must not add an edge between Vertex $1$ and Vertex $4$ or between Vertex $3$ and Vertex $4$.

Thus, we have the following two valid graphs:

![](https://img.atcoder.jp/ghi/0f55bf9e7a13aef4bddde12f87a23d5d.png)

```input2
3
0 1 1
1 0 1
1 1 0
```

```output2
0
```

```input3
3
0 0 0
0 0 0
0 0 0
```

```output3
0
```

```input4
11
0 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1
-1 0 -1 -1 -1 -1 -1 -1 -1 -1 -1
-1 -1 0 -1 -1 -1 -1 -1 -1 -1 -1
-1 -1 -1 0 -1 -1 -1 -1 -1 -1 -1
-1 -1 -1 -1 0 -1 -1 -1 -1 -1 -1
-1 -1 -1 -1 -1 0 -1 -1 -1 -1 -1
-1 -1 -1 -1 -1 -1 0 -1 -1 -1 -1
-1 -1 -1 -1 -1 -1 -1 0 -1 -1 -1
-1 -1 -1 -1 -1 -1 -1 -1 0 -1 -1
-1 -1 -1 -1 -1 -1 -1 -1 -1 0 -1
-1 -1 -1 -1 -1 -1 -1 -1 -1 -1 0
```

```output4
357947677
```

When we distinguish the vertices, there are $11^9$ trees with $11$ vertices.