Score : $100$ points

## Problem Statement

You are given $N$ pairs of integers: $(A_1, B_1), (A_2, B_2), \ldots, (A_N, B_N)$.
For each $i = 1, 2, \ldots, N$, print $A_i + B_i$.

## Constraints

- $1 \leq N \leq 1000$
- $-10^9 \leq A_i, B_i \leq 10^9$
- All values in the input are integers.

## Input

The input is given from Standard Input in the following format:

> $N$
> 
> $A_1$ $B_1$
> 
> $A_2$ $B_2$
> 
> $\vdots$
> 
> $A_N$ $B_N$

## Output

Print $N$ lines.
For $i = 1, 2, \ldots, N$, the $i$-th line should contain $A_i+B_i$.

```input1
4
3 5
2 -6
-5 0
314159265 123456789
```

```output1
8
-4
-5
437616054
```

- The first line should contain $A_1 + B_1 = 3 + 5 = 8$.
- The second line should contain $A_2 + B_2 = 2 + (-6) = -4$.
- The third line should contain $A_3 + B_3 = (-5) + 0 = -5$.
- The fourth line should contain $A_4 + B_4 = 314159265 + 123456789 = 437616054$.