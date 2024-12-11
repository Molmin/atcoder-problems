Score : $700$ points

## Problem Statement

In this problem, a rooted directed tree is a rooted tree where all edges are directed from the root to the leaves.

You are given a sequence of non-negative integers $d=(d_1,d_2,\ldots,d_N)$ with a sum of $N-1$.

Among the $N$-vertex rooted directed trees with vertex numbered $1$ to $N$ and vertex $1$ as the root, a **good tree** is one that satisfies the following condition:

- the out-degree of vertex $i\ (1\leq i \leq N)$ is $d_i$.

Furthermore, for a vertex $v$ of a good tree, let $f(v)$ be the minimum vertex number of the vertices (including $v$) in the subtree rooted at vertex $v$, and $v$ is called a **good vertex** if it satisfies $f(v)=v$.

Find the sum of the numbers of good vertices for all good trees, modulo $998244353$.

## Constraints

- $2 \leq N \leq 500$
- $0 \leq d_i \leq N-1$
- $d_1 \geq 1$
- $\sum_{i=1}^N d_i = N-1$
- All input values are integers.

## Input

The input is given from Standard Input in the following format:

> $N$
> 
> $d_1$ $d_2$ $\ldots$ $d_N$

## Output

Print the answer.

```input1
4
2 0 1 0
```

```output1
7
```

There are two good trees, as shown below. The blue vertices are good vertices.

![](https://img.atcoder.jp/arc162/D-sample1-zFXKLnmt.png)

For these trees, there are $4$ and $3$ good vertices, respectively, so the answer is $7$.

```input2
10
3 1 0 0 2 0 1 2 0 0
```

```output2
37542
```