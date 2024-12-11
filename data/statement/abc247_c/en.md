Score : $300$ points

## Problem Statement

We define sequences $S_n$ as follows.

- $S_1$ is a sequence of length $1$ containing a single $1$.
- $S_n$ ($n$ is an integer greater than or equal to $2$) is a sequence obtained by concatenating $S_{n-1}$, $n$, $S_{n-1}$ in this order.

For example, $S_2$ and $S_3$ is defined as follows.

- $S_2$ is a concatenation of $S_1$, $2$, and $S_1$, in this order, so it is $1,2,1$.
- $S_3$ is a concatenation of $S_2$, $3$, and $S_2$, in this order, so it is $1,2,1,3,1,2,1$.

Given $N$, print the entire sequence $S_N$.

## Constraints

- $N$ is an integer.
- $1 \leq N \leq 16$

## Input

Input is given from Standard Input in the following format:

> $N$

## Output

Print $S_N$, with spaces in between.

```input1
2
```

```output1
1 2 1
```

As described in the Problem Statement, $S_2$ is $1,2,1$.

```input2
1
```

```output2
1
```

```input3
4
```

```output3
1 2 1 3 1 2 1 4 1 2 1 3 1 2 1
```

- $S_4$ is a concatenation of $S_3$, $4$, and $S_3$, in this order.