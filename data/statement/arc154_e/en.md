Score : $900$ points

## Problem Statement

For a permutation $Q=(Q_1,Q_2,\dots,Q_N)$ of $(1,2,\dots,N)$, let $f(Q)$ be the following value:

the sum of $j-i$ over all pairs of integers $(i,j)$ such that $1 \le i < j \le N$ and $Q_i > Q_j$.

You are given a permutation $P=(P_1,P_2,\dots,P_N)$ of $(1,2,\dots,N)$.

Let us repeat the following operation $M$ times.

- Choose a pair of integers $(i,j)$ such that $1 \le i \le j \le N$. Reverse $P_i,P_{i+1},\dots,P_j$. Formally, replace the values of $P_i,P_{i+1},\dots,P_j$ with $P_j,P_{j-1},\dots,P_i$ simultaneously.

There are $\left(\frac{N(N+1)}{2}\right)^{M}$ ways to repeat the operation. Assume that we have computed $f(P)$ for all those ways.

Find the sum of these $\left(\frac{N(N+1)}{2}\right)^{M}$ values, modulo $998244353$. 

## Constraints

- $1 \le N,M \le 2 \times 10^5$
- $(P_1,P_2,\dots,P_N)$ is a permutation of $(1,2,\dots,N)$.

## Input

The input is given from Standard Input in the following format:

> $N$ $M$
> 
> $P_1$ $P_2$ $\dots$ $P_N$

## Output

Print a single line containing the answer.

```input1
2 1
1 2
```

```output1
1
```

There are three ways to perform the operation, as follows.

- Choose $(i,j)=(1,1)$, making $P=(1,2)$, where $f(P)=0$.
- Choose $(i,j)=(1,2)$, making $P=(2,1)$, where $f(P)=1$.
- Choose $(i,j)=(2,2)$, making $P=(1,2)$, where $f(P)=0$.

Thus, the answer is $0+1+0=1$.

```input2
3 2
3 2 1
```

```output2
90
```

```input3
10 2023
5 8 1 9 3 10 4 7 2 6
```

```output3
543960046
```