Score : $700$ points

## Problem Statement

You are given positive integers $N$, $M$, and $K$. Consider the following operation on a sequence of positive integers $A = (A_0, \ldots, A_{N-1})$.

- Do the following for $k=0, 1, \ldots, K-1$ in this order.-   - Sort $A_{k\bmod N}, A_{(k+1)\bmod N}, \ldots, A_{(k+M-1)\bmod N}$ in ascending order. That is, replace $A_{(k+j)\bmod N}$ with $x_j$ for each $0\leq j &amp;lt; M$, where $(x_0, \ldots, x_{M-1})$ is the result of sorting $A_{k\bmod N}, A_{(k+1)\bmod N}, \ldots, A_{(k+M-1)\bmod N}$ in ascending order.

You are given a permutation $B = (B_0, \ldots, B_{N-1})$ of the integers from $1$ through $N$. Find the number of sequences $A$ of positive integers that will equal $B$ after performing the operation above, modulo $998244353$.

## Constraints

- $2\leq N\leq 3\times 10^5$
- $2\leq M\leq N$
- $1\leq K\leq 10^9$
- $1\leq B_i\leq N$
- $B_i\neq B_j$ if $i\neq j$.

## Input

The input is given from Standard Input in the following format:

> $N$ $M$ $K$
> 
> $B_0$ $\ldots$ $B_{N-1}$

## Print

Print the number of sequences $A$ of positive integers that will equal $B$ after performing the operation, modulo $998244353$.

```input1
6 3 5
6 4 2 3 1 5
```

```output1
18
```

For instance, $A = (4,1,5,6,2,3)$ satisfies the condition. On this $A$, the operation will proceed as follows.

- The action for $k=0$ changes $A$ to $(1,4,5,6,2,3)$.
- The action for $k=1$ changes $A$ to $(1,4,5,6,2,3)$.
- The action for $k=2$ changes $A$ to $(1,4,2,5,6,3)$.
- The action for $k=3$ changes $A$ to $(1,4,2,3,5,6)$.
- The action for $k=4$ changes $A$ to $(6,4,2,3,1,5)$, which equals $B$.

```input2
6 3 5
6 5 4 3 2 1
```

```output2
0
```

No sequence $A$ satisfies the condition.

```input3
20 20 149
13 14 15 16 17 18 19 20 1 2 3 4 5 6 7 8 9 10 11 12
```

```output3
401576539
```

All permutations of the integers from $1$ through $20$ satisfy the condition.