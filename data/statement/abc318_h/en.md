Score : $650$ points

## Problem Statement

Snuke has come up with the following problem.

You are given permutations $P=(P_1,P_2,\ldots,P_N)$ and $Q=(Q_1,Q_2,\ldots,Q_N)$ of $(1,2,\ldots,N)$.
    Let us build a graph with $N$ vertices and $N$ edges as follows.

- For $i=1,2,\ldots,N$ in this order, draw an edge of weight $Q_i$ connecting vertices $i$ and $P_i$ bidirectionally.

When removing some number of edges to eliminate cycles from the graph, find the minimum possible total weight of the removed edges.

Alice and Bob came up with the following solutions.

**Alice:** Initialize the answer to $0$. For $i=1,2,\ldots,N$ in this order, if the edge connecting vertices $i$ and $P_i$ is contained in a cycle, remove that edge and add its weight to the answer.

**Bob:** Initialize the answer to $0$. For $i=N,N-1,\ldots,1$ in this order, if the edge connecting vertices $i$ and $P_i$ is contained in a cycle, remove that edge and add its weight to the answer.

Snuke has realized that their solutions are both incorrect, and he wants to know the number of inputs for which neither of their solutions gives the correct answer.

Among the $(N!)^2$ possible inputs, find the number, modulo $998244353$, of inputs for which neither Alice's nor Bob's solution gives the correct answer.

## Constraints

- $1\leq N\leq 2\times 10^5$
- All input values are integers.

## Input

The input is given from Standard Input in the following format:

> $N$

## Output

Print the answer as an integer.

```input1
3
```

```output1
4
```

The following four inputs satisfy the condition.

- $P=(2,3,1),Q=(2,1,3)$
- $P=(2,3,1),Q=(3,1,2)$
- $P=(3,1,2),Q=(2,1,3)$
- $P=(3,1,2),Q=(3,1,2)$

For example, for the input $P=(2,3,1),Q=(2,1,3)$, the correct answer is $1$, but Alice's solution gives $2$ and Bob's gives $3$.

```input2
2
```

```output2
0
```

There may be no inputs that satisfy the condition.

```input3
6
```

```output3
314708
```

```input4
318
```

```output4
321484323
```