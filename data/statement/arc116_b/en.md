Score : $400$ points

## Problem Statement

Given is a sequence $A$ of $N$ integers. There are $2^N - 1$ non-empty subsequences $B$ of $A$. Find the sum of $\max\left(B\right) \times \min\left(B\right)$ over all of them.

Since the answer can be enormous, report it modulo $998244353$.

## Constraints

- All values in input are integers.
- $1 \leq N \leq 2 \times 10^5$
- $0 \leq A_i \leq 998244352$

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $A_1$ $A_2$ $\cdots$ $A_N$

## Output

Print the answer.

```input1
3
2 4 3
```

```output1
63
```

There are $7$ subsequences $B$, as follows:

- $B = \left(2\right)$ : $\max\left(B\right) \times \min\left(B\right) = 4$
- $B = \left(4\right)$ : $\max\left(B\right) \times \min\left(B\right) = 16$
- $B = \left(3\right)$ : $\max\left(B\right) \times \min\left(B\right) = 9$
- $B = \left(2, 4\right)$ : $\max\left(B\right) \times \min\left(B\right) = 8$
- $B = \left(2, 3\right)$ : $\max\left(B\right) \times \min\left(B\right) = 6$
- $B = \left(4, 3\right)$ : $\max\left(B\right) \times \min\left(B\right) = 12$
- $B = \left(2, 4, 3\right)$ : $\max\left(B\right) \times \min\left(B\right) = 8$

The answer is the sum of them: $63$.

```input2
1
10
```

```output2
100
```

```input3
7
853983 14095 543053 143209 4324 524361 45154
```

```output3
206521341
```