Score : $425$ points

## Problem Statement

You are given a simple connected undirected graph with $N$ vertices and $M$ edges. Each vertex $i\,(1\leq i \leq N)$ has a weight $A_i$. Each edge $j\,(1\leq j \leq M)$ connects vertices $U_j$ and $V_j$ bidirectionally and has a weight $B_j$.

The weight of a path in this graph is defined as the sum of the weights of the vertices and edges that appear on the path.

For each $i=2,3,\dots,N$, solve the following problem:

- Find the minimum weight of a path from vertex $1$ to vertex $i$.

## Constraints

- $2 \leq N \leq 2 \times 10^5$
- $N-1 \leq M \leq 2 \times 10^5$
- $1 \leq U_j &lt; V_j \leq N$
- $(U_i, V_i) \neq (U_j, V_j)$ if $i \neq j$.
- The graph is connected.
- $0 \leq A_i \leq 10^9$
- $0 \leq B_j \leq 10^9$
- All input values are integers.

## Input

The input is given from Standard Input in the following format:

> $N$ $M$
> 
> $A_1$ $A_2$ $\dots$ $A_N$
> 
> $U_1$ $V_1$ $B_1$
> 
> $U_2$ $V_2$ $B_2$
> 
> $\vdots$
> 
> $U_M$ $V_M$ $B_M$

## Output

Print the answers for $i=2,3,\dots,N$ in a single line, separated by spaces.

```input1
3 3
1 2 3
1 2 1
1 3 6
2 3 2
```

```output1
4 9
```

Consider the paths from vertex $1$ to vertex $2$.
The weight of the path $1 \to 2$ is $A_1 + B_1 + A_2 = 1 + 1 + 2 = 4$, and the weight of the path $1 \to 3 \to 2$ is $A_1 + B_2 + A_3 + B_3 + A_2 = 1 + 6 + 3 + 2 + 2 = 14$. The minimum weight is $4$.

Consider the paths from vertex $1$ to vertex $3$.
The weight of the path $1 \to 3$ is $A_1 + B_2 + A_3 = 1 + 6 + 3 = 10$, and the weight of the path $1 \to 2 \to 3$ is $A_1 + B_1 + A_2 + B_3 + A_3 = 1 + 1 + 2 + 2 + 3 = 9$. The minimum weight is $9$.

```input2
2 1
0 1
1 2 3
```

```output2
4
```

```input3
5 8
928448202 994752369 906965437 942744902 907560126
2 5 975090662
1 2 908843627
1 5 969061140
3 4 964249326
2 3 957690728
2 4 942986477
4 5 948404113
1 3 988716403
```

```output3
2832044198 2824130042 4696218483 2805069468
```

Note that the answers may not fit in a 32-bit integer.