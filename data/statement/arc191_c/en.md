Score : $600$ points

## Problem Statement

You are given a positive integer $N$ between $1$ and $10^9$, inclusive.

Find one pair of positive integers $(A, M)$ satisfying the following conditions. It can be proved that such a pair of integers always exists under the constraints.

- Both $A$ and $M$ are positive integers between $1$ and $10^{18}$, inclusive.
- There exists a positive integer $n$ such that $A^n - 1$ is a multiple of $M$, and the smallest such $n$ is $N$.

You are given $T$ test cases; solve each of them.

## Constraints

- $1 \le T \le 10^4$
- $1 \le N \le 10^9$
- All input values are integers.

## Input

The input is given from Standard Input in the following format:

> $T$
> 
> $\text{case}_1$
> 
> $\text{case}_2$
> 
> $\vdots$
> 
> $\text{case}_T$

Here, $\text{case}_i$ denotes the $i$-th test case.<br>
Each test case is given in the following format:

> $N$

## Output

For each test case, print a pair of positive integers $(A, M)$ in the following format:

> $A$ $M$

If there are multiple valid solutions, any one of them is considered correct.

```input1
4
3
16
1
55
```

```output1
2 7
11 68
20250126 1
33 662
```

Consider $\text{case}_1$.

For example, if we choose $(A,M)=(2,7)$, then:

- When $n=1$: $2^1 - 1 = 1$ is not a multiple of $7$.
- When $n=2$: $2^2 - 1 = 3$ is not a multiple of $7$.
- When $n=3$: $2^3 - 1 = 7$ is a multiple of $7$.

Hence, the smallest $n$ for which $A^n - 1$ is a multiple of $M$ is $3$. Therefore, $(A,M)=(2,7)$ is a correct solution. Other valid solutions include $(A,M)=(100,777)$.