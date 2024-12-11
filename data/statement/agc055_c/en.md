Score : $900$ points

## Problem Statement

You are given integers $N$ and $M$.
Find the number of arrays $A=[A_1, A_2, \ldots, A_N]$ of length $N$ such that the following conditions hold:

- $2 \le A_i \le M$ ($1 \leq i \leq N$)
- There exists a permutation $P=[P_1,P_2,\ldots,P_N]$ of integers from $1$ to $N$ with the following property:-   - For every $i$ from $1$ to $N$, $A_i$ equals the length of the longest increasing subsequence of the sequence $[P_1, P_2, \ldots, P_{i-1}, P_{i+1}, \ldots, P_{N-1}, P_N]$.

As this number can be very large, output it modulo some prime $Q$.

## Constraints

- $3 \le N \le 5000$.
- $2 \le M \le N-1$.
- $10^8 \le Q \le 10^9$
- $Q$ is a prime.

## Input

Input is given from Standard Input in the following format:

> $N$ $M$ $Q$

## Output

Print the answer modulo $Q$.

```input1
3 2 686926217
```

```output1
1
```

The only such array is $[2, 2, 2]$, for which exists a permutation $[1, 2, 3]$.

```input2
4 3 354817471
```

```output2
9
```

There are $9$ such arrays: $[2, 2, 2, 2]$, $[2, 2, 2, 3]$, $[2, 2, 3, 2]$, $[2, 2, 3, 3]$, $[2, 3, 2, 2]$, $[2, 3, 3, 2]$, $[3, 2, 2, 2]$, $[3, 3, 2, 2]$, $[3, 3, 3, 3]$.

```input3
5 2 829412599
```

```output3
1
```

The only such array is $[2, 2, 2, 2, 2]$.

```input4
5 3 975576997
```

```output4
23
```

```input5
69 42 925171057
```

```output5
801835311
```