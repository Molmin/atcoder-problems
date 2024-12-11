Score : $1000$ points

## Problem Statement

You are given a prime number $P$, which you don't like.

Let's call an array of integers $A_1, A_2, \dots, A_N$ **good**, if it is possible to reorder the elements in such a way that no prefix sum is divisible by $P$ (that is, there is **no** $i$ with $1 \le i \le N$ and $A_1 + A_2 + \dots + A_i \equiv 0 \bmod P$ after the reordering).

Consider all $(P-1)^N$ arrays of length $N$ with elements from $1$ to $P-1$. How many of them are **good**?

As this number can be very big, output it modulo $998244353$.

## Constraints

- $1 \le N \le 5000$
- $2 \le P \le 10^8$
- $P$ is a prime.

## Input

Input is given from Standard Input in the following format:

> $N$ $P$

## Output

Output the number of **good** arrays modulo $998244353$.

```input1
2 5
```

```output1
12
```

There are $12$ good arrays: $[1, 1]$, $[1, 2]$, $[1, 3]$, $[2, 1]$, $[2, 2]$, $[2, 4]$, $[3, 1]$, $[3, 3]$, $[3, 4]$, $[4, 2]$, $[4, 3]$, $[4, 4]$.

```input2
4 3
```

```output2
8
```

There are $8$ good arrays: $[1, 1, 1, 2]$, $[1, 1, 2, 1]$, $[1, 2, 1, 1]$, $[2, 1, 1, 1]$, $[2, 2, 2, 1$], $[2, 2, 1, 2]$, $[2, 1, 2, 2]$, $[1, 2, 2, 2]$.

```input3
5000 99999989
```

```output3
51699346
```

```input4
2021 307
```

```output4
644635349
```