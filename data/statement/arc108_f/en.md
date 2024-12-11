Score : $900$ points

## Problem Statement

Given is a tree with $N$ vertices numbered $1$ to $N$, and $N-1$ edges numbered $1$ to $N-1$.
Edge $i$ connects Vertex $a_i$ and $b_i$ bidirectionally and has a length of $1$.

Snuke will paint each vertex white or black.
The *niceness* of a way of painting the graph is $\max(X, Y)$, where $X$ is the maximum among the distances between white vertices, and $Y$ is the maximum among the distances between black vertices.
Here, if there is no vertex of one color, we consider the maximum among the distances between vertices of that color to be $0$.

There are $2^N$ ways of painting the graph. Compute the sum of the nicenesses of all those ways, modulo $(10^{9}+7)$.

## Constraints

- $2 \leq N \leq 2 \times 10^{5}$
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

Print the sum of the nicenesses of the ways of painting the graph, modulo $(10^{9}+7)$.

```input1
2
1 2
```

```output1
2
```

- If we paint Vertex $1$ and $2$ the same color, the niceness will be $1$; if we paint them different colors, the niceness will be $0$.
- The sum of those nicenesses is $2$.

```input2
6
1 2
2 3
3 4
4 5
3 6
```

```output2
224
```

```input3
35
25 4
33 7
11 26
32 4
12 7
31 27
19 6
10 22
17 12
28 24
28 1
24 15
30 24
24 11
23 18
14 15
4 29
33 24
15 34
11 3
4 35
5 34
34 2
16 19
7 18
19 31
22 8
13 26
20 6
20 9
4 33
4 8
29 19
15 21
```

```output3
298219707
```

- Be sure to compute the sum modulo $(10^{9}+7)$.