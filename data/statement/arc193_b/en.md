Score : $800$ points

## Problem Statement

You are given a positive integer $N$ and a length-$N$ string $s_0s_1\ldots s_{N-1}$ consisting only of `0` and `1`.

Consider a simple undirected graph $G$ with $(N+1)$ vertices numbered $0, 1, 2, \ldots, N$, and the following edges:

- For each $i = 0, 1, \ldots, N-1$, there is an undirected edge between vertices $i$ and $(i+1)\bmod N$.
- For each $i = 0, 1, \ldots, N-1$, there is an undirected edge between vertices $i$ and $N$ if and only if $s_i =$ `1`.
- There are no other edges.

Furthermore, create a directed graph $G'$ by assigning a direction to each edge of $G$. That is, for each undirected edge $\lbrace u, v \rbrace$ in $G$, replace it with either a directed edge $(u, v)$ from $u$ to $v$ or a directed edge $(v, u)$ from $v$ to $u$.

For each $i = 0, 1, \ldots, N$, let $d_i$ be the in-degree of vertex $i$ in $G'$. Print the number, modulo $998244353$, of distinct sequences $(d_0, d_1, \ldots, d_N)$ that can be obtained.

## Constraints

- $3 \leq N \leq 10^6$
- $N$ is an integer.
- Each $s_i$ is `0` or `1`.

## Input

The input is given from Standard Input in the following format:

> $N$
> 
> $s_0s_1\ldots s_{N-1}$

## Output

Print the answer.

```input1
3
010
```

```output1
14
```

$G$ has four undirected edges: $\lbrace 0, 1 \rbrace, \lbrace 0, 2 \rbrace, \lbrace 1, 2 \rbrace, \lbrace 1, 3 \rbrace$.
For example, if we assign directions to each edge as $0 \to 1$, $2 \to 0$, $2 \to 1$, $1 \to 3$, then $(d_0, d_1, d_2, d_3) = (1, 2, 0, 1)$ is obtained.

The possible sequences $(d_0, d_1, d_2, d_3)$ are
$(0, 1, 2, 1)$, $(0, 2, 1, 1)$, $(0, 2, 2, 0)$, $(0, 3, 1, 0)$, $(1, 0, 2, 1)$, $(1, 1, 1, 1)$, $(1, 1, 2, 0)$, $(1, 2, 0, 1)$, $(1, 2, 1, 0)$, $(1, 3, 0, 0)$, $(2, 0, 1, 1)$, $(2, 1, 0, 1)$, $(2, 1, 1, 0)$, $(2, 2, 0, 0)$, for a total of $14$.

```input2
20
00001100111010100101
```

```output2
261339902
```