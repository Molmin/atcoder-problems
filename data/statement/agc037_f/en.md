Score : $1800$ points

## Problem Statement

For a sequence $S$ of positive integers and positive integers $k$ and $l$, $S$ is said to belong to *level* $(k,l)$ when one of the following conditions is satisfied:

- The length of $S$ is $1$, and its only element is $k$.
- There exist sequences $T_1,T_2,...,T_m$ ($m \geq l$) belonging to level $(k-1,l)$ such that the concatenation of $T_1,T_2,...,T_m$ in this order coincides with $S$.

Note that the second condition has no effect when $k=1$, that is, a sequence belongs to level $(1,l)$ only if the first condition is satisfied.

Given are a sequence of positive integers $A_1,A_2,...,A_N$ and a positive integer $L$.
Find the number of subsequences $A_i,A_{i+1},...,A_j$ ($1 \leq i \leq j \leq N$) that satisfy the following condition:

- There exists a positive integer $K$ such that the sequence $A_i,A_{i+1},...,A_j$ belongs to level $(K,L)$.

## Constraints

- $1 \leq N \leq 2 \times 10^5$
- $2 \leq L \leq N$
- $1 \leq A_i \leq 10^9$

## Input

Input is given from Standard Input in the following format:

> $N$ $L$
> 
> $A_1$ $A_2$ $...$ $A_N$

## Output

Print the number of subsequences $A_i,A_{i+1},...,A_j$ ($1 \leq i \leq j \leq N$) that satisfy the condition.

```input1
9 3
2 1 1 1 1 1 1 2 3
```

```output1
22
```

For example, both of the sequences $(1,1,1)$ and $(2)$ belong to level $(2,3)$, so the sequence $(2,1,1,1,1,1,1)$ belong to level $(3,3)$.

```input2
9 2
2 1 1 1 1 1 1 2 3
```

```output2
41
```

```input3
15 3
4 3 2 1 1 1 2 3 2 2 1 1 1 2 2
```

```output3
31
```