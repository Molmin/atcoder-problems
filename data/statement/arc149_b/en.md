Score : $500$ points

## Problem Statement

For a sequence $P = (P_1, \ldots, P_N)$, let $\mathrm{LIS}(P)$ denote the length of a longest increasing subsequence.

You are given permutations $A = (A_1, \ldots, A_N)$ and $B = (B_1, \ldots, B_N)$ of integers from $1$ through $N$. You may perform the following operation on these sequences any number of times (possibly zero).

- Choose an integer $i$ such that $1\leq i\leq N-1$. Swap $A_i$ and $A_{i+1}$, and swap $B_i$ and $B_{i+1}$.

Find the maximum possible final value of $\mathrm{LIS}(A) + \mathrm{LIS}(B)$.

What is a longest increasing subsequence?

A subsequence of a sequence is a sequence obtained by removing zero or more elements from the original sequence and then concatenating the remaining elements without changing the order.
For instance, $(10,30)$ is a subsequence of $(10,20,30)$, but $(20,10)$ is not a subsequence of $(10,20,30)$.

A longest increasing subsequence of a sequence is a subsequence of that sequence with the greatest length among its subsequences that are strictly increasing.

## Constraints

- $2\leq N\leq 3\times 10^5$
- $1\leq A_i\leq N$
- $1\leq B_i\leq N$
- $A_i\neq A_j$ and $B_i\neq B_j$, if $i\neq j$.

## Input

The input is given from Standard Input in the following format:

> $N$
> 
> $A_1$ $\ldots$ $A_N$
> 
> $B_1$ $\ldots$ $B_N$

## Output

Print the maximum possible final value of $\mathrm{LIS}(A) + \mathrm{LIS}(B)$.

```input1
5
5 2 1 4 3
3 1 2 5 4
```

```output1
8
```

Here is one way to achieve $\mathrm{LIS}(A) + \mathrm{LIS}(B) = 8$.

- Do the operation with $i = 2$. Now, $A = (5,1,2,4,3)$, $B = (3,2,1,5,4)$.
- Do the operation with $i = 1$. Now, $A = (1,5,2,4,3)$, $B = (2,3,1,5,4)$.
- Do the operation with $i = 4$. Now, $A = (1,5,2,3,4)$, $B = (2,3,1,4,5)$.

Here, $A$ has a longest increasing subsequence $(1,2,3,4)$, so $\mathrm{LIS}(A)=4$, and $B$ has a longest increasing subsequence $(2,3,4,5)$, so $\mathrm{LIS}(B)=4$. 

```input2
5
1 2 3 4 5
1 2 3 4 5
```

```output2
10
```

You can decide not to perform the operation at all to achieve $\mathrm{LIS}(A) + \mathrm{LIS}(B) = 10$.