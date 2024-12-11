Score: $525$ points

## Problem Statement

You are given a sequence $A = (A_1, A_2, \ldots, A_N)$ of length $N$.

Find the maximum length of a subsequence of $A$ such that the absolute difference between any two adjacent terms is at most $D$.

A subsequence of a sequence $A$ is a sequence that can be obtained by deleting zero or more elements from $A$ and arranging the remaining elements in their original order.

## Constraints

- $1 \leq N \leq 5 \times 10^5$
- $0 \leq D \leq 5 \times 10^5$
- $1 \leq A_i \leq 5 \times 10^5$
- All input values are integers.

## Input

The input is given from Standard Input in the following format:

> $N$ $D$
> 
> $A_1$ $A_2$ $\ldots$ $A_N$

## Output

Print the answer.

```input1
4 2
3 5 1 2
```

```output1
3
```

The subsequence $(3, 1, 2)$ of $A$ has absolute differences of at most $2$ between adjacent terms.

```input2
5 10
10 20 100 110 120
```

```output2
3
```

```input3
11 7
21 10 3 19 28 12 11 3 3 15 16
```

```output3
6
```