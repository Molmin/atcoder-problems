Score : $900$ points

## Problem Statement

You are given a sequence $D_1, D_2, ..., D_N$ of length $N$.
**The values of $D_i$ are all distinct.**
Does a tree with $N$ vertices that satisfies the following conditions exist?

- The vertices are numbered $1,2,..., N$.
- The edges are numbered $1,2,..., N-1$, and Edge $i$ connects Vertex $u_i$ and $v_i$.
- For each vertex $i$, the sum of the distances from $i$ to the other vertices is $D_i$, assuming that the length of each edge is $1$.

If such a tree exists, construct one such tree.

## Constraints

- $2 \leq N \leq 100000$
- $1 \leq D_i \leq 10^{12}$
- $D_i$ are all distinct.

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $D_1$
> 
> $D_2$
> 
> $:$
> 
> $D_N$

## Output

If a tree with $n$ vertices that satisfies the conditions does not exist, print `-1`.

If a tree with $n$ vertices that satisfies the conditions exist, print $n-1$ lines.
The $i$-th line should contain $u_i$ and $v_i$ with a space in between.
If there are multiple trees that satisfy the conditions, any such tree will be accepted.

```input1
7
10
15
13
18
11
14
19
```

```output1
1 2
1 3
1 5
3 4
5 6
6 7
```

The tree shown below satisfies the conditions.

![](https://img.atcoder.jp/arc103/92920696862ead4cacf3755c3c8135e0.png)

```input2
2
1
2
```

```output2
-1
```

```input3
15
57
62
47
45
42
74
90
75
54
50
66
63
77
87
51
```

```output3
1 10
1 11
2 8
2 15
3 5
3 9
4 5
4 10
5 15
6 12
6 14
7 13
9 12
11 13
```