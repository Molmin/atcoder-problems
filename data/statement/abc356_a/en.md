Score : $100$ points

## Problem Statement

You are given positive integers $N$, $L$, and $R$.<br>
For a sequence $A = (1, 2, \dots, N)$ of length $N$, an operation of reversing the $L$-th through $R$-th elements was performed once.<br>
Print the sequence after this operation.

## Constraints

- All input values are integers.
- $1 \leq L \leq R \leq N \leq 100$

## Input

The input is given from Standard Input in the following format:

> $N$ $L$ $R$

## Output

Let $A' = (A'_1, A'_2, \dots, A'_N)$ be the sequence after the operation. Print it in the following format:

> $A'_1$ $A'_2$ $\dots$ $A'_N$

```input1
5 2 3
```

```output1
1 3 2 4 5
```

Initially, $A = (1, 2, 3, 4, 5)$.<br>
After reversing the second through third elements, the sequence becomes $(1, 3, 2, 4, 5)$, which should be printed.

```input2
7 1 1
```

```output2
1 2 3 4 5 6 7
```

It is possible that $L = R$.

```input3
10 1 10
```

```output3
10 9 8 7 6 5 4 3 2 1
```

It is possible that $L = 1$ or $R = N$.