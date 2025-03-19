Score : $500$ points

## Problem Statement

The digit sum of a positive integer $n$ is defined as the sum of its digits when $n$ is written in decimal. For example, the digit sum of $2025$ is $2 + 0 + 2 + 5 = 9$.<br>
A positive integer $n$ is called a **good integer** if it is divisible by its digit sum. For example, $2025$ is a good integer because it is divisible by its digit sum of $9$.<br>
A pair of positive integers $(a, a+1)$ is called **twin good integers** if both $a$ and $a+1$ are good integers. For example, $(2024, 2025)$ is twin good integers.

You are given a positive integer $N$. Find a pair of twin good integers $(a, a + 1)$ such that $N \leq a$ and $a + 1 \leq 2N$. If no such pair exists, report that fact.

## Constraints

- $N$ is an integer at least $1$ and less than $10^{100000}$.

## Input

The input is given from Standard Input in the following format:

> $N$

## Output

If there exists such a pair $(a, a+1)$, output $a$. Otherwise, output `-1`. Do not print leading zeros.<br>
If there are multiple such pairs, you may print any.

```input1
5
```

```output1
8
```

$(8, 9)$ is a valid pair of twin good integers satisfying the conditions. Other examples include $(5, 6), (6, 7), (7, 8), (9, 10)$.

```input2
21
```

```output2
-1
```

No pair of twin good integers satisfies the conditions.

```input3
1234
```

```output3
2024
```

$(2024, 2025)$ is a valid pair of twin good integers.

```input4
1234567890123456789012345678901234567890
```

```output4
1548651852734633803438094164372911259190
```