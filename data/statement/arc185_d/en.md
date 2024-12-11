Score : $800$ points

## Problem Statement

There is a tree with $N \times M + 1$ vertices numbered $0, 1, \dots, N \times M$. The $i$-th edge $(1 \leq i \leq N \times M)$ connects vertices $i$ and $\max(i - N, 0)$.<br>
Vertex $0$ is painted. The other vertices are unpainted.<br>
Takahashi is at vertex $0$. As long as there exists an unpainted vertex, he performs the following operation:

- He chooses one of the vertices adjacent to his current vertex uniformly at random (all choices are independent) and moves to that vertex. Then, if the vertex he is on is unpainted, he paints it.

Find the expected number of times he performs the operation, modulo $998244353$.

What is the expected value modulo $998244353$?

It can be proved that the sought expected value is always rational. Under the constraints of this problem, when that value is expressed as an irreducible fraction $\frac{P}{Q}$, it can also be proved that $Q \not\equiv 0 \pmod{998244353}$. Then, there uniquely exists an integer $R$ such that $R \times Q \equiv P \pmod{998244353}, 0 \leq R \lt 998244353$. Report this $R$.

## Constraints

- $1 \leq N \leq 2 \times 10^5$
- $1 \leq M \leq 2 \times 10^5$
- $N$ and $M$ are integers.

## Input

The input is given from Standard Input in the following format:

> $N$ $M$

## Output

Print the expected number of times he performs the operation, modulo $998244353$.

```input1
2 2
```

```output1
20
```

For example, Takahashi could behave as follows.

- Moves to vertex $1$ and paints it. This action is chosen with probability $\frac{1}{2}$.
- Moves to vertex $0$. This action is chosen with probability $\frac{1}{2}$.
- Moves to vertex $1$. This action is chosen with probability $\frac{1}{2}$.
- Moves to vertex $3$ and paints it. This action is chosen with probability $\frac{1}{2}$.
- Moves to vertex $1$. This action is chosen with probability $1$.
- Moves to vertex $0$. This action is chosen with probability $\frac{1}{2}$.
- Moves to vertex $2$ and paints it. This action is chosen with probability $\frac{1}{2}$.
- Moves to vertex $4$ and paints it. This action is chosen with probability $\frac{1}{2}$.

He behaves in this way with probability $\frac{1}{128}$, in which case the number of operations is $8$. The expected number of operations is $20$.

```input2
123456 185185
```

```output2
69292914
```