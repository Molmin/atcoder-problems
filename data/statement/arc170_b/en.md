Score: $500$ points

## Problem Statement

You are given a sequence $A$ of length $N$ consisting of integers between $1$ and $\textbf{10}$, inclusive.

A pair of integers $(l,r)$ satisfying $1\leq l \leq r\leq N$ is called a good pair if it satisfies the following condition:

- The sequence $(A_l,A_{l+1},\ldots,A_r)$ contains a (possibly non-contiguous) arithmetic subsequence of length $3$. More precisely, there is a triple of integers $(i,j,k)$ with $l \leq i &lt; j &lt; k\leq r$ such that $A_j - A_i = A_k - A_j$.

Find the number of good pairs.

## Constraints

- $3 \leq N \leq 10^5$
- $1\leq A_i \leq 10$
- All input numbers are integers.

## Input

The input is given from Standard Input in the following format:

> $N$
> 
> $A_1$ $\ldots$ $A_N$

## Output

Print the answer.

```input1
5
5 3 4 1 5
```

```output1
3
```

There are three good pairs: $(l,r)=(1,4),(1,5),(2,5)$.

For example, the sequence $(A_1,A_2,A_3,A_4)$ contains an arithmetic subsequence of length $3$, which is $(5,3,1)$, so $(1,4)$ is a good pair.

```input2
3
1 2 1
```

```output2
0
```

There may be cases where no good pairs exist.

```input3
9
10 10 1 3 3 7 2 2 5
```

```output3
3
```