Score : $1200$ points

## Problem Statement

You are given an integer $N$ and a prime $P$.

For a tree with $N$ vertices labeled $1$ through $N$, let $a_i$ and $b_i$ be the endpoints of the $i$-th edge $(1 \leq i \leq N-1)$. Also, define $x_j\ (1 \leq j \leq N-1)$ as:

- The number of integers $i\ (1 \leq i \leq N-1)$ satisfying $\min(a_i,b_i) \leq j \lt \max(a_i,b_i)$.

Find the number, modulo $P$, of sequences that could be $(x_1, x_2, \ldots, x_{N - 1})$.

## Constraints

- $2 \leq N \leq 500$
- $10^8 \leq P \leq 10^9$
- $P$ is prime.

## Input

The input is given from Standard Input in the following format:

> $N$ $P$

## Output

Print the answer.

```input1
3 998244353
```

```output1
3
```

There are three different trees with three vertices, if we distinguish the vertices by their labels but not the edges.<br>
The corresponding $(x_1, x_2)$ are $(1, 1)$, $(2, 1)$, and $(1, 2)$, so the expected output is $3$ modulo $P = 998244353$.

```input2
69 433416647
```

```output2
243082757
```

Find the count modulo $P$.