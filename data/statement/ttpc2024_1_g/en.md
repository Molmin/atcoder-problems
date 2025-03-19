Score: $100$ points

## Problem Statement

You are given a tree $A$ with $N$ vertices. The vertices of $A$ are numbered $1, 2, \dots, N$, and the $i$-th edge ($1 \leq i \leq N-1$) connects vertices $u_i$ and $v_i$ of $A$.

Additionally, you are given another tree $B$ with $N$ vertices. The vertices of $B$ are also numbered $1, 2, \dots, N$, and the $j$-th edge ($1 \leq j \leq N-1$) connects vertices $x_j$ and $y_j$ of $B$.

Your task is to find a pair of permutations $((P_1, P_2, \dots, P_{N-1}), (Q_1, Q_2, \dots, Q_{N-1}))$ that satisfies the following conditions:

**Conditions**

Perform the following operations 1. and 2. in order for $k = 1, 2, \dots, N-1$. **After completing operations 1. and 2. for each $k$**, both $A$ and $B$ must remain as trees.

1. In tree $A$, remove the edge connecting vertices $u_{P_k}$ and $v_{P_k}$, and add an edge connecting vertices $x_{Q_k}$ and $y_{Q_k}$.
2. In tree $B$, remove the edge connecting vertices $x_{Q_k}$ and $y_{Q_k}$, and add an edge connecting vertices $u_{P_k}$ and $v_{P_k}$.

It can be proven that under the constraints of this problem, a valid solution always exists.

## Constraints

- All input values are integers.
- $2 \leq N \leq 1000$
- $1 \leq u_i, v_i, x_j, y_j \leq N$
- The given $A$ and $B$ form trees.

## Input

The input is given from Standard Input in the following format:

> $N$
> 
> $u_1$ $v_1$
> 
> $u_2$ $v_2$
> 
> $\vdots$
> 
> $u_{N-1}$ $v_{N-1}$
> 
> $x_1$ $y_1$
> 
> $x_2$ $y_2$
> 
> $\vdots$
> 
> $x_{N-1}$ $y_{N-1}$

## Output

Output the answer in the following format:

> $P_1$ $P_2$ $\cdots$ $P_{N-1}$
> 
> $Q_1$ $Q_2$ $\cdots$ $Q_{N-1}$

```input1
4
1 2
2 3
3 4
1 2
2 4
2 3
```

```output1
3 1 2
2 1 3
```

Before the operation, $A$ is a path graph, and $B$ is a star graph.

After the operation for $k = 1$, $A$ becomes a star graph, and $B$ becomes a path graph.

In the operations for $k = 2$, the same edge (in terms of vertex numbers) is removed and added, so the shape of the tree remains unchanged.

After completing the operations for $k = 3$, the original shapes of trees $A$ and $B$ are completely swapped.

```input2
2
1 2
2 1
```

```output2
1
1
```

```input3
7
1 2
1 3
2 4
2 5
3 6
3 7
1 5
1 6
1 7
5 2
6 3
7 4
```

```output3
1 2 3 4 5 6
1 2 6 4 5 3
```