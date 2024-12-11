Score: $600$ points

## Problem Statement

There is a tree with $N$ vertices numbered $1$ to $N$. The $i$-th edge connects vertices $u_i$ and $v_i$.<br>
Additionally, there are $N$ pieces numbered $1$ to $N$. Initially, piece $i$ is placed on vertex $i$.<br>
You can perform the following operation any number of times, possibly zero:

- Choose one edge. Let vertices $u$ and $v$ be the endpoints of the edge, and swap the pieces on vertices $u$ and $v$. Then, delete the chosen edge.

Let $a_i$ be the piece on vertex $i$. How many different possible sequences $(a_1, a_2, \dots, a_N)$ exist when you finish performing the operation? Find the count modulo $998244353$.

## Constraints

- $2 \leq N \leq 3000$
- $1 \leq u_i \lt v_i \leq N$
- The graph given in the input is a tree.

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

## Output

Print the number, modulo $998244353$, of possible sequences $(a_1, a_2, \dots, a_N)$.

```input1
3
1 2
2 3
```

```output1
5
```

For example, the sequence $(a_1, a_2, a_3) = (2, 1, 3)$ can be obtained by the following steps:

- Choose the first edge, swap the pieces on vertices $1$ and $2$, and delete the edge. This results in $(a_1, a_2, a_3) = (2, 1, 3)$.
- Finish operating.

Also, the sequence $(a_1, a_2, a_3) = (3, 1, 2)$ can be obtained by the following steps:

- Choose the second edge, swap the pieces on vertices $2$ and $3$, and delete the edge. This results in $(a_1, a_2, a_3) = (1, 3, 2)$.
- Choose the first edge, swap the pieces on vertices $1$ and $2$, and delete the edge. This results in $(a_1, a_2, a_3) = (3, 1, 2)$.
- Finish operating.

The operation can yield the following five sequences:

- $(1, 2, 3)$
- $(1, 3, 2)$
- $(2, 1, 3)$
- $(2, 3, 1)$
- $(3, 1, 2)$

```input2
5
2 5
3 4
1 3
1 5
```

```output2
34
```

```input3
8
4 5
2 5
3 6
1 3
1 8
2 7
2 8
```

```output3
799
```