Score : $500$ points

## Problem Statement

There are $N$ cards numbered $1,\ldots,N$.  Card $i$ has $P_i$ written on the front and $Q_i$ written on the back.<br>
Here, $P=(P_1,\ldots,P_N)$ and $Q=(Q_1,\ldots,Q_N)$ are permutations of $(1, 2, \dots, N)$.

How many ways are there to choose some of the $N$ cards such that the following condition is satisfied?  Find the count modulo $998244353$.

Condition: every number $1,2,\ldots,N$ is written on at least one of the chosen cards.

## Constraints

- $1 \leq N \leq 2\times 10^5$
- $1 \leq P_i,Q_i \leq N$
- $P$ and $Q$ are permutations of $(1, 2, \dots, N)$.
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $P_1$ $P_2$ $\ldots$ $P_N$
> 
> $Q_1$ $Q_2$ $\ldots$ $Q_N$

## Output

Print the answer.  

```input1
3
1 2 3
2 1 3
```

```output1
3
```

For example, if you choose Cards $1$ and $3$, then $1$ is written on the front of Card $1$, $2$ on the back of Card $1$, and $3$ on the front of Card $3$, so this combination satisfies the condition.

There are $3$ ways to choose cards satisfying the condition: $\{1,3\},\{2,3\},\{1,2,3\}$.

```input2
5
2 3 5 4 1
4 2 1 3 5
```

```output2
12
```

```input3
8
1 2 3 4 5 6 7 8
1 2 3 4 5 6 7 8
```

```output3
1
```