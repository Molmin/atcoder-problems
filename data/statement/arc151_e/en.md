Score : $700$ points

## Problem Statement

You are given an integer sequence $A = (A_1, A_2, \ldots, A_N)$ of length $N$.
Additionally, its contiguous subsequences of lengths $P$ and $Q$ are given: $X = (X_1, X_2, \ldots, X_P)$ and $Y = (Y_1, Y_2, \ldots, Y_Q)$.

You can perform the four operations on $X$ below any number of times (possibly zero) in any order.

- Add an arbitrary integer at the beginning of $X$.
- Delete the element at the beginning of $X$.
- Add an arbitrary integer at the end of $X$.
- Delete the element at the end of $X$.

Here, $X$ must be a **non-empty** contiguous subsequence of $A$ before and after each operation.
Find the minimum total number of operations needed to make $X$ equal $Y$.
Under the Constraints of this problem, it is guaranteed that one can always make $X$ equal $Y$ by repeating operations.

 What is a contiguous subsequence?

A sequence $X = (X_1, X_2, \ldots, X_P)$ is a **contiguous subsequence** of $A = (A_1, A_2, \ldots, A_N)$ when there is an integer $l$ satisfying $1 \leq l \leq N-P+1$ such that $X_i = A_{l+i-1}$ for every $i = 1, 2, \ldots, P$.

## Constraints

- $1 \leq N \leq 2 \times 10^5$
- $1 \leq A_i \leq N$
- $1 \leq P, Q \leq N$
- $(X_1, X_2, \ldots, X_P)$ and $(Y_1, Y_2, \ldots, Y_Q)$ are contiguous subsequences of $(A_1, A_2, \ldots, A_N)$.
- All values in the input are integers.

## Input

The input is given from Standard Input in the following format:

> $N$
> 
> $A_1$ $A_2$ $\ldots$ $A_N$
> 
> $P$
> 
> $X_1$ $X_2$ $\ldots$ $X_P$
> 
> $Q$
> 
> $Y_1$ $Y_2$ $\ldots$ $Y_Q$

## Output

Print the answer.

```input1
7
3 1 4 1 5 7 2
2
3 1
3
1 5 7
```

```output1
3
```

You can make $X$ equal $Y$ while keeping $X$ a non-empty contiguous subsequence of $A$, as follows.

1. First, delete the element at the beginning of $X$. Now, you have $X = (1)$.
2. Next, add $5$ at the end of $X$. Now, you have $X = (1, 5)$.
3. Furthermore, add $7$ at the end of $X$. Now, you have $X = (1, 5, 7)$, which equal $Y$.

Here, you perform three operations, which is the fewest possible.

```input2
20
2 5 1 2 7 7 4 5 3 7 7 4 5 5 5 4 6 5 6 1
6
1 2 7 7 4 5
7
7 4 5 5 5 4 6
```

```output2
7
```