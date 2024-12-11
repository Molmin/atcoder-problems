Score : $1600$ points

## Problem Statement

You are given an even number $N$ and a prime number $M$.

Find the number, modulo $M$, of simple connected undirected graphs $G$ with $N$ vertices numbered $1$ to $N$ that satisfy the following condition:

- For every spanning tree $T$ of $G$, there is a perfect matching in $T$.

    What is a perfect matching in a graph?

For a graph $G$, a set of edges $E$ from $G$ is called a perfect matching in $G$ if, for every vertex $v$ in the graph, $E$ contains exactly one edge with $v$ as an endpoint.

## Constraints

- $2 \leq N \leq 500$
- $10^8 \leq M \leq 10^9$
- $N$ is even.
- $M$ is prime.
- All input values are integers.

## Input

The input is given from Standard Input in the following format:

> $N$ $M$

## Output

Print the answer.

```input1
4 998244353
```

```output1
15
```

For example, among the two graphs shown in the figure below, the graph on the left satisfies the condition. On the other hand, the graph on the right does not because there is no perfect matching in the spanning tree with the three edges shown in bold red.

![](https://img.atcoder.jp/agc065/2ef467c5e79ec3372986afd95c28100a.png)

```input2
10 998244353
```

```output2
128792160
```

```input3
300 923223991
```

```output3
359143490
```