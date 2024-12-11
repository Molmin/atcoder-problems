Score : $700$ points

## Problem Statement

You are given positive integers $N$ and $K$, and a sequence of $N$ positive integers: $A=(A_{1},A_{2},\dots,A_{N})$.

For a permutation $P=(P_{1},P_{2},\dots,P_{N})$ of $(1,2,\dots,N)$, consider the following problem "MST on Line," and let $f(P)$ the answer.

**Problem: MST on Line**

We have a weighted undirected graph $G$ with $N$ vertices numbered $1$ to $N$. For every integer pair $(i,j)$ such that $1\leq i\lt j\leq N$, the following holds for $G$.

- If $j-i\leq K$, there is an edge between vertex $i$ and vertex $j$, whose weight is **$\max(A_{P_{i}},A_{P_{j}})$**.
- If $j-i\gt K$, there is no edge between vertex $i$ and vertex $j$.

Find the total weight of the edges of a minimum spanning tree of $G$.

Find the sum, modulo $998244353$, of $f(P)$ over all permutations $P=(P_{1},P_{2},\dots ,P_{N})$ of $(1,2,\dots,N)$.

## Constraints

- $1\leq K\lt N\leq 5000$
- $1\leq A_{i}\leq 10^{9}$
- All input values are integers.

## Input

The input is given from Standard Input in the following format:

> $N$ $K$
> 
> $A_{1}$ $A_{2}$ $\cdots$ $A_{N}$

## Output

Print the answer.

```input1
5 2
3 4 5 2 1
```

```output1
1740
```

For $P=(1,2,3,4,5)$, the following edges form a spanning tree of $G$:

the edge between vertices $1$ and $2$ of weight $4$,

the edge between vertices $2$ and $3$ of weight $5$,

the edge between vertices $2$ and $4$ of weight $4$, and

the edge between vertices $4$ and $5$ of weight $2$,

for a total weight of $15$.

It is impossible to take a spanning tree with a smaller total edge weight, so $f(P)=15$.

In this way, it can be seen that the sum of $f(P)$ over all permutations $P$ of $(1,2,3,4,5)$ is $1740$, which should be printed.

```input2
2 1
167 924
```

```output2
1848
```

```input3
12 9
22847 98332 854 68844 81080 46058 40949 62493 76561 52907 88628 99740
```

```output3
660459584
```