Score: $650$ points

## Problem Statement

You are given $16$ non-negative integers $X_{i, j, k, l}$ $(i, j, k, l \in \lbrace 0, 1 \rbrace)$ in ascending order of $(i, j, k, l)$.<br>
Let $N = \displaystyle \sum_{i=0}^1 \sum_{j=0}^1 \sum_{k=0}^1 \sum_{l=0}^1 X_{i,j,k,l}$.<br>
Find the number, modulo $998244353$, of sequences $(A_1, A_2, ..., A_{N+3})$ of length $N + 3$ consisting of $0$s and $1$s that satisfy the following condition.

- For every quadruple of integers $(i, j, k, l)$ $(i, j, k, l \in \lbrace 0, 1 \rbrace)$, there are exactly $X_{i,j,k,l}$ integers $s$ between $1$ and $N$, inclusive, that satisfy:-   - $A_s = i$, $A_{s + 1} = j$, $A_{s + 2} = k$, and $A_{s + 3} = l$.

## Constraints

- $X_{i, j, k, l}$ are all non-negative integers.
- $1 \leq \displaystyle \sum_{i=0}^1 \sum_{j=0}^1 \sum_{k=0}^1 \sum_{l=0}^1 X_{i,j,k,l} \leq 10^6$

## Input

The input is given from Standard Input in the following format:

> $X_{0,0,0,0}$ $X_{0,0,0,1}$ $X_{0,0,1,0}$ $X_{0,0,1,1}$ $X_{0,1,0,0}$ $X_{0,1,0,1}$ $X_{0,1,1,0}$ $X_{0,1,1,1}$ $X_{1,0,0,0}$ $X_{1,0,0,1}$ $X_{1,0,1,0}$ $X_{1,0,1,1}$ $X_{1,1,0,0}$ $X_{1,1,0,1}$ $X_{1,1,1,0}$ $X_{1,1,1,1}$

## Output

Print the number, modulo $998244353$, of sequences that satisfy the condition in the problem statement.

```input1
0 0 0 0 0 0 0 0 0 0 1 0 0 1 0 0
```

```output1
1
```

This input corresponds to the case where $X_{1, 0, 1, 0}$ and $X_{1, 1, 0, 1}$ are $1$ and all others are $0$.<br>
In this case, only one sequence satisfies the condition, which is $(1, 1, 0, 1, 0)$.

```input2
1 1 2 0 1 2 1 1 1 1 1 2 1 0 1 0
```

```output2
16
```

```input3
21 3 3 0 3 0 0 0 4 0 0 0 0 0 0 0
```

```output3
2024
```

```input4
62 67 59 58 58 69 57 66 67 50 68 65 59 64 67 61
```

```output4
741536606
```