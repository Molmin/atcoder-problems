Score : $2000$ points

## Problem Statement

You are given a permutation $P=(P_1,P_2,\cdots,P_N)$ of $(1,2,\cdots,N)$.

You want to perform zero or more swaps of adjacent elements so that $P$ satisfies the following condition:

- The number of indices $i$ such that $P_i &gt; P_{i+1}$ is at most $1$.

Find the minimum number of swaps required.

## Constraints

- $2 \leq N \leq 800000$
- $(P_1,P_2,\cdots,P_N)$ is a permutation of $(1,2,\cdots,N)$.
- All input values are integers.

## Input

The input is given from Standard Input in the following format:

> $N$
> 
> $P_1$ $P_2$ $\cdots$ $P_N$

## Output

Print the answer.

```input1
3
3 2 1
```

```output1
1
```

Swapping $P_1$ and $P_2$ turns $P$ into $(2,3,1)$, which satisfies the condition.

```input2
4
2 4 1 3
```

```output2
0
```

```input3
6
2 3 1 6 4 5
```

```output3
1
```

```input4
20
8 13 6 11 20 3 12 18 17 4 10 1 7 16 19 5 2 15 14 9
```

```output4
36
```