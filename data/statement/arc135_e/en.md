Score : $800$ points

## Problem Statement

You are given integers $N$ and $X$. Assume that an integer sequence $A = (A_1, \ldots, A_N)$ satisfies all of the conditions below.

- $A_1 = X$.
- For every $i$ ($1\leq i\leq N$), $A_i$ is a multiple of $i$.
- $A$ is strictly increasing. In other words, $A_1 &lt; \cdots &lt; A_N$ holds.

Find the minimum possible value of $\sum_{i=1}^N A_i$, modulo $998244353$.

There are $T$ test cases, each of which should be solved.

## Constraints

- $1\leq T\leq 10$
- $1\leq N \leq 10^{18}$
- $1\leq X \leq 10^{18}$

## Input

Input is given from Standard Input from the following format:

> $T$
> 
> $\text{case}_1$
> 
> $\vdots$
> 
> $\text{case}_T$

Each case is in the following format:

> $N$ $X$

## Output

Print $T$ lines. The $i$-th line should contain the answer for $\text{case}_i$.

```input1
5
5 100
1 10
10 1
1000000000000000000 1
100 100
```

```output1
525
10
55
75433847
61074
```

Here is a sequence $A$ that minimizes $\sum_{i=1}^N A_i$ for each of the first three test cases.

- The first test case: $A = (100, 102, 105, 108, 110)$.
- The second test case: $A = (10)$.
- The third test case: $A = (1, 2, 3, 4, 5, 6, 7, 8, 9, 10)$.