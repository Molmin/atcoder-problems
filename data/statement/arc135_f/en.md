Score : $1000$ points

## Problem Statement

You are given an integer $N$. On an integer sequence $A = (1, 2, \ldots, N)$, let us do the operation below exactly $K$ times.

- Let $n$ be the current number of terms in $A$. For all $i$ such that $1\leq i \leq n$ and $i\equiv 1\pmod{3}$, delete the $i$-th term of $A$, simultaneously.

Find the sum of the terms of $A$ after $K$ operations, modulo $998244353$.

## Constraints

- $1\leq N\leq 10^{14}$
- $1\leq K\leq 100$

## Input

Input is given from Standard Input from the following format:

> $N$ $K$

## Output

Print the sum of the terms of $A$ after $K$ operations, modulo $998244353$.

```input1
10 2
```

```output1
25
```

- Initially, we have $A = (1, 2, 3, 4, 5, 6, 7, 8, 9, 10)$.
- After the first operation, we have $A = (2, 3, 5, 6, 8, 9)$.
- After the second operation, we have $A = (3, 5, 8, 9)$.
- The sum of the terms here is $3 + 5 + 8 + 9 = 25$.

```input2
10 10
```

```output2
0
```

- After the second operation, we have $A = (3, 5, 8, 9)$ (same as Sample Input 1).
- After the third operation, we have $A = (5, 8)$.
- After the fourth operation, we have $A = (8)$.
- After the fifth operation, $A$ is empty.
- In the sixth and subsequent operations, $A$ remains empty, where the sum of the terms is $0$.

```input3
10000 10
```

```output3
862816
```