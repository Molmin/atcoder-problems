Score : $700$ points

## Problem Statement

You are given a string $s$ of length $n$.
Does a tree with $n$ vertices that satisfies the following conditions exist?

- The vertices are numbered $1,2,..., n$.
- The edges are numbered $1,2,..., n-1$, and Edge $i$ connects Vertex $u_i$ and $v_i$.
- If the $i$-th character in $s$ is `1`, we can have a connected component of size $i$ by removing one edge from the tree.
- If the $i$-th character in $s$ is `0`, we cannot have a connected component of size $i$ by removing any one edge from the tree.

If such a tree exists, construct one such tree.

## Constraints

- $2 \leq n \leq 10^5$
- $s$ is a string of length $n$ consisting of `0` and `1`.

## Input

Input is given from Standard Input in the following format:

> $s$

## Output

If a tree with $n$ vertices that satisfies the conditions does not exist, print `-1`.

If a tree with $n$ vertices that satisfies the conditions exist, print $n-1$ lines.
The $i$-th line should contain $u_i$ and $v_i$ with a space in between.
If there are multiple trees that satisfy the conditions, any such tree will be accepted.

```input1
1111
```

```output1
-1
```

It is impossible to have a connected component of size $n$ after removing one edge from a tree with $n$ vertices.

```input2
1110
```

```output2
1 2
2 3
3 4
```

If Edge $1$ or Edge $3$ is removed, we will have a connected component of size $1$ and another of size $3$. If Edge $2$ is removed, we will have two connected components, each of size $2$.

```input3
1010
```

```output3
1 2
1 3
1 4
```

Removing any edge will result in a connected component of size $1$ and another of size $3$.