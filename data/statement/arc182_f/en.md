Score : $1000$ points

## Problem Statement

You are given integers $N$ and $Q$, and two integer sequences of length $Q$: $A=(A_1,A_2,\ldots,A_Q)$ and $B=(B_1,B_2,\ldots, B_Q)$.

For each $k=1,2,\ldots,Q$, solve the following problem:

There is an undirected graph with $N$ vertices numbered from $0$ to $N-1$ and $N$ edges. The $i$-th edge $(0 \le i &lt; N)$ connects vertices $i$ and $(A_k \times i + B_k) \mod N$ bidirectionally. Find the number of connected components in this undirected graph.

## Constraints

- $1 \le N \le 10^6$
- $1 \le Q \le 10^5$
- $0 \le A_k &lt; N$
- $0 \le B_k &lt; N$
- All input values are integers.

## Input

The input is given from Standard Input in the following format:

> $N$ $Q$
> 
> $A_1$ $B_1$
> 
> $A_2$ $B_2$
> 
> $\vdots$
> 
> $A_Q$ $B_Q$

## Output

Print $Q$ lines.
The $i$-th line should contain the answer for $k=i$.

```input1
6 3
2 1
0 1
1 0
```

```output1
2
1
6
```

For $k=1$, the graph has the following two connected components:

- A connected component with vertices $0,1,3,4$.
- A connected component with vertices $2,5$.

Thus, the answer for $k=1$ is $2$.

```input2
11 3
9 1
5 3
8 0
```

```output2
3
3
2
```

For $k=1$, the graph has the following three connected components:

- A connected component with vertices $0,1,3,6,10$.
- A connected component with vertices $2,5,7,8,9$.
- A connected component with vertex $4$.

Thus, the answer for $k=1$ is $3$.

```input3
182 3
61 2
77 88
180 55
```

```output3
36
14
9
```