Score : $700$ points

## Problem Statement

You are given a permutation $P=(P_1,P_2,\dots,P_N)$ of $(1,2,\dots,N)$.

Consider the following operations $k\ (k=2,3,\dots,N)$ on this permutation.

- Operation $k$: For $i=1,2,\dots,k-1$ in this order, if $P_i &gt; P_{i+1}$, swap the values of the $i$-th and $(i+1)$-th elements of $P$.

You are also given a **non-decreasing** sequence $A=(A_1,A_2,\dots,A_M)\ (2 \leq A_i \leq N)$ of length $M$.

For each $i=1,2,\dots,M$, find the inversion number of $P$ after applying the operations $A_1, A_2, \dots, A_i$ in this order.

 What is the inversion number of a sequence?

The inversion number of a sequence $x=(x_1,x_2,\dots,x_n)$ of length $n$ is the number of pairs of integers $(i,j)\ (1\leq i < j \leq n)$ such that $x_i > x_j$.

## Constraints

- $2 \leq N \leq 2 \times 10^5$
- $1 \leq M \leq 2 \times 10^5$
- $2 \leq A_i \leq N$
- $P$ is a permutation of $(1,2,\dots,N)$.
- $A_i \leq A_{i+1}$ for $i=1,2,\dots,M-1$.
- All input values are integers.

## Input

The input is given from Standard Input in the following format:

> $N$
> 
> $P_1$ $P_2$ $\dots$ $P_N$
> 
> $M$
> 
> $A_1$ $A_2$ $\dots$ $A_M$

## Output

Print $M$ lines. The $k$-th line should contain the answer to the problem for $i=k$.

```input1
6
3 2 4 1 6 5
2
4 6
```

```output1
3
1
```

First, operation $4$ is performed. During this, $P$ changes as follows: $(3,2,4,1,6,5) \rightarrow (2,3,4,1,6,5) \rightarrow (2,3,4,1,6,5) \rightarrow (2,3,1,4,6,5)$. The inversion number of $P$ afterward is $3$.

Next, operation $6$ is performed, where $P$ eventually becomes $(2,1,3,4,5,6)$, whose inversion number is $1$.

```input2
20
12 14 16 8 7 15 19 6 18 5 13 9 10 17 4 1 11 20 2 3
15
3 4 6 8 8 9 10 12 13 15 18 18 19 19 20
```

```output2
117
116
113
110
108
105
103
99
94
87
79
72
65
58
51
```