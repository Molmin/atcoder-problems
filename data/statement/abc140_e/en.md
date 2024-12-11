Score: $500$ points

## Problem Statement

Given is a permutation $P$ of $\{1, 2, \ldots, N\}$.

For a pair $(L, R) (1 \le L \lt R \le N)$, let $X_{L, R}$ be the second largest value among $P_L, P_{L+1}, \ldots, P_R$.

Find $\displaystyle \sum_{L=1}^{N-1} \sum_{R=L+1}^{N} X_{L,R}$.

## Constraints

- $2 \le N \le 10^5$
- $1 \le P_i \le N$
- $P_i \neq P_j$ $(i \neq j)$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $P_1$ $P_2$ $\ldots$ $P_N$

## Output

Print $\displaystyle \sum_{L=1}^{N-1} \sum_{R=L+1}^{N} X_{L,R}$.

```input1
3
2 3 1
```

```output1
5
```

$X_{1, 2} = 2, X_{1, 3} = 2$, and $X_{2, 3} = 1$, so the sum is $2 + 2 + 1 = 5$.

```input2
5
1 2 3 4 5
```

```output2
30
```

```input3
8
8 2 7 3 4 5 6 1
```

```output3
136
```