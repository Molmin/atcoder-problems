Score : $400$ points

## Problem Statement

You are given a positive integer $N$.
Print an integer sequence of length $L \coloneqq N(N+1)/2$, $A = (A_1, A_2, \ldots, A_L)$, that satisfies all of the following conditions.

- $A$ contains exactly $i$ occurrences of $i$ for every $i = 1, 2, \ldots, N$.
- $1 \leq |A_i - A_{i+1}| \leq 2$ for every $i = 1, 2, \ldots, L$. Here, $A_{L+1}$ means $A_1$.

It can be proved that, under the Constraints of this problem, there is always an integer sequence $A$ of length $L$ that satisfies all of the above conditions.

## Constraints

- $3 \leq N \leq 1000$
- $N$ is an integer.

## Input

The input is given from Standard Input in the following format:

> $N$

## Output

Print the elements of $A$, separated by spaces, in the following format:

> $A_1$ $A_2$ $\ldots$ $A_L$

If multiple integer sequences $A$ of length $L$ satisfy the conditions in the problem statement, any one of them is accepted.

```input1
4
```

```output1
1 3 4 2 4 3 4 2 4 3
```

The integer sequence $A = (1, 3, 4, 2, 4, 3, 4, 2, 4, 3)$ contains exactly one $1$, two $2$s, three $3$s, and four $4$s, satisfying the first condition.
The second condition is also satisfied, as follows:

- $|A_1 - A_2| = |1 - 3| = 2$
- $|A_2 - A_3| = |3 - 4| = 1$
- $|A_3 - A_4| = |4 - 2| = 2$
- $|A_4 - A_5| = |2 - 4| = 2$
- $|A_5 - A_6| = |4 - 3| = 1$
- $|A_6 - A_7| = |3 - 4| = 1$
- $|A_7 - A_8| = |4 - 2| = 2$
- $|A_8 - A_9| = |2 - 4| = 2$
- $|A_9 - A_{10}| = |4 - 3| = 1$
- $|A_{10} - A_1| = |3 - 1| = 2$