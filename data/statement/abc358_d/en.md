Score : $350$ points

## Problem Statement

A souvenir shop at AtCoder Land sells $N$ boxes.

The boxes are numbered $1$ to $N$, and box $i$ has a price of $A_i$ yen and contains $A_i$ pieces of candy.

Takahashi wants to buy $M$ out of the $N$ boxes and give one box each to $M$ people named $1, 2, \ldots, M$.

Here, he wants to buy boxes that can satisfy the following condition:

- For each $i = 1, 2, \ldots, M$, person $i$ is given a box containing at least $B_i$ pieces of candy.

Note that it is not allowed to give more than one box to a single person or to give the same box to multiple people.

Determine whether it is possible to buy $M$ boxes that can satisfy the condition, and if it is possible, find the minimum total amount of money Takahashi needs to pay.

## Constraints

- $1 \leq M \leq N \leq 2 \times 10^5$
- $1 \leq A_i, B_i \leq 10^9$
- All input values are integers.

## Input

The input is given from Standard Input in the following format:

> $N$ $M$
> 
> $A_1$ $A_2$ $\ldots$ $A_N$
> 
> $B_1$ $B_2$ $\ldots$ $B_M$

## Output

If it is possible to buy $M$ boxes that can satisfy the condition, print the minimum total amount of money Takahashi needs to pay. Otherwise, print $-1$.

```input1
4 2
3 4 5 4
1 4
```

```output1
7
```

Takahashi can buy boxes $1$ and $4$, and give box $1$ to person $1$ and box $4$ to person $2$ to satisfy the condition.

In this case, he needs to pay $7$ yen in total, and it is impossible to satisfy the condition by paying less than $7$ yen, so print $7$.

```input2
3 3
1 1 1
1000000000 1000000000 1000000000
```

```output2
-1
```

```input3
7 3
2 6 8 9 5 1 11
3 5 7
```

```output3
19
```