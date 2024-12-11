Score : $475$ points

## Problem Statement

You are given sequences of length $N$: $A = (A_1, A_2, \dots, A_N)$ and $B = (B_1, B_2, \dots, B_N)$.<br>
Let $S$ be a subset of $\lbrace1, 2, \dots, N\rbrace$ of size $K$.
Here, find the minimum possible value of the following expression:

$\displaystyle \left(\max_{i \in S} A_i\right) \times \left(\sum_{i \in S} B_i\right).$

You are given $T$ test cases; solve each of them.

## Constraints

- $1 \leq T \leq 2 \times 10^5$
- $1 \leq K \leq N \leq 2 \times 10^5$
- $1 \leq A_i, B_i \leq 10^6$
- The sum of $N$ over all test cases is at most $2 \times 10^5$.
- All input values are integers.

## Input

The input is given from Standard Input in the following format. Here, $\mathrm{case}_i$ denotes the $i$-th test case.

> $T$
> 
> $\mathrm{case}_1$
> 
> $\mathrm{case}_2$
> 
> $\vdots$
> 
> $\mathrm{case}_T$

Each test case is given in the following format:

> $N$ $K$
> 
> $A_1$ $A_2$ $\dots$ $A_N$
> 
> $B_1$ $B_2$ $\dots$ $B_N$

## Output

Print $T$ lines. The $i$-th line should contain the answer for the $i$-th test case.

```input1
3
3 2
3 7 6
9 2 4
5 3
6 4 1 5 9
8 6 5 1 7
10 6
61 95 61 57 69 49 46 47 14 43
39 79 48 92 90 76 30 16 30 94
```

```output1
42
60
14579
```

In the first test case, for $S = \{2, 3\}$, the value of the expression is $7 \times (2 + 4) = 42$, which is the minimum.