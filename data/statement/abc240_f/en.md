Score : $500$ points

## Problem Statement

There are integer sequences $A, B, C$ of length $M$ each.

$C$ is represented by integers $x_1, \dots, x_N, y_1, \dots, y_N$. The first $y_1$ terms of $C$ are $x_1$, the subsequent $y_2$ terms are $x_2$, $\ldots$, the last $y_N$ terms are $x_N$.

$B$ is defined by $B_i = \sum_{k = 1}^i C_k \, (1 \leq i \leq M)$.

$A$ is defined by $A_i = \sum_{k = 1}^i B_k \, (1 \leq i \leq M)$.

Find the maximum value among $A_1, \dots, A_M$.

You will be given $T$ test cases to solve.

## Constraints

- $1 \leq T \leq 2 \times 10^5$
- $1 \leq N \leq 2 \times 10^5$
- The sum of $N$ in a single file is at most $2 \times 10^5$.
- $1 \leq M \leq 10^9$
- $|x_i| \leq 4 \, (1 \leq i \leq N)$
- $y_i \gt 0 \, (1 \leq i \leq N)$
- $\sum_{k = 1}^N y_k = M$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $T$
> 
> $\mathrm{case}_1$
> 
> $\vdots$
> 
> $\mathrm{case}_T$

Each case is in the following format:

> $N$ $M$
> 
> $x_1$ $y_1$
> 
> $\vdots$
> 
> $x_N$ $y_N$

## Output

Print $T$ lines. The $i$-th line $(1 \leq i \leq T)$ should contain the answer to the $i$-th test case.

```input1
3
3 7
-1 2
2 3
-3 2
10 472
-4 12
1 29
2 77
-1 86
0 51
3 81
3 17
-2 31
-4 65
4 23
1 1000000000
4 1000000000
```

```output1
4
53910
2000000002000000000
```

In the first test case, we have:

- $C = (-1, -1, 2, 2, 2, -3, -3)$
- $B = (-1, -2, 0, 2, 4, 1, -2)$
- $A = (-1, -3, -3, -1, 3, 4, 2)$

Thus, the maximum value among $A_1, \dots, A_M$ is $4$.