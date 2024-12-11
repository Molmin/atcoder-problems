Score : $500$ points

## Problem Statement

You are given a simple connected undirected graph with $N$ vertices and $M$ edges.  (A graph is said to be simple if it has no multi-edges and no self-loops.)<br>
For $i = 1, 2, \ldots, M$, the $i$-th edge connects Vertex $u_i$ and Vertex $v_i$.

A sequence $(A_1, A_2, \ldots, A_k)$ is said to be a **path** of length $k$ if both of the following two conditions are satisfied:

- For all $i = 1, 2, \dots, k$, it holds that $1 \leq A_i \leq N$.
- For all $i = 1, 2, \ldots, k-1$, Vertex $A_i$ and Vertex $A_{i+1}$ are directly connected by an edge.

An empty sequence is regarded as a path of length $0$.

Let $S = s_1s_2\ldots s_N$ be a string of length $N$ consisting of $0$ and $1$.
A path $A = (A_1, A_2, \ldots, A_k)$ is said to be a **good path** with respect to $S$ if the following conditions are satisfied:

- For all $i = 1, 2, \ldots, N$, it holds that:-   - if $s_i = 0$, then $A$ has even number of $i$'s.
-   - if $s_i = 1$, then $A$ has odd number of $i$'s.

There are $2^N$ possible $S$ (in other words, there are $2^N$ strings of length $N$ consisting of $0$ and $1$).  Find the sum of "the length of the shortest good path with respect to $S$" over all those $S$.

Under the Constraints of this problem, it can be proved that, for any string $S$ of length $N$ consisting of $0$ and $1$, there is at least one good path with respect to $S$.

## Constraints

- $2 \leq N \leq 17$
- $N-1 \leq M \leq \frac{N(N-1)}{2}$
- $1 \leq u_i, v_i \leq N$
- The given graph is simple and connected.
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

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
3 2
1 2
2 3
```

```output1
14
```

- For $S = 000$, the empty sequence $()$ is the shortest good path with respect to $S$, whose length is $0$.
- For $S = 100$, $(1)$ is the shortest good path with respect to $S$, whose length is $1$.
- For $S = 010$, $(2)$ is the shortest good path with respect to $S$, whose length is $1$.
- For $S = 110$, $(1, 2)$ is the shortest good path with respect to $S$, whose length is $2$.
- For $S = 001$, $(3)$ is the shortest good path with respect to $S$, whose length is $1$.
- For $S = 101$, $(1, 2, 3, 2)$ is the shortest good path with respect to $S$, whose length is $4$.
- For $S = 011$, $(2, 3)$ is the shortest good path with respect to $S$, whose length is $2$.
- For $S = 111$, $(1, 2, 3)$ is the shortest good path with respect to $S$, whose length is $3$.

Therefore, the sought answer is $0 + 1 + 1 + 2 + 1 + 4 + 2 + 3 = 14$.

```input2
5 5
4 2
2 3
1 3
2 1
1 5
```

```output2
108
```