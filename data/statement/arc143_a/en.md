Score : $300$ points

## Problem Statement

Three non-negative integers $A$, $B$, and $C$ are written on a blackboard.
You can perform the following two operations any number of times in any order.

- Subtract $1$ from two of the written integers of your choice.
- Subtract $1$ from all of the written integers.

Your objective is to make all the numbers on the blackboard $0$.
Determine whether it is achievable. If it is, find the minimum number of times you need to perform an operation to achieve it.

## Constraints

- $0 \leq A, B, C \leq 10^{18}$

## Input

Input is given from Standard Input in the following format:

> $A$ $B$ $C$

## Output

If the objective is unachievable, print `-1`. If it is achievable, print the minimum number of times you need to perform an operation to achieve it.

```input1
2 2 3
```

```output1
3
```

Here is one way to make all the numbers $0$.

- Subtract $1$ from $A$ and $C$. Now the numbers are $1$, $2$, $2$.
- Subtract $1$ from $B$ and $C$. Now the numbers are $1$, $1$, $1$.
- Subtract $1$ from all the numbers. Now the numbers are $0$, $0$, $0$.

```input2
0 0 1
```

```output2
-1
```

```input3
0 0 0
```

```output3
0
```