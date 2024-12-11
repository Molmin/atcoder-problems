Score : $600$ points

## Problem Statement

You are given an integer sequence $A = (A_1, \dots, A_N)$ of length $N$.

Find the number, modulo $998244353$, of permutations $P = (P_1, \dots, P_N)$ of $(1, 2, \dots, N)$ such that:

- there exist exactly $K$ integers $i$ between $1$ and $(N-1)$ (inclusive) such that $A_{P_i} \lt A_{P_{i + 1}}$.

## Constraints

- $2 \leq N \leq 5000$
- $0 \leq K \leq N - 1$
- $1 \leq A_i \leq N \, (1 \leq i \leq N)$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$ $K$
> 
> $A_1$ $\ldots$ $A_N$

## Output

Print the answer.

```input1
4 2
1 1 2 2
```

```output1
4
```

Four permutations satisfy the condition: $P = (1, 3, 2, 4), (1, 4, 2, 3), (2, 3, 1, 4), (2, 4, 1, 3)$.

```input2
10 3
3 1 4 1 5 9 2 6 5 3
```

```output2
697112
```