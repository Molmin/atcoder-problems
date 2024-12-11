Score : $600$ points

## Problem Statement

Given is an integer sequence of length $N+1$: $A_0, A_1, A_2, \ldots, A_N$. Is there a binary tree of depth $N$ such that, for each $d = 0, 1, \ldots, N$, there are exactly $A_d$ leaves at depth $d$? If such a tree exists, print the maximum possible number of vertices in such a tree; otherwise, print $-1$.

## Notes

- A binary tree is a rooted tree such that each vertex has at most two direct children.
- A leaf in a binary tree is a vertex with zero children.
- The depth of a vertex $v$ in a binary tree is the distance from the tree's root to $v$. (The root has the depth of $0$.)
- The depth of a binary tree is the maximum depth of a vertex in the tree.

## Constraints

- $0 \leq N \leq 10^5$
- $0 \leq A_i \leq 10^{8}$ ($0 \leq i \leq N$)
- $A_N \geq 1$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $A_0$ $A_1$ $A_2$ $\cdots$ $A_N$

## Output

Print the answer as an integer.

```input1
3
0 1 1 2
```

```output1
7
```

Below is the tree with the maximum possible number of vertices. It has seven vertices, so we should print $7$.

![0d8d99d13df036f23b0c9fcec52b842b.png](https://img.atcoder.jp/nomura2020/0d8d99d13df036f23b0c9fcec52b842b.png)

```input2
4
0 0 1 0 2
```

```output2
10
```

```input3
2
0 3 1
```

```output3
-1
```

```input4
1
1 1
```

```output4
-1
```

```input5
10
0 0 1 1 2 3 5 8 13 21 34
```

```output5
264
```