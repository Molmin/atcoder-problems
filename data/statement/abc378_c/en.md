Score : $300$ points

## Problem Statement

You are given a sequence of $N$ positive numbers, $A = (A_1, A_2, \dots, A_N)$. Find the sequence $B = (B_1, B_2, \dots, B_N)$ of length $N$ defined as follows.

- For $i = 1, 2, \dots, N$, define $B_i$ as follows:-   - Let $B_i$ be the most recent position before $i$ where an element equal to $A_i$ appeared. If such a position does not exist, let $B_i = -1$.&lt;br&gt;
More precisely, if there exists a positive integer $j$ such that $A_i = A_j$ and $j &amp;lt; i$, let $B_i$ be the largest such $j$. If no such $j$ exists, let $B_i = -1$.

## Constraints

- $1 \leq N \leq 2 \times 10^5$
- $1 \leq A_i \leq 10^9$
- All input values are integers.

## Input

The input is given from Standard Input in the following format:

> $N$
> 
> $A_1$ $A_2$ $\dots$ $A_N$

## Output

Print the elements of $B$ in one line, separated by spaces.

```input1
5
1 2 1 1 3
```

```output1
-1 -1 1 3 -1
```

- $i = 1$: There is no $1$ before $A_1 = 1$, so $B_1 = -1$.
- $i = 2$: There is no $2$ before $A_2 = 2$, so $B_2 = -1$.
- $i = 3$: The most recent occurrence of $1$ before $A_3 = 1$ is $A_1$, so $B_3 = 1$.
- $i = 4$: The most recent occurrence of $1$ before $A_4 = 1$ is $A_3$, so $B_4 = 3$.
- $i = 5$: There is no $3$ before $A_5 = 3$, so $B_5 = -1$.

```input2
4
1 1000000000 1000000000 1
```

```output2
-1 -1 2 1
```