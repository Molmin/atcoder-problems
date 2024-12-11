Score : $600$ points

## Problem Statement

You are given an integer sequence $A = (A_1, A_2, \dots, A_N)$ of length $N$.<br>
You can perform the following operation any number of times, possibly zero:

- Choose an integer pair $(i, j)$ satisfying $1 \leq i \lt j \leq N$, and replace $A_i$ with $A_i + 1$ and $A_j$ with $A_j - 1$.

Determine whether it is possible to make $A$ a non-decreasing sequence through the operations.

You are given $T$ test cases. Solve each of them.

## Constraints

- $1 \leq T \leq 2 \times 10^5$
- $2 \leq N \leq 2 \times 10^5$
- $0 \leq A_i \leq 10^9$
- The sum of $N$ over all test cases is at most $2 \times 10^5$.
- All input values are integers.

## Input

The input is given from Standard Input in the following format. Here, $\mathrm{case}_i$ denotes the $i$-th test case.

> $T$
> 
> $\mathrm{case}_1$
> 
> $\mathrm{case}_2$
> 
> $\vdots$
> 
> $\mathrm{case}_T$

Each test case is given in the following format:

> $N$
> 
> $A_1$ $A_2$ $\dots$ $A_N$

## Output

Print $T$ lines. The $i$-th line should contain the answer for the $i$-th test case.<br>
For each test case, if it is possible to make $A$ a non-decreasing sequence through the operations, print `Yes`; otherwise, print `No`.

```input1
3
3
1 7 5
2
9 0
10
607 495 419 894 610 636 465 331 925 724
```

```output1
Yes
No
Yes
```

In the first test case, you can make $A$ into a non-decreasing sequence by performing the following operations:

- Choose $(i, j) = (1, 2)$. After the operation, $A$ is $(2, 6, 5)$.
- Choose $(i, j) = (1, 2)$. After the operation, $A$ is $(3, 5, 5)$.

In the second test case, you cannot make $A$ into a non-decreasing sequence no matter how you perform the operations.