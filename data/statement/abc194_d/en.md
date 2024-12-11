Score : $400$ points

## Problem Statement

We have a graph with $N$ vertices called Vertex $1$ through $N$. Takahashi is standing on Vertex $1$.<br>
The graph has no edges now.<br>
Takahashi will repeatedly do the following operation:

1. Choose one of the $N$ vertices (including the one on which Takahashi is standing now). Every vertex is chosen with probability $\frac{1}{N}$, independently from previous operations.
2. Add an edge between the vertex on which Takahashi is standing now and the chosen vertex, and go to the chosen vertex.

Find the expected value of the number of times he does the operation until the graph becomes connected.

## Constraints

- $2 \le N \le 10^5$

## Input

Input is given from Standard Input in the following format:

> $N$

## Output

Print the answer.<br>
Your answer will be considered correct when its absolute or relative error from our answer is at most $10^{-6}$.

```input1
2
```

```output1
2.00000000000
```

The graph becomes connected when the operation chooses Vertex $2$ for the first time.<br>
By considering the case Vertex $2$ is chosen for the first time in the $i$-th operation for each $i$, the answer is $\sum_{i = 1}^{\infty} (i \times (\frac{1}{2})^i) = 2$.

```input2
3
```

```output2
4.50000000000
```