Score : $700$ points

## Problem Statement

Given is a sequence of integers $A = (A_1, \ldots, A_N)$.

Consider a pair of sequences of integers $B = (B_1, \ldots, B_N)$ and $C = (C_1, \ldots, C_N)$ that satisfies the following conditions:

- $A_i = B_i + C_i$ holds for each $1\leq i\leq N$;
- $B$ is non-decreasing, that is, $B_i\leq B_{i+1}$ holds for each $1\leq i\leq N-1$;
- $C$ is non-increasing, that is, $C_i\geq C_{i+1}$ holds for each $1\leq i\leq N-1$.

Find the minimum possible value of $\sum_{i=1}^N \bigl(\lvert B_i\rvert + \lvert C_i\rvert\bigr)$. 

## Constraints

- $1\leq N\leq 2\times 10^5$
- $-10^8\leq A_i\leq 10^8$

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $A_1$ $A_2$ $\ldots$ $A_N$

## Output

Print the answer.

```input1
3
1 -2 3
```

```output1
10
```

One pair of sequences $B = (B_1, \ldots, B_N)$ and $C = (C_1, \ldots, C_N)$ that yields the minimum value is:

- $B = (0, 0, 5)$,
- $C = (1, -2, -2)$.

Here we have $\sum_{i=1}^N \bigl(\lvert B_i\rvert + \lvert C_i\rvert\bigr) = (0+1) + (0+2) + (5+2) = 10$.

```input2
4
5 4 3 5
```

```output2
17
```

One pair of sequences $B$ and $C$ that yields the minimum value is:

- $B = (0, 1, 2, 4)$,
- $C = (5, 3, 1, 1)$.

```input3
1
-10
```

```output3
10
```

One pair of sequences $B$ and $C$ that yields the minimum value is:

- $B = (-3)$,
- $C = (-7)$.