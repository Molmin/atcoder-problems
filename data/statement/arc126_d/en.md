Score : $600$ points

## Problem Statement

Given is a sequence of $N$ positive integers $A = (A_1, A_2, \ldots, A_N)$, where each $A_i$ is $1$, $2$, $\ldots$, or $K$.

You can do the following operation on this sequence any number of times.

- Swap two adjacent elements, that is, choose $i$ and $j$ such that $|i-j|=1$ and swap $A_i$ and $A_j$.

Find the minimum number of operations needed to make $A$ satisfy the following condition.

- $A$ contains $(1, 2, \ldots, K)$ as a contiguous subsequence, that is, there is a positive integer $n$ at most $N-K+1$ such that $A_n = 1$, $A_{n+1} = 2$, $\ldots$, and $A_{n+K-1} = K$.

## Constraints

- $2\leq K\leq 16$
- $K \leq N\leq 200$
- $A_i$ is $1$, $2$, $\ldots$, or $K$.
- $A$ contains at least one occurrence of each of $1, 2, \ldots, K$.

## Input

Input is given from Standard Input in the following format:

> $N$ $K$
> 
> $A_1$ $A_2$ $\ldots$ $A_N$

## Output

Print the minimum number of operations needed to make $A$ satisfy the condition.

```input1
4 3
3 1 2 1
```

```output1
2
```

One optimal sequence of operations is as follows.

- Swap $A_1$ and $A_2$, changing $A$ to $(1,3,2,1)$.
- Swap $A_2$ and $A_3$, changing $A$ to $(1,2,3,1)$.
- Now we have $A_1 = 1$, $A_2 = 2$, $A_3 = 3$, satisfying the condition.

```input2
5 5
4 1 5 2 3
```

```output2
5
```

```input3
8 4
4 2 3 2 4 2 1 4
```

```output3
5
```