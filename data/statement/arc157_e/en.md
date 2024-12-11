Score : $700$ points

## Problem Statement

You are given a rooted tree with $N$ vertices.
The vertices are numbered $1$ to $N$, and the root is vertex $1$.
The parent of each vertex $i$ except the root is vertex $P_i$. Each vertex, including the root, has ** no child or exactly two children**.

Determine whether it is possible to write one of the characters `X` and `Y` on each vertex of the given tree to satisfy the following condition.

**Condition:** For each edge of the tree, consider the string of length $2$ obtained by concatenating the characters written on the endpoints in the order from the parent $P_i$ to the child $i$. Among the $(N - 1)$ strings obtained in this way,

- exactly $A$ are `XX`,
- exactly $B$ are `XY`,
- exactly $C$ are `YX`, and
- none is `YY`.

You have $T$ test cases to solve.

## Constraints

- $T \geq 1$
- $N \geq 1$
- For each input, the sum of $N$ over the test cases is at most $10^4$.
- $A \geq 0$
- $B \geq 0$
- $C \geq 0$
- $A + B + C = N - 1$
- $1 \leq P_i &lt; i \ \ (2 \leq i \leq N)$
- Each vertex $k \ (1 \leq k \leq N)$ occurs as a parent $P_i \ (2 \leq i \leq N)$ **zero times or twice in total**.

## Input

The input is given from Standard Input in the following format:

> $T$
> 
> $\mathrm{case}_1$
> 
> $\mathrm{case}_2$
> 
> $\vdots$
> 
> $\mathrm{case}_T$

Each test case $\mathrm{case}_i \ (1 \leq i \leq T)$ is in the following format:

> $N$ $A$ $B$ $C$
> 
> $P_2$ $P_3$ $\cdots$ $P_N$

## Output

Print $T$ lines.
The $i$-th line should contain `Yes` if there is a way to write characters to satisfy the condition, and `No` otherwise.

```input1
3
7 2 2 2
1 1 2 2 3 3
7 0 2 4
1 1 2 2 3 3
7 2 0 4
1 1 2 2 4 4
```

```output1
Yes
Yes
No
```

For the first test case, if you, for instance, write `XXYXYXX` in this order on vertices $1$ to $7$,

- from the edge $(1, 2)$, we obtain `XX`,
- from the edge $(1, 3)$, we obtain `XY`,
- from the edge $(2, 4)$, we obtain `XX`,
- from the edge $(2, 5)$, we obtain `XY`,
- from the edge $(3, 6)$, we obtain `YX`, and
- from the edge $(3, 7)$, we obtain `YX`.

Each of `XX`, `XY`, and `YX` occurs twice, so the condition is satisfied.

For the second case, one way to satisfy the condition is to write `XYYXXXX`.

For the third case, there is no way to satisfy the condition.