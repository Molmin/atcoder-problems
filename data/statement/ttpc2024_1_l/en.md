Score: $100$ points

## Problem Statement

In this problem, when we refer to a "permutation of length $K$", we mean a permutation of $(0, 1, \dots, K - 1)$. Also, we denote the $k$-th element ($0$-based) of a sequence $X$ as $X[k]$.

You are given a permutation $P$ of length $L$, and $L$ permutations of length $B$, denoted as $V_{0}, V_{1}, \dots, V_{L - 1}$.<br>
We define a sequence $A$ of length $B^L$ as follows:

For each $0 \leq n < B^L$, when $n$ is represented as an $L$-digit number in base $B$, let $N[i]$ be the value at the $B^i$ place ($0 \leq i < L$). Then,

$\displaystyle A[n] = \sum_{i=0}^{L-1} V_i[N[i]] \cdot B^{P[i]}$

Find the inversion number of the sequence $A$ modulo $998244353$.

## Constraints

- All input values are integers
- $1 \leq L$
- $2 \leq B$
- $L \times (B + 1) \leq 5 \times 10^{5}$
- $P$ is a permutation of length $L$
- For each $0 \leq i &lt; L$, $V_{i}$ is a permutation of length $B$

## Input

Input is given from standard input in the following format:

> $L$ $B$
> 
> $P[0]$ $P[1]$ $\cdots$ $P[L - 1]$
> 
> $V_{0}[0]$ $V_{0}[1]$ $\cdots$ $V_{0}[B - 1]$
> 
> $\vdots$
> 
> $V_{L - 1}[0]$ $V_{L - 1}[1]$ $\cdots$ $V_{L - 1}[B - 1]$

## Output

Print the answer.

```input1
3 2
2 0 1
1 0
1 0
0 1
```

```output1
14
```

For example, when $n = 5$, since $N = (1, 0, 1)$, we have $A[5] = V_{0}[1] \cdot 2^{P[0]} + V_{1}[0] \cdot 2^{P[1]} + V_{2}[1] \cdot 2^{P[2]}=3$.<br>
By calculating similarly, we get $A = (5, 1, 4, 0, 7, 3, 6, 2)$. The inversion count of $A$ is $14$, so output $14$.

```input2
2 4
1 0
2 0 3 1
1 2 3 0
```

```output2
60
```

$A = (9, 1, 13, 5, 10, 2, 14, 6, 11, 3, 15, 7, 8, 0, 12, 4)$. The inversion count of $A$ is $60$, so output $60$.

```input3
9 10
2 5 7 3 8 1 4 6 0
9 2 4 0 1 6 7 3 5 8
4 1 6 7 8 0 5 9 2 3
1 9 2 4 6 8 5 7 0 3
9 0 8 2 5 1 6 7 3 4
1 6 0 7 3 9 2 4 5 8
4 5 2 9 1 6 7 3 0 8
7 0 5 6 1 9 2 4 3 8
3 2 1 6 7 0 8 9 4 5
9 2 4 3 5 8 0 6 7 1
```

```output3
138876070
```

Output the answer modulo $998244353$.