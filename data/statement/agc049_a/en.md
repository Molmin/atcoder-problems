Score : $400$ points

## Problem Statement

We have a directed graph with $N$ vertices numbered $1$ to $N$.
$N$ strings of length $N$ each, $S_1,S_2,\ldots,S_N$, represent the edges in the graph.
Specifically, $S_{i,j}$ is `1` if there is an edge from Vertex $i$ to Vertex $j$, and `0` otherwise.
The graph has no self-loops and no multi-edges.

Until the graph becomes empty, AtCobear will repeat the following operation:

- Choose one (unerased) vertex uniformly at random (independently from the previous choices).
Then, erase that vertex and all vertices that are reachable from the chosen vertex by traversing some edges.
Erasing a vertex will also erase the edges incident to it.

Find the expected value of the number of times the operation is done.

## Constraints

- $1 \leq N \leq 100$
- $S_i$ is a string of length $N$ consisting of `0` and `1`.
- $S_{i,i}=$`0`

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $S_1$
> 
> $S_2$
> 
> $\vdots$
> 
> $S_N$

## Output

Print the expected value of the number of times the operation is done.
Your output will be considered correct when its absolute or relative error from our answer is at most $10^{-9}$.

```input1
3
010
001
010
```

```output1
1.66666666666666666667
```

We have the following three scenarios happening with equal probability:

- <p>Choose Vertex $1$ in the first operation, erasing Vertex $1$, $2$, and $3$.
The graph is now empty, so we are done.</p>
- <p>Choose Vertex $2$ in the first operation, erasing Vertex $2$ and $3$.
Then, choose Vertex $1$ in the second operation, erasing Vertex $1$.
The graph is now empty, so we are done.</p>
- <p>Choose Vertex $3$ in the first operation, erasing Vertex $2$ and $3$.
Then, choose Vertex $1$ in the second operation, erasing Vertex $1$.
The graph is now empty, so we are done.</p>

Thus, the expected value of the number of times the operation is done is $(1+2+2)/3=5/3$.

```input2
3
000
000
000
```

```output2
3.00000000000000000000
```

There will always be three operations.

```input3
3
011
101
110
```

```output3
1.00000000000000000000
```

There will always be one operation.