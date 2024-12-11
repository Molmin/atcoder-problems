Score : $500$ points

## Problem Statement

Given is a positive integer $N$. Print an integer sequence $A = (A_1, A_2, \ldots, A_N)$ satisfying all of the following:

- $1\leq A_i\leq 10000$;
- $A_i\neq A_j$ and $\gcd(A_i, A_j) &gt; 1$ for $i\neq j$;
- $\gcd(A_1, A_2, \ldots, A_N) = 1$.

We can prove that, under the Constraints of this problem, such an integer sequence always exists.

## Constraints

- $3\leq N\leq 2500$

## Input

Input is given from Standard Input in the following format:

> $N$

## Output

Print the elements in your integer sequence $A$ satisfying the conditions in one line, with spaces in between.

> $A_1$ $A_2$ $\ldots$ $A_N$

If multiple sequences satisfy the conditions, any of them will be accepted.

```input1
4
```

```output1
84 60 105 70
```

All of the conditions are satisfied, since we have:

- $\gcd(84,60) = 12$
- $\gcd(84,105) = 21$
- $\gcd(84,70) = 14$
- $\gcd(60,105) = 15$
- $\gcd(60,70) = 10$
- $\gcd(105,70) = 35$
- $\gcd(84,60,105,70) = 1$