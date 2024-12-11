Score : $475$ points

## Problem Statement

You are given a sequence $A = (A_1, A_2, \dots, A_N)$ of length $N$. For each $k = 1, 2, \dots, N$, find the number, modulo $998244353$, of (not necessarily contiguous) subsequences of $A$ of length $k$ that are arithmetic sequences. Two subsequences are distinguished if they are taken from different positions, even if they are equal as sequences.

What is a subsequence?
A subsequence of a sequence $A$ is a sequence obtained by deleting zero or more elements from $A$ and arranging the remaining elements without changing the order.

## Constraints

- $1 \leq N \leq 80$
- $1 \leq A_i \leq 10^9$
- All input values are integers.

## Input

The input is given from Standard Input in the following format:

> $N$
> 
> $A_1$ $A_2$ $\dots$ $A_N$

## Output

Print the answers for $k = 1, 2, \dots, N$ in this order, in a single line, separated by spaces.

```input1
5
1 2 3 2 3
```

```output1
5 10 3 0 0
```

- There are $5$ subsequences of length $1$, all of which are arithmetic sequences.
- There are $10$ subsequences of length $2$, all of which are arithmetic sequences.
- There are $3$ subsequences of length $3$ that are arithmetic sequences: $(A_1, A_2, A_3)$, $(A_1, A_2, A_5)$, and $(A_1, A_4, A_5)$.
- There are no arithmetic subsequences of length $4$ or more.

```input2
4
1 2 3 4
```

```output2
4 6 2 1
```

```input3
1
100
```

```output3
1
```