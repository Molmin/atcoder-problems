Score : $600$ points

## Problem Statement

You are given an integer sequence $A = (A_1, A_2, \dots, A_N)$ and an integer $X$.<br>
Print one triple of integers $(i, j, k)$ satisfying all of the following conditions. If no such triple exists, report that fact.

- $1 \leq i \lt j \lt k \leq N$
- $A_i + A_j + A_k = X$

## Constraints

- $3 \leq N \leq 10^6$
- $1 \leq X \leq 10^6$
- $1 \leq A_i \leq X$
- All input values are integers.

## Input

The input is given from Standard Input in the following format:

> $N$ $X$
> 
> $A_1$ $A_2$ $\dots$ $A_N$

## Output

If there exists an integer triple $(i, j, k)$ satisfying the conditions, print one in the following format. If there are multiple solutions, you may print any of them.

> $i$ $j$ $k$

If no such triple exists, print `-1`.

```input1
5 16
1 8 5 10 13
```

```output1
1 3 4
```

The triple $(i, j, k) = (1, 3, 4)$ satisfies $1 \leq i \lt j \lt k \leq N$ and $A_i + A_j + A_k = 1 + 5 + 10 = 16 = X$.

```input2
5 20
1 8 5 10 13
```

```output2
-1
```

```input3
10 100000
73766 47718 74148 49218 76721 31902 21994 18880 29598 98917
```

```output3
4 6 8
```