Score : $400$ points

## Problem Statement

Given is an $N \times N$ matrix $C$ whose elements are non-negative integers. Determine whether there is a pair of sequences of non-negative integers $A_1,A_2,\ldots,A_N$ and $B_1,B_2,\ldots,B_N$ such that $C_{i,j}=A_i+B_j$ for every $(i, j)$. If the answer is yes, print one such pair.

## Constraints

- $1 \leq N \leq 500$
- $0 \leq C_{i,j} \leq 10^9$

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $C_{1,1}$ $C_{1,2}$ $\ldots$ $C_{1,N}$
> 
> $C_{2,1}$ $C_{2,2}$ $\ldots$ $C_{2,N}$
> 
> $:$
> 
> $C_{N,1}$ $C_{N,2}$ $\ldots$ $C_{N,N}$

## Output

- If no pair $A, B$ satisfies the condition:

Print `No` in the first line.

> No

<br>

- If some pair $A, B$ satisfies the condition:

In the first line, print `Yes`.
In the second line, print the elements of $A$, with spaces in between.
In the third line, print the elements of $B$, with spaces in between. 

If multiple pairs satisfy the condition, any of them will be accepted.

> Yes
> 
> $A_1$ $A_2$ $\ldots$ $A_N$
> 
> $B_1$ $B_2$ $\ldots$ $B_N$

```input1
3
4 3 5
2 1 3
3 2 4
```

```output1
Yes
2 0 1
2 1 3
```

Note that $A$ and $B$ consist of non-negative integers.

```input2
3
4 3 5
2 2 3
3 2 4
```

```output2
No
```