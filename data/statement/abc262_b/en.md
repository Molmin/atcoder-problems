Score : $200$ points

## Problem Statement

You are given a simple undirected graph with $N$ vertices and $M$ edges.  The vertices are numbered $1, \dots, N$, and the $i$-th $(1 \leq i \leq M)$ edge connects Vertex $U_i$ and Vertex $V_i$.

Find the number of tuples of integers $a, b, c$ that satisfy all of the following conditions:

- $1 \leq a \lt b \lt c \leq N$
- There is an edge connecting Vertex $a$ and Vertex $b$.
- There is an edge connecting Vertex $b$ and Vertex $c$.
- There is an edge connecting Vertex $c$ and Vertex $a$.

## Constraints

- $3 \leq N \leq 100$
- $1 \leq M \leq \frac{N(N - 1)}{2}$
- $1 \leq U_i \lt V_i \leq N \, (1 \leq i \leq M)$
- $(U_i, V_i) \neq (U_j, V_j) \, (i \neq j)$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$ $M$
> 
> $U_1$ $V_1$
> 
> $\vdots$
> 
> $U_M$ $V_M$

## Output

Print the answer.

```input1
5 6
1 5
4 5
2 3
1 4
3 5
2 5
```

```output1
2
```

$(a, b, c) = (1, 4, 5), (2, 3, 5)$ satisfy the conditions.

```input2
3 1
1 2
```

```output2
0
```

```input3
7 10
1 7
5 7
2 5
3 6
4 7
1 5
2 4
1 3
1 6
2 7
```

```output3
4
```