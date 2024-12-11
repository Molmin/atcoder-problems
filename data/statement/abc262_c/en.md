Score : $300$ points

## Problem Statement

You are given a sequence $a = (a_1, \dots, a_N)$ of length $N$ consisting of integers between $1$ and $N$.

Find the number of pairs of integers $i, j$ that satisfy all of the following conditions:

- $1 \leq i \lt j \leq N$
- $\min(a_i, a_j) = i$
- $\max(a_i, a_j) = j$

## Constraints

- $2 \leq N \leq 5 \times 10^5$
- $1 \leq a_i \leq N \, (1 \leq i \leq N)$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $a_1$ $\ldots$ $a_N$

## Output

Print the answer.

```input1
4
1 3 2 4
```

```output1
2
```

$(i, j) = (1, 4), (2, 3)$ satisfy the conditions.

```input2
10
5 8 2 2 1 6 7 2 9 10
```

```output2
8
```