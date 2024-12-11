Score : $600$ points

## Problem Statement

You are given a length-$N$ sequence $(A_1, A_2, \ldots, A_N)$ of positive integers, and $Q$ queries about the sequence.

For each $q = 1, 2, \ldots, Q$, the $q$-th query gives you an integer pair $(l_q, r_q)$;<br>
print the number of integer triplets $(i, j, k)$ such that

- $l_q \leq i \lt j \lt k \leq r_q$, and
- $A_i = A_j = A_k$.

## Constraints

- $1 \leq N \leq 2 \times 10^5$
- $1 \leq Q \leq 2 \times 10^5$
- $1 \leq A_i \leq 2 \times 10^5$
- $1 \leq l_q \leq r_q \leq N$
- All values in the input are integers.

## Input

The input is given from Standard Input in the following format:

> $N$ $Q$
> 
> $A_1$ $A_2$ $\ldots$ $A_N$
> 
> $l_1$ $r_1$
> 
> $l_2$ $r_2$
> 
> $\vdots$
> 
> $l_Q$ $r_Q$

## Output

Print $Q$ lines.
For $q = 1, 2, \ldots, Q$, the $q$-th line should contain the answer to the $q$-th query.

```input1
10 4
2 7 1 8 2 8 1 8 2 8
1 10
1 9
2 10
5 5
```

```output1
5
2
4
0
```

For the first query, there are five triplets of integers that satisfy the conditions in the problem statement:
$(1, 5, 9), (4, 6, 8), (4, 6, 10), (4, 8, 10)$, and $(6, 8, 10)$.

```input2
20 10
2 2 2 2 1 1 2 2 1 1 1 2 1 2 1 2 2 1 2 1
12 16
17 18
12 18
4 9
13 13
2 5
6 13
2 14
7 14
8 12
```

```output2
1
0
5
2
0
1
11
55
8
1
```