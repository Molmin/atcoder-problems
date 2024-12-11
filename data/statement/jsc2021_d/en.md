Score : $400$ points

## Problem Statement

You are given a prime number $P$ not less than $2$, which you don't like.

Let's call an array of integers $A_1, A_2, \dots, A_N$ **very good** if it satisfies the following condition:

- there is no $i$ with $1 \le i \le N$ and $A_1 + A_2 + \dots + A_i \equiv 0 \bmod P$.

Consider all $(P-1)^N$ arrays of length $N$ with elements from $1$ to $P-1$. How many of them are **very good**?

As this number can be very big, output it modulo $(10^9 + 7)$.

## Constraints

- $N$ and $P$ are integers.
- $1 \leq N \leq 10^9$
- $2 \leq P \leq 10^9$

## Input

Input is given from Standard Input in the following format:

> $N$ $P$

## Output

Print the count modulo $(10^9 + 7)$.

```input1
3 3
```

```output1
2
```

Two arrays, $(1, 1, 2)$ and $(2, 2, 1)$, satisfy the condition.

```input2
3 2
```

```output2
0
```

```input3
45108 2571593
```

```output3
224219544
```