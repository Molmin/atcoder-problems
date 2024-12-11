Score : $500$ points

## Problem Statement

The Republic of AtCoder has $N$ cities, called City $1$, City $2$, $\ldots$, City $N$.
Initially, there was a bidirectional road between every pair of different cities, but $M$ of these roads have become unusable due to deterioration over time. More specifically, for each $1\leq i \leq M$, the road connecting City $U_i$ and City $V_i$ has become unusable.

Takahashi will go for a $K$-day trip that starts and ends in City $1$. Formally speaking, a $K$-day trip that starts and ends in City $1$ is a sequence of $K+1$ cities $(A_0, A_1, \ldots, A_K)$ such that $A_0=A_K=1$ holds and for each $0\leq i\leq K-1$,  $A_i$ and $A_{i+1}$ are different and there is still a usable road connecting City $A_i$ and City $A_{i+1}$.

Print the number of different $K$-day trips that start and end in City $1$, modulo $998244353$. Here, two $K$-day trips $(A_0, A_1, \ldots, A_K)$ and $(B_0, B_1, \ldots, B_K)$ are said to be different when there exists an $i$ such that $A_i\neq B_i$.

## Constraints

- $2 \leq N \leq 5000$
- $0 \leq M \leq \min\left( \frac{N(N-1)}{2},5000 \right)$
- $2 \leq K \leq 5000$
- $1 \leq U_i&lt;V_i \leq N$
- All pairs $(U_i, V_i)$ are pairwise distinct.
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$ $M$ $K$
> 
> $U_1$ $V_1$
> 
> $:$
> 
> $U_M$ $V_M$

## Output

Print the answer.

```input1
3 1 4
2 3
```

```output1
4
```

There are four different trips as follows.

- ($1,2,1,2,1$)
- ($1,2,1,3,1$)
- ($1,3,1,2,1$)
- ($1,3,1,3,1$)

No other trip is valid, so we should print $4$.

```input2
3 3 3
1 2
1 3
2 3
```

```output2
0
```

No road remains usable, so there is no valid trip.

```input3
5 3 100
1 2
4 5
2 3
```

```output3
428417047
```