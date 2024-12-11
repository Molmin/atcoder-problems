Score : $600$ points

## Problem Statement

We have a rooted tree $T$ with $N$ vertices numbered $1$ to $N$. Vertex $1$ is the root, and the parent of vertex $i$ $(2 \leq i \leq N)$ is vertex $P_i$.

A non-empty subset $S$ of the vertex set $V = \lbrace 1, 2,\dots, N\rbrace$ of $T$ is said to be a **good vertex set** when it satisfies the following condition.

- For every pair of different vertices $(u, v)$ in $S$, the following holds: $u$ is not an ancestor of $v$.

For each $K = 1, 2, \dots, N$, find the number, modulo $998244353$, of good vertex sets with exactly $K$ vertices.

## Constraints

- $2 \leq N \leq 2 \times 10^5$
- $1 \leq P_i \lt i$
- All values in the input are integers.

## Input

The input is given from Standard Input in the following format:

> $N$
> 
> $P_2$ $P_3$ $\dots$ $P_N$

## Output

Print $N$ lines. The $i$-th line should contain the answer for $K = i$.

```input1
4
1 2 1
```

```output1
4
2
0
0
```

For each $1 \leq K \leq N$, the good vertex sets of size $K$ are listed below.

- $K=1$: $\lbrace 1 \rbrace, \lbrace 2 \rbrace, \lbrace 3 \rbrace, \lbrace 4 \rbrace$.
- $K=2$: $\lbrace 2, 4 \rbrace, \lbrace 3, 4 \rbrace$.
- $K=3,4$: There is none.

```input2
6
1 1 2 2 5
```

```output2
6
6
2
0
0
0
```

```input3
6
1 1 1 1 1
```

```output3
6
10
10
5
1
0
```

```input4
10
1 2 1 2 1 1 2 6 9
```

```output4
10
30
47
38
16
3
0
0
0
0
```