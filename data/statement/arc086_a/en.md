Score : $300$ points

## Problem Statement

Takahashi has $N$ balls. Initially, an integer $A_i$ is written on the $i$-th ball.

He would like to rewrite the integer on some balls so that there are at most $K$ different integers written on the $N$ balls.

Find the minimum number of balls that Takahashi needs to rewrite the integers on them.

## Constraints

- $1 \leq K \leq N \leq 200000$
- $1 \leq A_i \leq N$
- All input values are integers.

## Input

Input is given from Standard Input in the following format:

> $N$ $K$
> 
> $A_1$ $A_2$ ... $A_N$

## Output

Print the minimum number of balls that Takahashi needs to rewrite the integers on them.

```input1
5 2
1 1 2 2 5
```

```output1
1
```

For example, if we rewrite the integer on the fifth ball to $2$, there are two different integers written on the balls: $1$ and $2$.
On the other hand, it is not possible to rewrite the integers on zero balls so that there are at most two different integers written on the balls, so we should print $1$.

```input2
4 4
1 1 2 2
```

```output2
0
```

Already in the beginning, there are two different integers written on the balls, so we do not need to rewrite anything.

```input3
10 3
5 1 3 2 4 1 1 2 3 4
```

```output3
3
```