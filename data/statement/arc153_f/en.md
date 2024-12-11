Score : $1000$ points

## Problem Statement

You are given a simple connected undirected graph $G$ with $N$ vertices and $M$ edges. The vertices are numbered $1$ to $N$, and the $i$-th edge connects vertices $A_i$ and $B_i$.

Find the number of ways to paint each edge of $G$ in color $1$, $2$, or $3$ so that the following condition is satisfied, modulo $998244353$.

- There is a simple path in $G$ that contains an edge in color $1$, an edge in color $2$, and an edge in color $3$.

What is a simple path?
A simple path is a pair of a sequence of vertices $(v_1, \ldots, v_{k+1})$ and a sequence of edges $(e_1, \ldots, e_k)$ that satisfies the following:

- $i\neq j \implies v_i\neq v_j$;
- edge $e_i$ connects vertices $v_i$ and $v_{i+1}$.

## Constraints

- $3 \leq N\leq 2\times 10^5$
- $3 \leq M\leq 2\times 10^5$
- $1 \leq A_i, B_i \leq N$
- The given graph is simple and connected.

## Input

The input is given from Standard Input in the following format:

> $N$ $M$
> 
> $A_1$ $B_1$
> 
> $\vdots$
> 
> $A_M$ $B_M$

## Output

Print the number of ways to paint each edge of $G$ in color $1$, $2$, or $3$ so that the condition in question is satisfied, modulo $998244353$.

```input1
3 3
1 2
1 3
3 2
```

```output1
0
```

Any simple path in $G$ contains two or fewer edges, so there is no way to satisfy the condition.

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
534
```

```input3
6 5
1 3
4 3
5 4
4 2
1 6
```

```output3
144
```

```input4
6 7
1 2
2 3
3 1
4 5
5 6
6 4
1 6
```

```output4
1794
```