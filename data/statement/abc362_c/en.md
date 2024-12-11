Score : $350$ points

## Problem Statement

You are given $N$ pairs of integers $(L_1, R_1), (L_2, R_2), \ldots, (L_N, R_N)$.

Determine whether there exists a sequence of $N$ integers $X = (X_1, X_2, \ldots, X_N)$ that satisfies the following conditions, and print one such sequence if it exists.

- $L_i \leq X_i \leq R_i$ for each $i = 1, 2, \ldots, N$.
- $\displaystyle \sum_{i=1}^N X_i = 0$.

## Constraints

- $1 \leq N \leq 2 \times 10^5$
- $-10^9 \leq L_i \leq R_i \leq 10^9$
- All input values are integers.

## Input

The input is given from Standard Input in the following format:

> $N$
> 
> $L_1$ $R_1$
> 
> $L_2$ $R_2$
> 
> $\vdots$
> 
> $L_N$ $R_N$

## Output

If no solution exists, print `No`. Otherwise, print an integer sequence $X$ that satisfies the conditions in the following format:

> Yes
> 
> $X_1$ $X_2$ $\ldots$ $X_N$

If multiple solutions exist, any of them will be considered correct.

```input1
3
3 5
-4 1
-2 3
```

```output1
Yes
4 -3 -1
```

The sequence $X = (4, -3, -1)$ satisfies all the conditions. Other valid sequences include $(3, -3, 0)$ and $(5, -4, -1)$.

```input2
3
1 2
1 2
1 2
```

```output2
No
```

No sequence $X$ satisfies the conditions.

```input3
6
-87 12
-60 -54
2 38
-76 6
87 96
-17 38
```

```output3
Yes
-66 -57 31 -6 89 9
```