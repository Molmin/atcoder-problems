Score : $800$ points

## Problem Statement

We have a tree with $N$ vertices. The vertices are numbered $1, 2, ..., N$. The $i$-th ($1 \leq i \leq N - 1$) edge connects the two vertices $A_i$ and $B_i$.

Takahashi wrote integers into $K$ of the vertices. Specifically, for each $1 \leq j \leq K$, he wrote the integer $P_j$ into vertex $V_j$. The remaining vertices are left empty. After that, he got tired and fell asleep.

Then, Aoki appeared. He is trying to surprise Takahashi by writing integers into all empty vertices so that the following condition is satisfied:

- Condition: For any two vertices directly connected by an edge, the integers written into these vertices differ by exactly $1$.

Determine if it is possible to write integers into all empty vertices so that the condition is satisfied. If the answer is positive, find one specific way to satisfy the condition.

## Constraints

- $1 \leq N \leq 10^5$
- $1 \leq K \leq N$
- $1 \leq A_i, B_i \leq N$ ($1 \leq i \leq N - 1$)
- $1 \leq V_j \leq N$ ($1 \leq j \leq K$) (21:18, a mistake in this constraint was corrected)
- $0 \leq P_j \leq 10^5$ ($1 \leq j \leq K$)
- The given graph is a tree.
- All $v_j$ are distinct.

## Input

The input is given from Standard Input in the following format:

> $N$
> 
> $A_1$ $B_1$
> 
> $A_2$ $B_2$
> 
> $:$
> 
> $A_{N-1}$ $B_{N-1}$
> 
> $K$
> 
> $V_1$ $P_1$
> 
> $V_2$ $P_2$
> 
> $:$
> 
> $V_K$ $P_K$

## Output

If it is possible to write integers into all empty vertices so that the condition is satisfied, print `Yes`. Otherwise, print `No`.

If it is possible to satisfy the condition, print $N$ lines in addition. The $v$-th ($1 \leq v \leq N$) of these $N$ lines should contain the integer that should be written into vertex $v$. If there are multiple ways to satisfy the condition, any of those is accepted.

```input1
5
1 2
3 1
4 3
3 5
2
2 6
5 7
```

```output1
Yes
5
6
6
5
7
```

The figure below shows the tree when Takahashi fell asleep. For each vertex, the integer written beside it represents the index of the vertex, and the integer written into the vertex is the integer written by Takahashi.

![6da26f89839711a520acdf5c3e1cc309.png](https://atcoder.jp/img/arc063/6da26f89839711a520acdf5c3e1cc309.png)

Aoki can, for example, satisfy the condition by writing integers into the remaining vertices as follows:

![1858d5af5a2c0e51aca39a39d765debb.png](https://atcoder.jp/img/arc063/1858d5af5a2c0e51aca39a39d765debb.png)

This corresponds to Sample Output 1. Note that other outputs that satisfy the condition will also be accepted, such as:

```output1
Yes
7
6
8
7
7
```

```input2
5
1 2
3 1
4 3
3 5
3
2 6
4 3
5 7
```

```output2
No
```

```input3
4
1 2
2 3
3 4
1
1 0
```

```output3
Yes
0
-1
-2
-3
```

The integers written by Aoki may be negative or exceed $10^6$.