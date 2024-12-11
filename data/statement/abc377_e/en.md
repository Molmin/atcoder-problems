Score : $475$ points

## Problem Statement

You are given a permutation $P=(P_1,P_2,\ldots,P_N)$ of $(1,2,\ldots,N)$.

The following operation will be performed $K$ times:

- For $i=1,2,\ldots,N$, **simultaneously** update $P_i$ to $P_{P_i}$.

Print $P$ after all operations.

## Constraints

- $1\leq N\leq2\times10^5$
- $1\leq K\leq10^{18}$
- $1\leq P_i\leq N\ (1\leq i\leq N)$
- $P_i\neq P_j\ (1\leq i\lt j\leq N)$
- All input values are integers.

## Input

The input is given from Standard Input in the following format:

> $N$ $K$
> 
> $P_1$ $P_2$ $\ldots$ $P_N$

## Output

For the $P$ after all operations, print $P_1,P_2,\ldots,P_N$ in this order, separated by spaces.

```input1
6 3
5 6 3 1 2 4
```

```output1
6 1 3 2 4 5
```

With each operation, $P$ changes as follows:

- After the first operation, $P$ is $(2,4,3,5,6,1)$.
- After the second operation, $P$ is $(4,5,3,6,1,2)$.
- After the third operation, $P$ is $(6,1,3,2,4,5)$.

Thus, print `6 1 3 2 4 5`.

```input2
5 1000000000000000000
1 2 3 4 5
```

```output2
1 2 3 4 5
```

Since $P_i=i$, $P$ does not change no matter how many operations are performed.

```input3
29 51912426
7 24 8 23 6 1 4 19 11 18 20 9 17 28 22 27 15 2 12 26 10 13 14 25 5 29 3 21 16
```

```output3
18 23 16 24 21 10 2 27 19 7 12 8 13 5 15 26 17 4 3 9 1 22 25 14 28 11 29 6 20
```