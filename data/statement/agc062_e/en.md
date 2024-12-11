Score: $1300$ points

## Problem Statement

You are given an **odd** number $N$ and a non-negative integer $K$.

Find the number, modulo $998244353$, of sequences of integer pairs $((L_1,R_1),(L_2,R_2),\dots,(L_N,R_N))$ satisfying all of the following conditions.

- $(L_1,R_1,L_2,R_2,\dots,L_N,R_N)$ is a permutation of the integers from $1$ to $2N$.
- $L_1 \leq L_2 \leq \dots \leq L_N$.
- $L_i \leq R_i \ (1 \leq i \leq N)$.
- There are exactly $K$ indices $i\ (1\leq i \leq N)$ such that $L_i+1=R_i$.
- There is a rooted binary tree $T$ with $N$ vertices numbered from $1$ to $N$ such that the following holds:-   - vertices $i$ and $j$ have an ancestor-descendant relationship in $T$ $\iff$ intervals $[L_i,R_i]$ and $[L_j,R_j]$ intersect.

Here, a rooted binary tree is a rooted tree where each vertex has $0$ or $2$ children. Vertices $i$ and $j$ are said to have an ancestor-descendant relationship in a tree $T$ if either vertex $j$ exists on the simple path connecting the root to vertex $i$, or vice versa.

## Constraints

- $1 \leq N &lt; 2 \times 10^5$
- $0 \leq K \leq N$
- $N$ is odd.
- All input values are integers.

## Input

The input is given from Standard Input in the following format:

> $N$ $K$

## Output

Print the answer.

```input1
3 1
```

```output1
2
```

For example, if $(L_1,R_1)=(1,5),(L_2,R_2)=(2,3),(L_3,R_3)=(4,6)$, then $i=2$ is the only pair with $L_i+1=R_i$. Also, the fifth condition is satisfied by a tree where vertex $1$ is the root, and its children are vertices $2$ and $3$.

```input2
1 0
```

```output2
0
```

```input3
521 400
```

```output3
0
```

```input4
199999 2023
```

```output4
283903125
```