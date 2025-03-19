Score : $600$ points

## Problem Statement

You are given a permutation $P = (P_1, P_2, \ldots, P_N)$ of $(1, 2, \ldots, N)$. Takahashi can repeatedly perform the following operation on $P$ (possibly zero times):

- Choose an integer $i$ satisfying $1 \leq i \leq N-1$. Pay a cost of $i$, and swap $P_i$ and $P_{i+1}$.

Find the minimum total cost required to sort $P$ in ascending order.

## Constraints

- $2 \leq N \leq 2 \times 10^5$
- $(P_1, P_2, \ldots, P_N)$ is a permutation of $(1, 2, \ldots, N)$.
- All input values are integers.

## Input

The input is given from Standard Input in the following format:

> $N$
> 
> $P_1$ $P_2$ $\ldots$ $P_N$

## Output

Print the minimum total cost required to sort $P$ in ascending order.

```input1
3
3 2 1
```

```output1
4
```

Takahashi can sort $P$ in ascending order as follows:

- Pay a cost of $1$ and swap $P_1 = 3$ and $P_2 = 2$. Now, $P = (2, 3, 1)$.
- Pay a cost of $2$ and swap $P_2 = 3$ and $P_3 = 1$. Now, $P = (2, 1, 3)$.
- Pay a cost of $1$ and swap $P_1 = 2$ and $P_2 = 1$. Now, $P = (1, 2, 3)$.

The total cost for these operations is $4$, which is the minimum possible.

```input2
5
2 4 1 3 5
```

```output2
6
```

```input3
2
1 2
```

```output3
0
```