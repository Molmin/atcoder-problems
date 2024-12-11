Score : $600$ points

## Problem Statement

You are given $N$ integers $A_1,\ldots,A_N$ and a prime number $P$. Find the number of pairs of integers $(i,j)$ that satisfy both of the following conditions:

- $1 \leq i,j \leq N$;
- There is a positive integer $k$ such that $A_i^k \equiv A_j \mod P$.

## Constraints

- $2 \leq N \leq 2 \times 10^5$
- $1 \leq A_i &lt; P$
- $2 \leq P \leq 10^{13}$
- $P$ is prime.
- All input values are integers.

## Input

The input is given from Standard Input in the following format:

> $N$ $P$
> 
> $A_1$ $\ldots$ $A_N$

## Output

Print the answer.

```input1
3 13
2 3 5
```

```output1
5
```

Five pairs satisfy the conditions: $(1,1),(1,2),(1,3),(2,2),(3,3)$.

For example, for the pair $(1,3)$, if we take $k=9$, then $A_1^9 = 512 \equiv 5 = A_3 \mod 13$.

```input2
5 2
1 1 1 1 1
```

```output2
25
```

```input3
10 9999999999971
141592653589 793238462643 383279502884 197169399375 105820974944 592307816406 286208998628 34825342117 67982148086 513282306647
```

```output3
63
```