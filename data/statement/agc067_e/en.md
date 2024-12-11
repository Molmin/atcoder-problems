Score : $1900$ points

## Problem Statement

You are given an integer $N$ and a prime $P$.

Count the number, modulo $P$, of undirected connected graphs $G$ of $N$ vertices numbered $1$ to $N$ that satisfy the following condition:

- There are no self-loops in $G$. Note that multiple edges are allowed.
- For all edges $(u,v)$ in $G$, if we delete $(u,v)$ from $G$, $G$ remains connected. In other words, $G$ is edge-biconnected.
- For all edges $(u,v)$ in $G$, if we delete $(u,v)$ from $G$, $G$ is no longer edge-biconnected.

Two graphs are considered different if and only if there exists a pair of distinct vertices $(u,v)$ such that the numbers of edges connecting $u$ and $v$ in the two graphs are different.

## Constraints

- $2 \le N \le 50$
- $10^9&lt;P&lt;1.01\times 10^9$
- $P$ is prime.
- All input values are integers.

## Input

Input is given from Standard Input in the following format:

> $N$ $P$

## Output

Print the answer.

```input1
2 1005976817
```

```output1
1
```

```input2
5 1000837403
```

```output2
372
```

```input3
10 1001160547
```

```output3
789846604
```

```input4
20 1006779551
```

```output4
888612770
```