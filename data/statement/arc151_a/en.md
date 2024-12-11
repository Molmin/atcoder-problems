Score : $300$ points

## Problem Statement

Below, a $01$-sequence is a string consisting of `0` and `1`.

You are given two $01$-sequences $S$ and $T$ of length $N$ each.
Print the lexicographically smallest $01$-sequence $U$ of length $N$ that satisfies the condition below.

- The Hamming distance between $S$ and $U$ equals the Hamming distance between $T$ and $U$.

If there is no such $01$-sequence $U$ of length $N$, print $-1$ instead.

 What is Hamming distance?

The **Hamming distance** between $01$-sequences $X = X_1X_2\ldots X_N$ and $Y = Y_1Y_2\ldots Y_N$ is the number of integers $1 \leq i \leq N$ such that $X_i \neq Y_i$.

 What is lexicographical order?

A $01$-sequence $X = X_1X_2\ldots X_N$ is ** lexicographically smaller** than a $01$-sequence $Y = Y_1Y_2\ldots Y_N$ when there is an integer $1 \leq i \leq N$ that satisfies both of the conditions below.

- $X_1X_2\ldots X_{i-1} = Y_1Y_2\ldots Y_{i-1}$.
- $X_i =$ `0` and $Y_i =$ `1`.

## Constraints

- $1 \leq N \leq 2 \times 10^5$
- $N$ is an integer.
- $S$ and $T$ are $01$-sequences of length $N$ each.

## Input

The input is given from Standard Input in the following format:

> $N$
> 
> $S$
> 
> $T$

## Output

Print the lexicographically smallest $01$-sequence $U$ of length $N$ that satisfies the condition in the Problem Statement, or $-1$ if there is no such $01$-sequence $U$.

```input1
5
00100
10011
```

```output1
00001
```

For $U =$ `00001`, the Hamming distance between $S$ and $U$ and the Hamming distance between $T$ and $U$ are both $2$.
Additionally, this is the lexicographically smallest $01$-sequence $U$ of length $N$ that satisfies the condition.

```input2
1
0
1
```

```output2
-1
```

No $01$-sequence $U$ of length $N$ satisfies the condition, so $-1$ should be printed.