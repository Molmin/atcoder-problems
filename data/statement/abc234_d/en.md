Score : $400$ points

## Problem Statement

Given are a permutation $P=(P_1,P_2,\ldots,P_N)$ of $(1,2,\ldots,N)$ and a positive integer $K$.

For each $i=K,K+1,\ldots,N$, find the following.

- The $K$-th greatest value among the first $i$ terms of $P$.

## Constraints

- $1 \leq K \leq N \leq 5 \times 10^5$
- $(P_1,P_2,\ldots,P_N)$ is a permutation of $(1,2,\ldots,N)$.
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$ $K$
> 
> $P_1$ $P_2$ $\ldots$ $P_N$

## Output

For each $i=K, K+1, \ldots, N$, in this order, print the specified value in Problem Statement, separated by newlines.

```input1
3 2
1 2 3
```

```output1
1
2
```

- The $(K=)$ $2$-nd greatest value among the first $2$ terms of $P$, $(P_1,P_2)=(1,2)$, is $1$.
- The $(K=)$ $2$-nd greatest value among the first $3$ terms of $P$, $(P_1,P_2,P_3)=(1,2,3)$, is $2$.

```input2
11 5
3 7 2 5 11 6 1 9 8 10 4
```

```output2
2
3
3
5
6
7
7
```