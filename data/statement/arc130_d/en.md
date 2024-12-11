Score : $600$ points

## Problem Statement

Given is a tree with $N$ vertices. The vertices are numbered $1$ to $N$, and the $i$-th edge connects Vertices $a_i$ and $b_i$.

Find the number of sequences of positive integers $P = (P_1, P_2, \ldots, P_N)$ that satisfy the conditions below, modulo $998244353$.

- $1\leq P_i\leq N$
- $P_i\neq P_j$ if $i\neq j$.
- For $1\leq a, b, c\leq N$, if Vertices $a$ and $b$ are adjacent, and Vertices $b$ and $c$ are also adjacent, $P_a &lt; P_b &gt; P_c$ or $P_a &gt; P_b &lt; P_c$ holds.

## Constraints

- $2\leq N\leq 3000$
- $1\leq a_i, b_i\leq N$
- The given graph is a tree.

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $a_1$ $b_1$
> 
> $a_2$ $b_2$
> 
> $\vdots$
> 
> $a_{N-1}$ $b_{N-1}$

## Output

Print the answers.

```input1
3
1 2
2 3
```

```output1
4
```

The $4$ sequences satisfying the conditions are:

- $P = (1, 3, 2)$
- $P = (2, 1, 3)$
- $P = (2, 3, 1)$
- $P = (3, 1, 2)$

```input2
4
1 2
1 3
1 4
```

```output2
12
```

```input3
6
1 2
2 3
3 4
4 5
5 6
```

```output3
122
```

```input4
9
8 5
9 8
1 9
2 5
6 1
7 6
3 8
4 1
```

```output4
19080
```