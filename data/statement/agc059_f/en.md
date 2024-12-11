Score : $1900$ points

## Problem Statement

Given $N, pos, val$, find the number of permutations $P=(P_1, P_2, \ldots, P_N)$ of $(1,2,\ldots,N)$ that satisfy all of the following conditions, modulo $10^9+7$:

- $LIS(P) + LDS(P) = N+1$
- $P_{pos} = val$

Here, $LIS(P)$ denotes the length of the longest increasing subsequence of $P$, and $LDS(P)$ denotes the length of the longest decreasing subsequence of $P$.

## Constraints

- $1 \le N \le 5\cdot 10^6$
- $1 \le pos, val \le N$
- All values in the input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$ $pos$ $val$

## Output

Print the answer.

```input1
3 2 2
```

```output1
2
```

The following permutations satisfy the conditions: $(1, 2, 3), (3, 2, 1)$.

```input2
4 1 1
```

```output2
6
```

The following permutations satisfy the conditions: $(1, 2, 3, 4), (1, 2, 4, 3), (1, 3, 2, 4), (1, 3, 4, 2), (1, 4, 2, 3), (1, 4, 3, 2)$.

```input3
5 2 5
```

```output3
11
```

```input4
2022 69 420
```

```output4
128873576
```