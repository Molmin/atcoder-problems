Score: $800$ points

## Problem Statement

Determine whether there is a positive integer $n$ such that the remainder of $n^n$ divided by $10^9$ is $X$. If it exists, find the smallest such $n$.

You will be given $Q$ test cases to solve.

## Constraints

- $1 \leq Q \leq 10000$
- $1 \leq X \leq 10^9 - 1$
- <span style="color:red">$X$ is neither a multiple of $2$ nor a multiple of $5$.</span>
- All input values are integers.

## Input

The input is given from Standard Input in the following format, where $X_i$ is the value of $X$ in the $i$-th test case $(1 \leq i \leq Q)$:

> $Q$
> 
> $X_1$
> 
> $X_2$
> 
> $\vdots$
> 
> $X_Q$

## Output

Print $Q$ lines. The $i$-th line should contain the answer for the $i$-th test case. If no $n$ satisfies the condition, the answer should be $-1$.

```input1
2
27
311670611
```

```output1
3
11
```

This sample input consists of two test cases.

- The first case: The remainder of $3^3 = 27$ divided by $10^9$ is $27$, so $n = 3$ satisfies the condition.
- The second case: The remainder of $11^{11} = 285311670611$ divided by $10^9$ is $311670611$, so $n = 11$ satisfies the condition.