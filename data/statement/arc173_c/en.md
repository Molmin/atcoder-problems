Score: $600$ points

## Problem Statement

You are given a permutation $P=(P_1,P_2,\dots,P_N)$ of integers from $1$ to $N$.

For each $i=1,2,\dots,N$, print the minimum value of $r-l+1$ for a pair of integers $(l,r)$ that satisfies all of the following conditions. If no such $(l,r)$ exists, print `-1`.

- $1 \leq l \leq i \leq r \leq N$
- $r-l+1$ is odd.
- The median of the contiguous subsequence $(P_l,P_{l+1},\dots,P_r)$ of $P$ is **not** $P_i$.

Here, the median of $A$ for an integer sequence $A$ of length $L$ (odd) is defined as the $\frac{L+1}{2}$-th value of the sequence $A'$ obtained by sorting $A$ in ascending order.

## Constraints

- $3 \leq N \leq 3 \times 10^5$
- $(P_1,P_2,\dots,P_N)$ is a permutation of integers from $1$ to $N$.
- All input values are integers.

## Input

The input is given from Standard Input in the following format:

> $N$
> 
> $P_1$ $P_2$ $\dots$ $P_N$

## Output

Print the answers for $i=1,2,\dots,N$ in this order, separated by spaces.

```input1
5
1 3 5 4 2
```

```output1
3 3 3 5 3
```

For example, when $i=2$, if we set $(l,r)=(2,4)$, then $r-l+1=3$ is odd, and the median of $(P_2,P_3,P_4)=(3,5,4)$ is $4$, which is not $P_2$, so the conditions are satisfied. Thus, the answer is $3$.

On the other hand, when $i=4$, the median of $(P_l,\dots,P_r)$ for any of $(l,r)=(4,4),(2,4),(3,5)$ is $P_4=4$. If we set $(l,r)=(1,5)$, the median of $(P_1,P_2,P_3,P_4,P_5)=(1,3,5,4,2)$ is $3$, which is not $P_4$, so the conditions are satisfied. Thus, the answer is $5$.

```input2
3
2 1 3
```

```output2
-1 3 3
```

When $i=1$, no pair of integers $(l,r)$ satisfies the conditions.

```input3
14
7 14 6 8 10 2 9 5 4 12 11 3 13 1
```

```output3
5 3 3 7 3 3 3 5 3 3 5 3 3 3
```