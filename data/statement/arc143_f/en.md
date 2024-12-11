Score : $1200$ points

## Problem Statement

Given a positive integer $N$, find the number, modulo $998244353$, of subsets $S$ of $\{1, 2, \ldots, N\}$ that satisfy the following condition.

- Every positive integer at most $N$ can be represented as the sum of some distinct elements of $S$, and there are at most two such representations.

## Constraints

- $1 \leq N \leq 1500$

## Input

Input is given from Standard Input in the following format:

> $N$

## Output

Print the answer.

```input1
3
```

```output1
2
```

The subsets $\{1,2\}$ and $\{1,2,3\}$ satisfy the condition.

```input2
5
```

```output2
5
```

```input3
1000
```

```output3
742952024
```