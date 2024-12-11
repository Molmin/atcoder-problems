Score : $500$ points

## Problem Statement

You are given a sequence $(X_1, X_2, \dots, X_M)$ of length $M$ consisting of integers between $1$ and $M$, inclusive.

Find the number, modulo $998244353$, of sequences $A = (A_1, A_2, \dots, A_N)$ of length $N$ consisting of integers between $1$ and $M$, inclusive, that satisfy the following condition:

- For each $B = 1, 2, \dots, M$, the value $X_B$ exists between any two different occurrences of $B$ in $A$ (including both ends).

More formally, for each $B = 1, 2, \dots, M$, the following condition must hold:

- For every pair of integers $(l, r)$ such that $1 \leq l &lt; r \leq N$ and $A_l = A_r = B$, there exists an integer $m$ ($l \leq m \leq r$) such that $A_m = X_B$.

## Constraints

- $1 \leq M \leq 10$
- $1 \leq N \leq 10^4$
- $1 \leq X_i \leq M$
- All input values are integers.

## Input

The input is given from Standard Input in the following format:

> $M$ $N$
> 
> $X_1$ $X_2$ $\cdots$ $X_M$

## Output

Print the answer.

```input1
3 4
2 1 2
```

```output1
14
```

Here are examples of sequences $A$ that satisfy the condition:

- $(1, 3, 2, 3)$
- $(2, 1, 2, 1)$
- $(3, 2, 1, 3)$

Here are non-examples:

- $(1, 3, 1, 3)$-   - There is no $X_3 = 2$ between the $3$s.
- $(2, 2, 1, 3)$-   - There is no $X_2 = 1$ between the $2$s.

```input2
4 8
1 2 3 4
```

```output2
65536
```

All sequences of length $8$ consisting of integers between $1$ and $4$ satisfy the condition.

Note that when $X_B = B$, there is always a $B$ between two different occurrences of $B$.

```input3
4 9
2 3 4 1
```

```output3
628
```