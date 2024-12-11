Score : $700$ points

## Problem Statement

You are given a permutation $P$ of $(1,2,\dots,N)$. There is also a permutation $Q=(1,2,\dots,N)$ of $(1,2,\dots,N)$.

Perform the following operation on $Q$ for $i=1,2,\dots,N$ in this order.

- Remove $i$ from $Q$ and insert $i$ into any one position in $Q$.

Find the number, modulo $(10^9+7)$, of ways to perform $N$ operations such that $P$ and $Q$ are equal after all operations.

## Constraints

- $1 \le N \le 5000$
- $P$ is a permutation of $(1,2,\dots,N)$.

## Input

The input is given from Standard Input in the following format:

> $N$
> 
> $P_1$ $P_2$ $\dots$ $P_N$

## Output

Print the answer.

```input1
3
1 2 3
```

```output1
5
```

For example, the following operations result in $Q = (1,2,3)$.

- Remove $1$ from $Q=(1,2,3)$ and insert it between $2$ and $3$, making $Q = (2,1,3)$.
- Remove $2$ from $Q=(2,1,3)$ and insert it at the end of $Q$, making $Q = (1,3,2)$.
- Remove $3$ from $Q=(1,3,2)$ and insert it at the end of $Q$, making $Q = (1,2,3)$.

Including this example, five ways to perform operations result in $Q=(1,2,3)$.

```input2
4
2 4 1 3
```

```output2
11
```

```input3
15
7 5 14 10 4 2 3 6 8 11 12 1 15 13 9
```

```output3
306264
```

```input4
30
15 19 13 11 22 27 21 25 1 12 30 28 16 26 10 14 20 2 5 7 23 4 17 6 29 3 18 9 8 24
```

```output4
33525150
```