Score : $500$ points

## Problem Statement

You are given a tree with $N$ vertices and $N-1$ edges. The vertices are numbered $1$ to $N$, and the $i$-th edge connects Vertex $a_i$ and $b_i$.

You have coloring materials of $K$ colors.
For each vertex in the tree, you will choose one of the $K$ colors to paint it, so that the following condition is satisfied:

- If the distance between two different vertices $x$ and $y$ is less than or equal to two, $x$ and $y$ have different colors.

How many ways are there to paint the tree? Find the count modulo $1\ 000\ 000\ 007$.

What is tree?
A tree is a kind of graph. For detail, please see: [Wikipedia "Tree (graph theory)"](https://ja.wikipedia.org/wiki/%E6%9C%A8_(%E6%95%B0%E5%AD%A6))

What is distance?
The distance between two vertices $x$ and $y$ is the minimum number of edges one has to traverse to get from $x$ to $y$.

## Constraints

- $1 \leq N,K \leq 10^5$
- $1 \leq a_i,b_i \leq N$
- The given graph is a tree.

## Input

Input is given from Standard Input in the following format:

> $N$ $K$
> 
> $a_1$ $b_1$
> 
> $a_2$ $b_2$
> 
> $.$
> 
> $.$
> 
> $.$
> 
> $a_{N-1}$ $b_{N-1}$

## Output

Print the number of ways to paint the tree, modulo $1\ 000\ 000\ 007$.

```input1
4 3
1 2
2 3
3 4
```

```output1
6
```

![Figure](https://img.atcoder.jp/ghi/491cd56a53e99ba7677ee4827b8f767a.png)

There are six ways to paint the tree.

```input2
5 4
1 2
1 3
1 4
4 5
```

```output2
48
```

```input3
16 22
12 1
3 1
4 16
7 12
6 2
2 15
5 16
14 16
10 11
3 10
3 13
8 6
16 8
9 12
4 3
```

```output3
271414432
```