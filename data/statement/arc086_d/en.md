Score : $1200$ points

## Problem Statement

There are $N$ non-negative integers written on the blackboard: $A_1, ..., A_N$.

Snuke can perform the following two operations at most $K$ times in total in any order:

- Operation A: Replace each integer $X$ on the blackboard with $X$ divided by $2$, rounded down to the nearest integer.
- Operation B: Replace each integer $X$ on the blackboard with $X$ minus $1$. This operation cannot be performed if one or more $0$s are written on the blackboard.

Find the number of the different possible combinations of integers written on the blackboard after Snuke performs the operations, modulo $1,000,000,007$.

## Constraints

- $1 \leq N \leq 200$
- $1 \leq A_i \leq 10^{18}$
- $1 \leq K \leq 10^{18}$
- $A_i$ and $K$ are integers.

## Input

Input is given from Standard Input in the following format:

> $N$ $K$
> 
> $A_1$ $A_2$ $...$ $A_N$

## Output

Print the number of the different possible combinations of integers written on the blackboard after Snuke performs the operations, modulo $1,000,000,007$.

```input1
2 2
5 7
```

```output1
6
```

There are six possible combinations of integers on the blackboard: $(1, 1)$, $(1, 2)$, $(2, 3)$, $(3, 5)$, $(4, 6)$ and $(5, 7)$.
For example, $(1, 2)$ can be obtained by performing Operation A and Operation B in this order.

```input2
3 4
10 13 22
```

```output2
20
```

```input3
1 100
10
```

```output3
11
```

```input4
10 123456789012345678
228344079825412349 478465001534875275 398048921164061989 329102208281783917 779698519704384319 617456682030809556 561259383338846380 254083246422083141 458181156833851984 502254767369499613
```

```output4
164286011
```