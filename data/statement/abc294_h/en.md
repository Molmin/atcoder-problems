Score : $600$ points

## Problem Statement

You are given a simple undirected graph with $N$ vertices numbered $1$ to $N$ and $M$ edges numbered $1$ to $M$. Edge $i$ connects vertex $u_i$ and vertex $v_i$.

Find the number, modulo $998244353$, of ways to write an integer between $1$ and $K$, inclusive, on each vertex of this graph to satisfy the following condition:

- two vertices connected by an edge always have different numbers written on them.

## Constraints

- $1 \leq N \leq 30$
- $0 \leq M \leq \min \left(30, \frac{N(N-1)}{2} \right)$
- $1 \leq K \leq 10^9$
- $1 \leq u_i \lt v_i \leq N$
- The given graph is simple.

## Input

The input is given from Standard Input in the following format:

> $N$ $M$ $K$
> 
> $u_1$ $v_1$
> 
> $u_2$ $v_2$
> 
> $\vdots$
> 
> $u_M$ $v_M$

## Output

Print the number, modulo $998244353$, of ways to write integers between $1$ and $K$, inclusive, on the vertices to satisfy the condition.

```input1
4 3 2
1 2
2 4
2 3
```

```output1
2
```

Here are the two ways to satisfy the condition.

- Write $1$ on vertices $1, 3, 4$, and write $2$ on vertex $2$.
- Write $1$ on vertex $2$, and write $2$ on vertex $1, 3, 4$.

```input2
4 0 10
```

```output2
10000
```

All $10^4$ ways satisfy the condition.

```input3
5 10 5
3 5
1 3
1 2
1 4
3 4
2 5
4 5
1 5
2 3
2 4
```

```output3
120
```

```input4
5 6 294
1 2
2 4
1 3
2 3
4 5
3 5
```

```output4
838338733
```

```input5
7 12 1000000000
4 5
2 7
3 4
6 7
3 5
5 6
5 7
1 3
4 7
1 5
2 3
3 6
```

```output5
418104233
```