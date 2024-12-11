Score : $500$ points

## Problem Statement

You are given a simple undirected graph with $N$ vertices and $M$ edges.  The vertices are numbered from $1$ through $N$, and the edges are numbered from $1$ through $M$.  Edge $i$ connects Vertex $U_i$ and Vertex $V_i$.

You are given integers $K, S, T$, and $X$.  How many sequences $A = (A_0, A_1, \dots, A_K)$ are there satisfying the following conditions?

- $A_i$ is an integer between $1$ and $N$ (inclusive).
- $A_0 = S$
- $A_K = T$
- There is an edge that directly connects Vertex $A_i$ and Vertex $A_{i+1}$.
- Integer $X\ (X \neq S,X \neq T)$ appears even number of times (possibly zero) in sequence $A$.

Since the answer can be very large, find the answer modulo $998244353$.

## Constraints

- All values in input are integers.
- $2 \leq N \leq 2000$
- $1 \leq M \leq 2000$
- $1 \leq K \leq 2000$
- $1 \leq S,T,X \leq N$
- $X \neq S$
- $X \neq T$
- $1 \leq U_i&lt;V_i \leq N$
- If $i \neq j$, then $(U_i, V_i) \neq (U_j, V_j)$.

## Input

Input is given from Standard Input in the following format:

> $N$ $M$ $K$ $S$ $T$ $X$
> 
> $U_1$ $V_1$
> 
> $U_2$ $V_2$
> 
> $\vdots$
> 
> $U_M$ $V_M$

## Output

Print the answer modulo $998244353$.

```input1
4 4 4 1 3 2
1 2
2 3
3 4
1 4
```

```output1
4
```

The following $4$ sequences satisfy the conditions:

- $(1, 2, 1, 2, 3)$
- $(1, 2, 3, 2, 3)$
- $(1, 4, 1, 4, 3)$
- $(1, 4, 3, 4, 3)$

On the other hand, $(1, 2, 3, 4, 3)$ and $(1, 4, 1, 2, 3)$ do not, since there are odd number of occurrences of $2$.

```input2
6 5 10 1 2 3
2 3
2 4
4 6
3 6
1 5
```

```output2
0
```

The graph is not necessarily connected.

```input3
10 15 20 4 4 6
2 6
2 7
5 7
4 5
2 4
3 7
1 7
1 4
2 9
5 10
1 3
7 8
7 9
1 6
1 2
```

```output3
952504739
```

Find the answer modulo $998244353$.