Score : $800$ points

## Problem Statement

Given is a tree with $N$ vertices numbered $1$ through $N$.

The $i$-th edge connects Vertices $a_i$ and $b_i$.

Snuke will label each vertex with `0` or `1` and each edge with `AND` or `OR`.
Among the $2^{2N-1}$ ways to label the vertices and edges, find the number of ways that satisfy the following condition, modulo $998244353$.

Condition: There exists a sequence of $N-1$ operations ending up with one vertex labeled `1`, where each operation consists of the steps below.

- Choose one edge and contract it. Here, let $x$ and $y$ be the labels of the erased vertices and $\mathrm{op}$ be the label of the erased edge.
- If $\mathrm{op}$ is `AND`, label the new vertex with $\mathrm{AND}(x,y)$; if $\mathrm{op}$ is `OR`, label the new vertex with $\mathrm{OR}(x,y)$.

## Notes

- The operation $\mathrm{AND}$ is defined as follows: $\mathrm{AND}(0,0)=(0,1)=(1,0)=0,\mathrm{AND}(1,1)=1$.
- The operation $\mathrm{OR}$ is defined as follows: $\mathrm{OR}(1,1)=(0,1)=(1,0)=1,\mathrm{OR}(0,0)=0$.
- When contracting the edge connecting Vertex $s$ and Vertex $t$, we merge the two vertices while removing that edge. After the contraction, there is an edge connecting the new vertex and vertex $u$ if and only if there was an edge connecting $s$ and $u$ or connecting $t$ and $u$ before the contraction.

## Constraints

- All values in input are integers.
- $2 \leq N \leq 10^{5}$
- $1 \leq a_i, b_i \leq N$
- The given graph is a tree.

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $a_1$ $b_1$
> 
> $\vdots$
> 
> $a_{N-1}$ $b_{N-1}$

## Output

Print the number of ways to label the tree that satisfy the condition in Problem Statement, modulo $998244353$.

```input1
2
1 2
```

```output1
4
```

```input2
20
7 3
20 18
16 12
7 2
10 5
18 16
16 3
4 11
7 15
8 1
6 1
12 13
15 5
19 17
7 1
9 8
7 17
16 14
11 7
```

```output2
283374562
```

- Remember to print the count modulo $998244353$.