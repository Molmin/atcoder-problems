Score : $1200$ points

## Problem Statement

You are given a simple connected undirected graph $G$ consisting of $N$ vertices and $M$ edges.
The vertices are numbered $1$ to $N$, and the edges are numbered $1$ to $M$.

Edge $i$ connects Vertex $a_i$ and $b_i$ bidirectionally.
It is guaranteed that the subgraph consisting of Vertex $1,2,\ldots,N$ and Edge $1,2,\ldots,N-1$ is a spanning tree of $G$.

An allocation of weights to the edges is called a *good allocation* when the tree consisting of Vertex $1,2,\ldots,N$ and Edge $1,2,\ldots,N-1$ is a minimum spanning tree of $G$.

There are $M!$ ways to allocate the edges distinct integer weights between $1$ and $M$.
For each good allocation among those, find the total weight of the edges in the minimum spanning tree, and print the sum of those total weights modulo $10^{9}+7$.

## Constraints

- All values in input are integers.
- $2 \leq N \leq 20$
- $N-1 \leq M \leq N(N-1)/2$
- $1 \leq a_i, b_i \leq N$
- $G$ does not have self-loops or multiple edges.
- The subgraph consisting of Vertex $1,2,\ldots,N$ and Edge $1,2,\ldots,N-1$ is a spanning tree of $G$.

## Input

Input is given from Standard Input in the following format:

> $N$ $M$
> 
> $a_1$ $b_1$
> 
> $\vdots$
> 
> $a_M$ $b_M$

## Output

Print the answer.

```input1
3 3
1 2
2 3
1 3
```

```output1
6
```

An allocation is good only if Edge $3$ has the weight $3$. For these good allocations, the total weight of the edges in the minimum spanning tree is $3$, and there are two good allocations, so the answer is $6$.

```input2
4 4
1 2
3 2
3 4
1 3
```

```output2
50
```

```input3
15 28
10 7
5 9
2 13
2 14
6 1
5 12
2 10
3 9
10 15
11 12
12 6
2 12
12 8
4 10
15 3
13 14
1 15
15 12
4 14
1 7
5 11
7 13
9 10
2 7
1 9
5 6
12 14
5 2
```

```output3
657573092
```

Print the sum of those total weights modulo $10^{9}+7$.