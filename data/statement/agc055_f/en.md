Score : $1800$ points

## Problem Statement

You are given integers $N$ and $K$.

Let's call an integer array $a=[a_1, a_2, \ldots, a_K]$ of length $K$ **good**, if $1 \le a_i \le i$ for all $1 \le i \le K$.

Let's call an integer array $b=[b_1, b_2, \ldots, b_{NK}]$ of length $NK$ **amazing**, if it can be split into $N$ (not necessarily contiguous) subsequences of length $K$, each of which is good.

Let's define $f(pos, val)$ as the number of amazing sequences $b$ such that $b_{pos}=val$.

Find $f(pos, val)$ for all $1\le pos \le NK$, $1 \le val \le K$.
As these numbers can be very big, output them modulo some prime $P$.

## Constraints

- $1 \le N \le 20$.
- $1 \le K \le 20$.
- $10^8 \le P \le 10^9$
- $P$ is a prime.

## Input

Input is given from Standard Input in the following format:

> $N$ $K$ $P$

## Output

Output $NK$ lines.
The $j$-th number in the $i$-th line should be equal to $(f(i, j) \bmod P)$.

```input1
2 2 965166677
```

```output1
6 0 
4 2 
4 2 
3 3
```

There exist $6$ amazing arrays:

- $[1, 1, 1, 1]$ ー can be split into $[b_1, b_2], [b_3, b_4]$.
- $[1, 1, 1, 2]$ ー can be split into $[b_1, b_2], [b_3, b_4]$.
- $[1, 2, 1, 1]$ ー can be split into $[b_1, b_2], [b_3, b_4]$.
- $[1, 2, 1, 2]$ ー can be split into $[b_1, b_2], [b_3, b_4]$.
- $[1, 1, 2, 1]$ ー can be split into $[b_1, b_3], [b_2, b_4]$.
- $[1, 1, 2, 2]$ ー can be split into $[b_1, b_3], [b_2, b_4]$.