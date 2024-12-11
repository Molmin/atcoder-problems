Score : $800$ points

## Problem Statement

You are given an integer sequence $A=(A_1,A_2,\cdots,A_N)$ of length $N$. 
Here, it is guaranteed that $0 \leq A_i &lt; i$ for each $i$.

The **score** and **cost** of a permutation $P=(P_1,P_2,\cdots,P_N)$ of $(1,2,\cdots,N)$ are defined as follows:

- The score of $P$ is the length of a longest increasing subsequence of $P$.
- The cost of $P$ is the number of integers $i$ ($1 \leq i \leq N$) that satisfy the following condition:-   - There are fewer than $A_i$ integers $j$ such that $j &amp;lt; i$ and $P_j &amp;gt; P_i$.

For each $k=1,2,\cdots,N$, solve the following problem:

- Find the minimum cost of a permutation $P$ whose score is at least $k$.

## Constraints

- $1 \leq N \leq 250000$
- $0 \leq A_i &lt; i$
- All input values are integers.

## Input

The input is given from Standard Input in the following format:

> $N$
> 
> $A_1$ $A_2$ $\cdots$ $A_N$

## Output

Print the answers for $k=1,2,\cdots,N$ in this order.

```input1
4
0 1 2 1
```

```output1
0 0 1 3
```

For each $k$, a solution $P$ is as follows:

- $k=1$: If $P=(4,2,1,3)$, then $P$ has the score of $2$ and the cost of $0$.
- $k=2$: If $P=(4,3,1,2)$, then $P$ has the score of $2$ and the cost of $0$.
- $k=3$: If $P=(4,1,2,3)$, then $P$ has the score of $3$ and the cost of $1$.
- $k=4$: If $P=(1,2,3,4)$, then $P$ has the score of $4$ and the cost of $3$.

```input2
3
0 0 0
```

```output2
0 0 0
```

```input3
5
0 1 2 3 4
```

```output3
0 1 2 3 4
```

```input4
11
0 0 2 3 4 5 3 7 8 2 10
```

```output4
0 0 0 1 2 3 4 5 7 8 9
```