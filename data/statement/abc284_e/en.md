Score : $500$ points

## Problem Statement

You are given a simple undirected graph with $N$ vertices numbered $1$ to $N$ and $M$ edges numbered $1$ to $M$. Edge $i$ connects vertex $u_i$ and vertex $v_i$. The degree of each vertex is at most $10$.<br>
Let $K$ be the number of simple paths (paths without repeated vertices) starting from vertex $1$. Print $\min(K, 10^6)$.

## Constraints

- $1 \leq N \leq 2 \times 10^5$
- $0 \leq M \leq \min \left(2 \times 10^5, \frac{N(N-1)}{2}\right)$
- $1 \leq u_i, v_i \leq N$
- The given graph is simple.
- The degree of each vertex in the given graph is at most $10$.
- All values in the input are integers.

## Input

The input is given from Standard Input in the following format:

> $N$ $M$
> 
> $u_1$ $v_1$
> 
> $u_2$ $v_2$
> 
> $\vdots$
> 
> $u_M$ $v_M$

## Output

Print the answer.

```input1
4 2
1 2
2 3
```

```output1
3
```

We have the following three paths that count. (Note that a path of length $0$ also counts.)

- Vertex $1$;
- vertex $1$, vertex $2$;
- vertex $1$, vertex $2$, vertex $3$.

```input2
4 6
1 2
1 3
1 4
2 3
2 4
3 4
```

```output2
16
```

```input3
8 21
2 6
1 3
5 6
3 8
3 6
4 7
4 6
3 4
1 5
2 4
1 2
2 7
1 4
3 5
2 5
2 3
4 5
3 7
6 7
5 7
2 8
```

```output3
2023
```