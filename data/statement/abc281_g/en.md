Score : $600$ points

## Problem Statement

You are given positive integers $N$ and $M$.<br>
Find the number, modulo $M$, of simple connected undirected graphs with $N$ vertices numbered $1, \dots, N$ that satisfy the following condition.

- For every $u = 2, \dots, N-1$, the shortest distance from vertex $1$ to vertex $u$ is strictly smaller than the shortest distance from vertex $1$ to vertex $N$.

Here, the shortest distance from vertex $u$ to vertex $v$ is the minimum number of edges in a simple path connecting vertices $u$ and $v$.<br>
Two graphs are considered different if and only if there are two vertices $u$ and $v$ that are connected by an edge in exactly one of those graphs.

## Constraints

- $3 \leq N \leq 500$
- $10^8 \leq M \leq 10^9$
- $N$ and $M$ are integers.

## Input

The input is given from Standard Input in the following format:

> $N$ $M$

## Output

Print the answer.

```input1
4 1000000000
```

```output1
8
```

The following eight graphs satisfy the condition.

![example_00](https://img.atcoder.jp/abc281/5c77dfe15dfa3c03666e654bf8cfdc01.png)

```input2
3 100000000
```

```output2
1
```

```input3
500 987654321
```

```output3
610860515
```

Be sure to find the number modulo $M$.