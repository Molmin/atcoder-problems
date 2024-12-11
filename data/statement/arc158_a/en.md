Score : $300$ points

## Problem Statement

You are given integers $x_1$, $x_2$, and $x_3$. For these integers, you can perform the following operation any number of times, possibly zero.

- Choose a permutation $(i,j,k)$ of $(1,2,3)$, that is, a triple of integers $(i,j,k)$ such that $1\leq i,j,k\leq 3$ and $i\neq j, i\neq k, j\neq k$.
- Then, simultaneously replace $x_i$ with $x_i+3$, $x_j$ with $x_j+5$, and $x_k$ with $x_k+7$.

Your objective is to satisfy $x_1=x_2=x_3$. Determine whether it is achievable. If it is, print the minimum number of times you need to perform the operation to achieve it.

You have $T$ test cases to solve.

## Constraints

- $1\leq T\leq 2\times 10^5$
- $1\leq x_1, x_2, x_3 \leq 10^9$

## Input

The input is given from Standard Input in the following format:

> $T$
> 
> $\text{case}_1$
> 
> $\vdots$
> 
> $\text{case}_T$

Each test case is in the following format:

> $x_1$ $x_2$ $x_3$

## Output

Print $T$ lines. The $i$-th line should contain the following value for the $i$-th test case.

- The minimum number of times you need to perform the operation to satisfy $x_1=x_2=x_3$, if it is possible to satisfy this.
- $-1$, otherwise.

```input1
4
2 8 8
1 1 1
5 5 10
10 100 1000
```

```output1
2
0
-1
315
```

For the first test case, you can do the following to satisfy $x_1=x_2=x_3$.

- Perform the operation with $(i,j,k) = (3,2,1)$, replacing $(x_1,x_2,x_3)$ with $(9,13,11)$.
- Perform the operation with $(i,j,k) = (2,3,1)$, replacing $(x_1,x_2,x_3)$ with $(16,16,16)$.