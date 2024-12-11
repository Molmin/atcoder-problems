Score : $1000$ points

## Problem Statement

You are given a permutation $P_1, P_2, \dots, P_N$ of integers from $1$ to $N$.
Is it possible to split it into $2$ subsequences, which have equal length of the Longest Increasing Subsequence?

Formally speaking, your goal is to get two integer sequences $a$ and $b$ such that:

- Both $a$ and $b$ are subsequences of $P$.
- Each integer $i=1,2,\cdots,N$ appears in exactly one of $a$ and $b$.
- (The length of a longest increasing subsequence of $a$) $=$ (The length of a longest increasing subsequence of $b$)

Determine if the objective is achievable.

You will be given $T$ test cases. Solve each of them.

## Constraints

- $1 \le T \le 2 \cdot 10^5$
- $1 \le N \le 2 \cdot 10^5$
- $P_1, P_2, \dots, P_N$ is a permutation of integers from $1$ to $N$.
- The sum of $N$ over all test cases doesn't exceed $2 \cdot 10^5$.

## Input

Input is given from Standard Input in the following format.
The first line of input is as follows:

> $T$

Then, $T$ test cases follow, each of which is in the following format:

> $N$
> 
> $P_1$ $P_2$ $\dots$ $P_N$

## Output

For each test case, print `YES` if it is possible to split the permutation into $2$ subsequences, which have equal length of the Longest Increasing Subsequence, and print `NO` otherwise.
Use one line for each case.
Note that the checker is case-insensitive: you can print letters in both uppercase and lowercase.

```input1
5
1
1
2
2 1
3
1 2 3
5
1 3 5 2 4
6
2 3 4 5 6 1
```

```output1
NO
YES
NO
YES
NO
```

$[1, 3, 5, 2, 4]$ can be split into $[1, 5]$ and $[3, 2, 4]$, both have $LIS$ of length 2.

It can be shown that there is no way to split $[2, 3, 4, 5, 6, 1]$ into $2$ subsequences with an equal length of $LIS$.