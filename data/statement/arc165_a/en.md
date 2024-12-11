Score : $400$ points

## Problem Statement

You are given a positive integer $N$.

Determine if there are two or more (not necessarily distinct) positive integers $A_1,A_2,\dots,A_n\ (2 \leq n)$ that satisfy all of the following conditions:

- $A_1+A_2+\dots+A_n=N$.
- The least common multiple of $A_1,A_2,\dots,A_n$ is $N$.

You have $T$ test cases to solve.

## Constraints

- $1 \leq T \leq 100$
- $2 \leq N \leq 10^{9}$
- All input values are integers.

## Input

The input is given from Standard Input in the following format:

> $T$
> 
> $\mathrm{case}_1$
> 
> $\vdots$
> 
> $\mathrm{case}_T$

Each case is given in the following format:

> $N$

## Output

Print $T$ lines. The $i$-th line should contain `Yes` if some integers satisfy the conditions for the $i$-th test case, and `No` otherwise.

```input1
4
6
4
998244353
367291763
```

```output1
Yes
No
No
Yes
```

For the first test case, three positive integers $(A_1,A_2,A_3)=(1,2,3)$, for example, have $A_1+A_2+A_3=1+2+3=6$, and the least common multiple of $A_1,A_2,A_3$ is $6$, satisfying the conditions.

For the second test case, no two or more positive integers satisfy the conditions.