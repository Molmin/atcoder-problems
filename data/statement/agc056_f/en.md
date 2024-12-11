Score : $1600$ points

## Problem Statement

Given are integers $N$ and $M$.
Find the number of integer sequences $a=(a_1,a_2,\cdots,a_N)$ that can be generated as follows, modulo $998244353$.

- Provide an undirected connected graph $G$ with $N$ vertices and $M$ edges.
Here, $G$ may not contain self-loops, but **may contain multi-edges**.
- Perform DFS on $G$ and let $a_i$ be the degree of the $i$-th vertex to be visited.
More accurately, execute the pseudo-code below to get $a$.

```plain
a = empty array

dfs(v):
    visited[v]=True
    a.append(degree[v])
    for u in g[v]:
        if not visited[u]:
            dfs(u)

dfs(arbitrary root)
```

Here, the variable $g$ represents the graph $G$ as an adjacency list, where $g[v]$ is the list of vertices adjacent to the vertex $v$ in **arbitrary order**.

For example, when $N=4,M=5$, it is possible to generate $a=(2,4,1,3)$, by providing the graph $G$ as follows.

![picture](https://img.atcoder.jp/agc056/3bfec17f881ae4cd27eccae94ebeae10.png)

Here, the numbers written on vertices represent the order they are visited in the DFS. (The DFS starts at the vertex labeled $1$.)
The orange arrows show the transitions in the DFS, and the numbers next to them represent the order the edges are traversed.

## Constraints

- $2 \leq N \leq M \leq 10^6$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$ $M$

## Output

Print the answer.

```input1
2 2
```

```output1
1
```

The only possible result is $a=(2,2)$.
Note that $G$ may have multi-edges.

```input2
3 4
```

```output2
9
```

```input3
10 20
```

```output3
186225754
```

```input4
100000 1000000
```

```output4
191021899
```