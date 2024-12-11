Score : $700$ points

## Problem Statement

Given is a sequence of $N$ integers $A_1,A_2,\ldots,A_N$. Print the number, modulo $998244353$, of sequences of $N$ integers $X_1,X_2,\ldots,X_N$ satisfying all of the following conditions:

- $1 \leq X_i \leq A_i$
- $X_i \neq X_{i+1} (1 \leq i \leq N-1)$

## Constraints

- $2 \leq N \leq 5 \times 10^5$
- $1 \leq A_i \leq 10^9$

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $A_1$ $A_2$ $\ldots$ $A_N$

## Output

Print the answer.

```input1
3
2 3 2
```

```output1
6
```

The following six sequences satisfy all of the conditions.

- $1,2,1$
- $1,3,1$
- $1,3,2$
- $2,1,2$
- $2,3,1$
- $2,3,2$

```input2
10
158260522 877914575 602436426 24979445 861648772 623690081 433933447 476190629 262703497 211047202
```

```output2
524691026
```