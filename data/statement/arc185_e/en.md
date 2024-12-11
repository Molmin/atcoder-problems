Score : $800$ points

## Problem Statement

Define the **score** of a sequence of positive integers $B = (B_1, B_2, \dots, B_k)$ as $\displaystyle \sum_{i=1}^{k-1} \gcd(B_i, B_{i+1})$.<br>
Given a sequence of positive integers $A = (A_1, A_2, \dots, A_N)$, solve the following problem for $m = 1, 2, \dots, N$.

- There are $2^m - 1$ non-empty subsequences of the sequence $(A_1, A_2, \dots, A_m)$. Find the sum of the scores of all those subsequences, modulo $998244353$. Two subsequences are distinguished if they are taken from different positions in the sequence, even if they coincide as sequences.

## Constraints

- $1 \leq N \leq 5 \times 10^5$
- $1 \leq A_i \leq 10^5$
- All input values are integers.

## Input

The input is given from Standard Input in the following format:

> $N$
> 
> $A_1$ $A_2$ $\dots$ $A_N$

## Output

Print $N$ lines. The $i$-th line should contain the answer for $m = i$.

```input1
3
9 6 4
```

```output1
0
3
11
```

Consider the case $m = 3$. Here are the non-empty subsequences of $(A_1, A_2, A_3) = (9, 6, 4)$ and their scores.

- $(9)$: Score is $0$.
- $(6)$: Score is $0$.
- $(4)$: Score is $0$.
- $(9, 6)$: Score is $\gcd(9, 6) = 3$.
- $(9, 4)$: Score is $\gcd(9, 4) = 1$.
- $(6, 4)$: Score is $\gcd(6, 4) = 2$.
- $(9, 6, 4)$: Score is $\gcd(9, 6) + \gcd(6, 4) = 3 + 2 = 5$.

Therefore, the answer for $m = 3$ is $0 + 0 + 0 + 3 + 1 + 2 + 5 = 11$.

```input2
5
3 8 12 6 9
```

```output2
0
1
13
57
155
```

```input3
10
47718 21994 74148 76721 98917 73766 29598 59035 69293 29127
```

```output3
0
2
14
35
97
372
866
1859
4273
43287
```