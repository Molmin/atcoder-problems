Score : $200$ points

## Problem Statement

There are $N$ positive integers written on a blackboard: $A_1, ..., A_N$.

Snuke can perform the following operation when all integers on the blackboard are even:

- Replace each integer $X$ on the blackboard by $X$ divided by $2$.

Find the maximum possible number of operations that Snuke can perform.

## Constraints

- $1 \leq N \leq 200$
- $1 \leq A_i \leq 10^9$

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $A_1$ $A_2$ ... $A_N$

## Output

Print the maximum possible number of operations that Snuke can perform.

```input1
3
8 12 40
```

```output1
2
```

Initially, $[8, 12, 40]$ are written on the blackboard.
Since all those integers are even, Snuke can perform the operation.

After the operation is performed once, $[4, 6, 20]$ are written on the blackboard.
Since all those integers are again even, he can perform the operation.

After the operation is performed twice, $[2, 3, 10]$ are written on the blackboard.
Now, there is an odd number $3$ on the blackboard, so he cannot perform the operation any more.

Thus, Snuke can perform the operation at most twice.

```input2
4
5 6 8 10
```

```output2
0
```

Since there is an odd number $5$ on the blackboard already in the beginning, Snuke cannot perform the operation at all.

```input3
6
382253568 723152896 37802240 379425024 404894720 471526144
```

```output3
8
```