Score : $300$ points

## Problem Statement

Given is a positive integer $N$, where none of the digits is $0$.<br>
Let $k$ be the number of digits in $N$. We want to make a multiple of $3$ by erasing at least $0$ and at most $k-1$ digits from $N$ and concatenating the remaining digits without changing the order.<br>
Determine whether it is possible to make a multiple of $3$ in this way. If it is possible, find the minimum number of digits that must be erased to make such a number.

## Constraints

- $1 \le N \lt 10^{18}$
- None of the digits in $N$ is $0$.

## Input

Input is given from Standard Input in the following format:

> $N$

## Output

If it is impossible to make a multiple of $3$, print `-1`; otherwise, print the minimum number of digits that must be erased to make such a number.

```input1
35
```

```output1
1
```

By erasing the $5$, we get the number $3$, which is a multiple of $3$. Here we erased the minimum possible number of digits - $1$.

```input2
369
```

```output2
0
```

Note that we can choose to erase no digit.

```input3
6227384
```

```output3
1
```

For example, by erasing the $8$, we get the number $622734$, which is a multiple of $3$.

```input4
11
```

```output4
-1
```

Note that we must erase at least $0$ and at most $k-1$ digits, where $k$ is the number of digits in $N$, so we cannot erase all the digits.<br>
In this case, it is impossible to make a multiple of $3$ in the way described in the problem statement, so we should print `-1`.