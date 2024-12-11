Score : $1200$ points

## Problem Statement

You are given integers $N$ and $K$ such that $2\leq K\leq N$.

**Problem: potato**

We have a weighted rooted tree with $N$ vertices numbered $1$ to $N$. Vertex $1$ is the root.

For each $2\leq i\leq N$, the parent of vertex $i$ is $p_{i}\;(1\leq p_{i}&lt;i)$, and the edge connecting $i$ and $p_{i}$ has a weight of $q_{i-1}$.

Here, $q=(q_{1},q_{2},\dots,q_{N-1})$ is a permutation of $(1,2,\dots,N-1)$.

Let $cost(u,v)$ be the maximum weight of an edge in the simple path connecting vertices $u$ and $v$.

Find $\sum_{u=1}^{N} \sum_{v=u+1}^{N} cost(u,v)$.

**Problem: tomato**

You are given an integer $a$ such that $1\leq a\lt K$. There are $\frac{((N-1)!)^{2}}{K-1}$ possible pairs of $p$ and $q$ in the problem "potato" such that $p_{K}=a$. Find the sum, modulo $998244353$, of the answers to the problem over all those pairs.

For each $a=1,\dots,K-1$, find the answer to the problem "tomato".

## Constraints

- $2\leq K\leq N\leq 10^{5}$
- All input values are integers.

## Input

The input is given from Standard Input in the following format:

> $N$ $K$

## Output

Print $K-1$ lines. The $i$-th line should contain the answer to the problem "tomato" for $a=i$.

```input1
4 4
```

```output1
170
170
172
```

```input2
3 2
```

```output2
20
```

```input3
16 7
```

```output3
457991130
457991130
65525944
418314090
644126049
676086428
```