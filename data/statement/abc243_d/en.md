Score : $400$ points

## Problem Statement

There is a perfect binary tree with $2^{10^{100}}-1$ vertices, numbered $1,2,...,2^{10^{100}}-1$.<br>
Vertex $1$ is the root. For each $1\leq i &lt; 2^{10^{100}-1}$, Vertex $i$ has two children: Vertex $2i$ to the left and Vertex $2i+1$ to the right.

Takahashi starts at Vertex $X$ and performs $N$ moves, represented by a string $S$. The $i$-th move is as follows.

- If the $i$-th character of $S$ is `U`, go to the parent of the vertex he is on now.
- If the $i$-th character of $S$ is `L`, go to the left child of the vertex he is on now.
- If the $i$-th character of $S$ is `R`, go to the right child of the vertex he is on now.

Find the index of the vertex Takahashi will be on after $N$ moves. In the given cases, it is guaranteed that the answer is at most $10^{18}$.

## Constraints

- $1 \leq N \leq 10^6$
- $1 \leq X \leq 10^{18}$
- $N$ and $X$ are integers.
- $S$ has a length of $N$ and consists of `U`, `L`, and `R`.
- When Takahashi is at the root, he never attempts to go to the parent.
- When Takahashi is at a leaf, he never attempts to go to a child.
- The index of the vertex Takahashi is on after $N$ moves is at most $10^{18}$.

## Input

Input is given from Standard Input in the following format:

> $N$ $X$
> 
> $S$

## Output

Print the answer.

```input1
3 2
URL
```

```output1
6
```

The perfect binary tree has the following structure.

![Figure](https://img.atcoder.jp/ghi/9e199e154f481af436c8eaec9c487e2c.png)

In the three moves, Takahashi goes $2 \to 1 \to 3 \to 6$.

```input2
4 500000000000000000
RRUU
```

```output2
500000000000000000
```

During the process, Takahashi may be at a vertex whose index exceeds $10^{18}$.

```input3
30 123456789
LRULURLURLULULRURRLRULRRRUURRU
```

```output3
126419752371
```