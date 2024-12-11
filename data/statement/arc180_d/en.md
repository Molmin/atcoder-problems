Score : $700$ points

## Problem Statement

You are given an integer sequence $A=(A_1,A_2,\cdots,A_N)$ of length $N$.
Answer the following $Q$ queries.

- The $i$-th query: You are given integers $L_i$ and $R_i$.
Solve the following problem for $B=(A_{L_i},A_{L_i+1},\cdots,A_{R_i})$.-   - Divide $B$ into three non-empty contiguous subsequences. For each contiguous subsequence, let us find the maximum value of its elements. Find the minimum possible sum of these maximum values.
Here, the constraints of the problem force the length of $B$ to be at least $3$, so there is always at least one way to divide it into three non-empty contiguous subsequences.

## Constraints

- $3 \leq N \leq 250000$
- $1 \leq Q \leq 250000$
- $1 \leq A_i \leq 10^8$
- $1 \leq L_i \leq R_i \leq N$
- $R_i - L_i \geq 2$
- All input values are integers.

## Input

The input is given from Standard Input in the following format:

> $N$ $Q$
> 
> $A_1$ $A_2$ $\cdots$ $A_N$
> 
> $L_1$ $R_1$
> 
> $L_2$ $R_2$
> 
> $\vdots$
> 
> $L_Q$ $R_Q$

## Output

Print $Q$ lines. The $i$-th line should contain the answer to the $i$-th query.

```input1
7 5
4 3 1 1 4 5 2
1 7
2 4
3 5
1 5
4 7
```

```output1
10
5
6
9
8
```

Let us explain the first query.
We have $B=(4,3,1,1,4,5,2)$.
If you divide it into $(4,3),(1,1),(4,5,2)$, the maximum values of the contiguous subsequences are $4,1,5$, respectively, and their sum is $10$.
There is no way to make this sum smaller, so the answer to this query is $10$.

```input2
10 15
8 3 8 10 1 5 3 1 6 4
4 6
2 5
6 9
8 10
2 9
4 10
1 5
1 8
1 3
4 8
1 10
2 10
6 10
2 6
2 6
```

```output2
16
14
12
11
17
17
19
14
19
14
17
17
12
16
16
```