[English Translation]

Score : $700$ points

## Problem Statement

There is a permutation $A=(A_1,A_2,\dots,A_N)$ of the integers from $1$ to $N$. Initially, we have $A_i=i\ (1\leq i \leq N)$.

Takahashi will perform the following operation on this sequence $K$ times.

- Choose an integer $k$ such that $0 \leq k &lt; N$. Take the last $k$ terms of $A$ and insert them among the first $N-k$. More precisely, replace $A$ with any permutation $A'$ of the $N$ integers that satisfies the following conditions.-   - $(A_1,A_2,\dots,A_{N-k})$ is a (not necessarily contiguous) subsequence of $A'$.
-   - $(A_{N-k+1},A_{N-k+2},\dots,A_{N})$ is a (not necessarily contiguous) subsequence of $A'$.

The cost of the series of operations is $\sum_{i=1}^{K}k_iC_i$, where $k_i$ is the $k$ chosen in the $i$-th operation.

Takahashi wants to perform $K$ operations so that $A=(P_1,P_2,\dots,P_N)$ afterward.

Determine whether it is possible to perform such a series of operations. If it is possible, find its minimum cost.

## Constraints

- $2 \leq N \leq 100$
- $1 \leq K \leq 100$
- $1 \leq C_i \leq 10^9$
- $(P_1,P_2,\dots,P_N)$ is a permutation of the integers from $1$ to $N$.
- All input values are integers.

## Input

The input is given from Standard Input in the following format:

> $N$ $K$
> 
> $C_1$ $C_2$ $\dots$ $C_K$
> 
> $P_1$ $P_2$ $\dots$ $P_N$

## Output

If it is impossible to perform $K$ operations so that $A=(P_1,P_2,\dots,P_N)$ holds afterward, print `-1`. If it is possible, print the minimum cost of such a series of operations.

```input1
4 1
3
3 1 2 4
```

```output1
6
```

By choosing $k=2$, and inserting $A_3=3$ before $A_1,A_2$ and $A_4=4$ after $A_1,A_2$, we can make $A=(3,1,2,4)$, which satisfies $A=(P_1,P_2,P_3,P_4)$. The cost of this operation is $2 \times C_1 = 6$.

It can be proved that the minimum cost of performing operations so that $A=(P_1,P_2,P_3,P_4)$ afterward is $6$.

```input2
4 1
3
4 3 2 1
```

```output2
-1
```

It is impossible to perform operations so that $A=(P_1,P_2,P_3,P_4)$ afterward.

```input3
20 10
874735445 684260477 689935252 116941558 915603029 923404262 843759669 656978932 286318130 255195090
11 15 20 10 6 8 18 2 12 4 9 13 19 3 16 7 14 17 5 1
```

```output3
7372920743
```