Score : $600$ points

## Problem Statement

You are given two integer sequences of length $N$, $A = (A_1, A_2, \ldots, A_N)$ and $B = (B_1, B_2, \ldots, B_N)$, each consisting of $0$ and $1$.

You can perform the following operation on $A$ any number of times (possibly zero):

1. First, choose an integer $i$ satisfying $1 \leq i \leq N$, and flip the value of $A_i$ (if the original value is $0$, change it to $1$; if it is $1$, change it to $0$).
2. Then, pay $\sum_{k=1}^N A_k C_k$ yen as the cost of this operation.

Note that the cost calculation in step 2 uses the $A$ after the change in step 1.

Print the minimum total cost required to make $A$ identical to $B$.

## Constraints

- $1 \leq N \leq 2 \times 10^5$
- $A_i, B_i \in {0, 1}$
- $1 \leq C_i \leq 10^6$
- All input values are integers.

## Input

The input is given from Standard Input in the following format:

> $N$
> 
> $A_1$ $A_2$ $\ldots$ $A_N$
> 
> $B_1$ $B_2$ $\ldots$ $B_N$
> 
> $C_1$ $C_2$ $\ldots$ $C_N$

## Output

Print the answer.

```input1
4
0 1 1 1
1 0 1 0
4 6 2 9
```

```output1
16
```

Consider the following procedure:

- First, flip $A_4$. Now, $A = (0, 1, 1, 0)$. The cost of this operation is $0 \times 4 + 1 \times 6 + 1 \times 2 + 0 \times 9 = 8$ yen.
- Next, flip $A_2$. Now, $A = (0, 0, 1, 0)$. The cost of this operation is $0 \times 4 + 0 \times 6 + 1 \times 2 + 0 \times 9 = 2$ yen.
- Finally, flip $A_1$. Now, $A = (1, 0, 1, 0)$, which matches $B$. The cost of this operation is $1 \times 4 + 0 \times 6 + 1 \times 2 + 0 \times 9 = 6$ yen.

In this case, the total cost is $8 + 2 + 6 = 16$ yen, which is the minimum possible.

```input2
5
1 1 1 1 1
1 1 1 1 1
1 1 1 1 1
```

```output2
0
```

$A$ and $B$ are already identical initially, so there is no need to perform any operations.

```input3
20
1 1 1 1 0 0 1 1 0 0 0 1 0 1 0 1 1 0 1 0
0 0 0 1 1 1 0 1 1 0 0 0 0 0 0 1 0 1 0 0
52 73 97 72 54 15 79 67 13 55 65 22 36 90 84 46 1 2 27 8
```

```output3
2867
```