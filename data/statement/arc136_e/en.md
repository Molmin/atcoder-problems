Score : $800$ points

## Problem Statement

We have a directed graph $G$ with $N$ vertices numbered $1$ to $N$.

Between two vertices $i,j$ ($1 \leq i,j \leq N$, $i \neq j$), there is an edge $i \to j$ if and only if both of the following conditions are satisfied.

- $i&lt;j$
- $\mathrm{gcd}(i,j) &gt; 1$

Additionally, each vertex has an associated value: the value of Vertex $i$ is $A_i$.

Consider choosing a set $s$ of vertices so that the following condition is satisfied.

- For every pair $(x,y)$ ($x&lt;y$) of different vertices in $s$, $y$ is unreachable from $x$ in $G$.

Find the maximum possible total value of vertices in $s$.

## Constraints

- $1 \leq N \leq 10^6$
- $1 \leq A_i \leq 10^9$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $A_1$ $A_2$ $\cdots$ $A_N$

## Output

Print the answer.

```input1
6
1 1 1 1 1 1
```

```output1
4
```

We should choose $s=\{1,2,3,5\}$.

```input2
6
1 2 1 3 1 6
```

```output2
8
```

We should choose $s=\{1,5,6\}$.

```input3
20
40 39 31 54 27 31 80 3 62 66 15 72 21 38 74 49 15 24 44 3
```

```output3
343
```