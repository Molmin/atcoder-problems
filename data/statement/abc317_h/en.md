Score : $650$ points

## Problem Statement

We have a directed graph with $N$ vertices numbered $1$ to $N$. The graph has no multi-edges but can have self-loops. Also, every edge in the graph satisfies the following condition.    

- If the edge goes from vertex $s$ to vertex $t$, then $s$ and $t$ satisfy at least one of $0 \leq t - s\leq 2$ and $t = 1$.

The presence or absence of an edge in the graph is represented by sequences $A, B, C, D$, each of length $N$. Each element of $A, B, C, D$ has the following meaning. (Let $A_n$ denote the $n$-th element of $A$; the same applies to $B_n, C_n, D_n$.)

- $A_n$ is $1$ if there is an edge from vertex $n$ to vertex $n$, and $0$ otherwise.
- $B_n$ is $1$ if there is an edge from vertex $n$ to vertex $n+1$, and $0$ otherwise. (Here, $B_N = 0$.)
- $C_n$ is $1$ if there is an edge from vertex $n$ to vertex $n+2$, and $0$ otherwise. (Here, $C_{N-1} = C_N = 0$.)
- $D_n$ is $1$ if there is an edge from vertex $n$ to vertex $1$, and $0$ otherwise. (Here, $D_1 = A_1$.)

In the given graph, find the number, modulo $998244353$, of walks with $K$ edges starting at vertex $1$ and ending at vertex $N$.

Here, a walk with $K$ edges starting at vertex $1$ and ending at vertex $N$ is a sequence of vertices $v_0 = 1, v_1, \dots, v_K = N$ such that for each $i$ $(0 \leq i \lt K)$ there is an edge from vertex $v_i$ to vertex $v_{i + 1}$. Two walks are distinguished when they differ as sequences.

## Constraints

- $2 \leq N \leq 5 \times 10^4$
- $1 \leq K \leq 5 \times 10^5$
- $A_i, B_i, C_i, D_i \in \lbrace 0, 1 \rbrace$
- $A_1 = D_1$
- $B_N = C_{N-1} = C_N = 0$

## Input

The input is given from Standard Input in the following format:

> $N$ $K$
> 
> $A_1$ $A_2$ $\dots$ $A_N$
> 
> $B_1$ $B_2$ $\dots$ $B_N$
> 
> $C_1$ $C_2$ $\dots$ $C_N$
> 
> $D_1$ $D_2$ $\dots$ $D_N$

## Output

Print the number, modulo $998244353$, of walks of length $K$ starting at vertex $1$ and ending at vertex $N$.

```input1
3 3
1 0 1
1 1 0
1 0 0
1 0 1
```

```output1
6
```

The following figure shows the graph.

![image](https://img.atcoder.jp/abc317/2106e1b4faaa87d208ed3e3a275cda1b.jpg)

The following six walks satisfy the conditions.

- $1, 1, 1, 3$
- $1, 1, 2, 3$
- $1, 1, 3, 3$
- $1, 2, 3, 3$
- $1, 3, 1, 3$
- $1, 3, 3, 3$

```input2
4 6
1 1 1 1
1 1 1 0
1 1 0 0
1 0 0 0
```

```output2
50
```

```input3
10 500000
0 1 0 1 0 0 0 0 1 1
1 1 1 0 1 1 1 0 1 0
0 0 1 1 0 0 1 1 0 0
0 1 1 1 1 1 0 1 1 0
```

```output3
866263864
```