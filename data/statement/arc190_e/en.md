Score : $1100$ points

## Problem Statement

You are given a length-$N$ sequence $A = (A_1, \ldots, A_N)$ of non-negative integers. Answer $Q$ queries.

In the $i$-th query, you are given integers $L_i$ and $R_i$ such that $1 \leq L_i \leq R_i \leq N$. Solve the following problem for the subsequence $B = (A_{L_i}, \ldots, A_{R_i})$ of length $R_i - L_i + 1$.

We repeat the following operation on $B$:

- Choose integers $i$ and $j$ with $1 \leq i, j \leq |B|$ such that $B_i \ge 1$, $B_j \ge 1$, and $1 \leq j - i \leq 2$. Subtract $1$ from $B_i$ and $B_j$.

Find the maximum number of times the operation can be performed.

## Constraints

- $1 \leq N \leq 200000$
- $1 \leq Q \leq 200000$
- $0 \leq A_i \leq 10^9$
- $1 \leq L_i \leq R_i \leq N$
- All input values are integers.

## Input

The input is given from Standard Input in the following format:

> $N$ $Q$
> 
> $A_1$ $\cdots$ $A_N$
> 
> $L_1$ $R_1$
> 
> $\vdots$
> 
> $L_Q$ $R_Q$

## Output

Print $Q$ lines.

The $i$-th line should contain the maximum number of times the operation can be performed for $B = (A_{L_i}, \ldots, A_{R_i})$.

```input1
6 1
1 1 4 0 3 2
1 6
```

```output1
5
```

In this example, we solve the problem for $B = (1,1,4,0,3,2)$. We can perform five operations as follows:

- Choose $i=1$ and $j=3$. Then $B = (0,1,3,0,3,2)$.
- Choose $i=2$ and $j=3$. Then $B = (0,0,2,0,3,2)$.
- Choose $i=3$ and $j=5$. Then $B = (0,0,1,0,2,2)$.
- Choose $i=5$ and $j=6$. Then $B = (0,0,1,0,1,1)$.
- Choose $i=5$ and $j=6$. Then $B = (0,0,1,0,0,0)$.

```input2
6 6
49 83 10 77 21 62
1 1
1 2
1 3
3 5
1 6
5 6
```

```output2
0
49
59
31
151
21
```