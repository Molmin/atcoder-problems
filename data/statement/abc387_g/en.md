Score : $675$ points

## Problem Statement

Find the number, modulo $998244353$, of simple undirected connected graphs $G$ with $N$ vertices labeled from $1$ to $N$ that satisfy the following condition:

- For every circuit in $G$, the number of edges in that circuit is a prime number.<br>
  Here, a circuit is a closed trail that may pass through the same vertex more than once (but must not use the same edge more than once).

## Constraints

- $N$ is an integer between 1 and $2.5 \times 10^5$, inclusive.

## Input

The input is given from Standard Input in the following format:

> $N$

## Output

Print the number, modulo $998244353$, of simple undirected connected graphs $G$ satisfying the condition.

```input1
3
```

```output1
4
```

There are four such graphs $G$:

- The graph with edges $(1, 2)$ and $(1, 3)$
- The graph with edges $(1, 2)$ and $(2, 3)$
- The graph with edges $(1, 3)$ and $(2, 3)$
- The graph with edges $(1, 2)$, $(1, 3)$, and $(2, 3)$

```input2
2025
```

```output2
879839321
```

```input3
61261
```

```output3
202537766
```