Score : $600$ points

## Problem Statement

You are given positive integers $N$ and $L$, and a sequence of positive integers $A = (A_{1}, A_{2}, \dots , A_{N})$ of length $N$.

For each $i = 1, 2, \dots , N$, answer the following question:

Determine if there exists a sequence of $L$ non-negative integers $B = (B_{1}, B_{2}, \dots, B_{L})$ such that $\displaystyle \sum_{j = 1} ^ {L - 1} \sum_{k = j + 1} ^ {L} |B_{j} - B_{k}| = A_{i}$. If it exists, find the minimum value of $\max(B)$ for such a sequence $B$.

## Constraints

- $1 \leq N \leq 2 \times 10^{5}$
- $2 \leq L \leq 2 \times 10^{5}$
- $1 \leq A_{i} \leq 2 \times 10^{5}$
- All input values are integers.

## Input

The input is given from Standard Input in the following format:

> $N$ $L$
> 
> $A_{1}$ $A_{2}$ $\cdots$ $A_{N}$

## Output

Print $N$ lines. The $k$-th line should contain `-1` if no sequence $B$ satisfies the condition for $i=k$; otherwise, it should contain the minimum value of $\max(B)$ for such a sequence $B$.

```input1
2 4
10 5
```

```output1
3
-1
```

For $A_{1} = 10$,
if we take $B = (1, 0, 2, 3)$, then $\displaystyle \sum_{j = 1} ^ {L - 1} \sum_{k = j + 1} ^ {L} |B_{j} - B_{k}| = 10$, where $\max(B) = 3$.
No non-negative integer sequence $B$ satisfies the condition with $\max(B) &lt; 3$, so print $3$ in the first line.

For $A_{2} = 5$,
there is no non-negative integer sequence $B$ that satisfies the condition, so print `-1` in the second line.

```input2
6 8
167 924 167167 167924 116677 154308
```

```output2
11
58
10448
10496
7293
9645
```