Score: $100$ points

## Problem Statement

You are given $N$ integers $A_1, A_2, \dots, A_N$.
Also, define $B_i = A_i \times A_{i+1}\ (1 \leq i \leq N-1)$.

Print $B_1, B_2, \dots, B_{N-1}$ in this order, separated by spaces.

## Constraints

- $2 \leq N \leq 100$
- $1 \leq A_i \leq 100$
- All input values are integers.

## Input

The input is given from Standard Input in the following format:

> $N$
> 
> $A_1$ $A_2$ $\dots$ $A_N$

## Output

Print $B_1, B_2, \dots, B_{N-1}$ in this order, separated by spaces.

```input1
3
3 4 6
```

```output1
12 24
```

We have $B_1 = A_1 \times A_2 = 12, B_2 = A_2 \times A_3 = 24$.

```input2
5
22 75 26 45 72
```

```output2
1650 1950 1170 3240
```