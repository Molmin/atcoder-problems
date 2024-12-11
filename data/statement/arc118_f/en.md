Score : $1000$ points

## Problem Statement

Given is a positive integer $M$ and a sequence of $N$ integers: $A = (A_1,A_2,\ldots,A_N)$. Find the number, modulo $998244353$, of sequences of $N+1$ integers, $X = (X_1,X_2, \ldots, X_{N+1})$, satisfying all of the following conditions:

- $1\leq X_i\leq M$ ($1\leq i\leq N+1$)
- $A_iX_i\leq X_{i+1}$ ($1\leq i\leq N$)

## Constraints

- $1\leq N\leq 1000$
- $1\leq M\leq 10^{18}$
- $1\leq A_i\leq 10^9$
- $\prod_{i=1}^N A_i \leq M$

## Input

Input is given from Standard Input in the following format:

> $N$ $M$
> 
> $A_1$ $A_2$ $\ldots$ $A_N$

## Output

Print the number of integer sequences satisfying the conditions, modulo $998244353$.

```input1
2 10
2 3
```

```output1
7
```

Seven sequences below satisfy the conditions.

- $(1, 2, 6)$, $(1,2,7)$, $(1,2,8)$, $(1,2,9)$, $(1,2,10)$, $(1,3,9)$, $(1,3,10)$

```input2
2 10
3 2
```

```output2
9
```

Nine sequences below satisfy the conditions.

- $(1, 3, 6)$, $(1, 3, 7)$, $(1, 3, 8)$, $(1, 3, 9)$, $(1, 3, 10)$, $(1, 4, 8)$, $(1, 4, 9)$, $(1, 4, 10)$, $(1, 5, 10)$

```input3
7 1000
1 2 3 4 3 2 1
```

```output3
225650129
```

```input4
5 1000000000000000000
1 1 1 1 1
```

```output4
307835847
```