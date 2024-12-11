Score : $475$ points

## Problem Statement

You are given a sequence $A = (A_1, A_2, \dots, A_N)$ of $N$ non-negative integers, and a positive integer $M$.

Find the following value:

\[
\sum_{1 \leq l \leq r \leq N} \left( \left(\sum_{l \leq i \leq r} A_i\right) \mathbin{\mathrm{mod}} M \right).
\]

Here, $X \mathbin{\mathrm{mod}} M$ denotes the remainder when the non-negative integer $X$ is divided by $M$.

## Constraints

- $1 \leq N \leq 2 \times 10^5$
- $1 \leq M \leq 2 \times 10^5$
- $0 \leq A_i \leq 10^9$

## Input

The input is given from Standard Input in the following format:

> $N$ $M$
> 
> $A_1$ $A_2$ $\dots$ $A_N$

## Output

Print the answer.

```input1
3 4
2 5 0
```

```output1
10
```

- $A_1 \mathbin{\mathrm{mod}} M = 2$
- $(A_1+A_2) \mathbin{\mathrm{mod}} M = 3$
- $(A_1+A_2+A_3) \mathbin{\mathrm{mod}} M = 3$
- $A_2 \mathbin{\mathrm{mod}} M = 1$
- $(A_2+A_3) \mathbin{\mathrm{mod}} M = 1$
- $A_3 \mathbin{\mathrm{mod}} M = 0$

The answer is the sum of these values, $10$. Note that the outer sum is not taken modulo $M$.

```input2
10 100
320 578 244 604 145 839 156 857 556 400
```

```output2
2736
```