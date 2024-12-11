Score : $1100$ points

## Problem Statement

You are given positive integers $S$ and $K$. A sequence of positive integers $A = (A_1, A_2, \ldots, A_N)$ is said to be a **good sequence** when satisfying the following two conditions.

- $1\leq A_1 &lt; A_2 &lt; \cdots &lt; A_N \leq S - 1$ holds.
- $\sum_{i=1}^NA_ix_i\neq S$ holds for any sequence of non-negative integers $(x_1, x_2, \ldots, x_N)$.

Let $A = (A_1, A_2, \ldots, A_N)$ be the lexicographically smallest of the good sequences with the maximum number $N$ of terms. Print the $K$-th term $A_K$ of this sequence, or `-1` if $K &gt; N$.

We will give you $T$ test cases; solve each of them.

## Constraints

- $1\leq T\leq 1000$
- $3\leq S\leq 10^{18}$
- $1\leq K \leq S - 1$

## Input

Input is given from Standard Input in the following format:

> $T$
> 
> $\text{case}_1$
> 
> $\vdots$
> 
> $\text{case}_T$

Each case is in the following format:

> $S$ $K$

## Output

Print $T$ lines. The $i$-th line should contain the answer for $\text{case}_i$.

```input1
13
3 1
3 2
7 1
7 2
7 3
7 4
10 1
10 2
10 3
10 4
10 5
2022 507
1000000000000000000 999999999999999999
```

```output1
2
-1
2
4
6
-1
3
6
8
9
-1
1351
-1
```

For the cases $S = 3, 7, 10$, the sequence $A$ will be as follows.

- For $S=3$: $A = (2)$.
- For $S=7$: $A = (2,4,6)$.
- For $S=10$: $A = (3,6,8,9)$.