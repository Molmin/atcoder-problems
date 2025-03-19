Score: $100$ points

## Problem Statement

You are given a sequence $A = (A_1, A_2, \dots, A_N)$ of length $N$ consisting of $0$s and $1$s. Define a simple undirected graph $G = (V, E)$ with $\frac{N (N - 1)}{2}$ vertices as follows:

- For every pair of integers $(i, j)$ satisfying $1 \leq i &lt; j \leq N$, $(i, j) \in V$. This vertex is called vertex $(i, j)$.
- For every triple of integers $(i, j, k)$ satisfying $1 \leq i &lt; j &lt; k \leq N$ and $A_i + A_j + A_k = 1$, there is an edge connecting vertex $(i, j)$ and vertex $(j, k)$.
- No other pairs of vertices have edges.

Determine the number of connected components in $G$.

You are given $T$ test cases. For each test case, compute the answer.

## Constraints

- All input values are integers.
- $1 \leq T \leq 10^5$
- $3 \leq N \leq 10^6$
- $A_i$ is $0$ or $1$ ($1 \leq i \leq N$)
- The total sum of $N$ over all test cases in a single input is at most $10^6$.

## Partial Score

$30$ points will be awarded for passing the test set satisfying the following constraints:

- $1 \leq T \leq 1000$
- $3 \leq N \leq 5000$
- The total sum of $N$ over all test cases in a single input is at most $5000$.

## Input

The input is given in the following format:

> $T$
> 
> $\text{case}_1$
> 
> $\text{case}_2$
> 
> $\vdots$
> 
> $\text{case}_T$

Here, $\text{case}_i$ represents the $i$-th test case. Each test case is given in the following format:

> $N$
> 
> $A_1$ $A_2$ $\cdots$ $A_N$

## Output

For each test case, output the answer.

```input1
4
5
1 0 0 1 0
5
1 1 1 1 1
12
0 0 1 1 1 0 0 0 1 0 1 0
20
0 0 1 0 0 1 1 1 0 0 1 0 0 1 1 1 1 0 1 1
```

```output1
4
10
13
58
```

For the first test case, the connected components are as follows:

- $\lbrace (1,2),(2,3),(2,4),(2,5),(3,4),(4,5) \rbrace$
- $\lbrace (1,3),(3,5) \rbrace$
- $\lbrace (1,4) \rbrace$
- $\lbrace (1,5) \rbrace$

For the second test case, the graph has no edges, so the number of connected components is $10$.