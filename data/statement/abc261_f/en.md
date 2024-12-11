Score : $500$ points

## Problem Statement

There are $N$ balls arranged from left to right.
The color of the $i$-th ball from the left is Color $C_i$, and an integer $X_i$ is written on it.

Takahashi wants to rearrange the balls so that the integers written on the balls are non-decreasing from left to right.
In other words, his objective is to reach a situation where, for every $1\leq i\leq N-1$, the number written on the $(i+1)$-th ball from the left is greater than or equal to the number written on the $i$-th ball from the left.

For this, Takahashi can repeat the following operation any number of times (possibly zero):

Choose an integer $i$ such that $1\leq i\leq N-1$.<br>
If the colors of the $i$-th and $(i+1)$-th balls from the left are different, pay a cost of $1$.
(No cost is incurred if the colors are the same).<br>
Swap the $i$-th and $(i+1)$-th balls from the left.

Find the minimum total cost Takahashi needs to pay to achieve his objective.

## Constraints

- $2 \leq N \leq 3\times 10^5$
- $1\leq C_i\leq N$
- $1\leq X_i\leq N$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $C_1$ $C_2$ $\ldots$ $C_N$
> 
> $X_1$ $X_2$ $\ldots$ $X_N$

## Output

Print the minimum total cost Takahashi needs to pay to achieve his objective, as an integer.

```input1
5
1 5 2 2 1
3 2 1 2 1
```

```output1
6
```

Let us represent a ball as $($Color$,$ Integer$)$. 
The initial situation is $(1,3)$, $(5,2)$, $(2,1)$, $(2,2)$, $(1,1)$.
Here is a possible sequence of operations for Takahashi:

- Swap the $1$-st ball (Color $1$) and $2$-nd ball (Color $5$). Now the balls are arranged in the order $(5,2)$, $(1,3)$, $(2,1)$, $(2,2)$, $(1,1)$.
- Swap the $2$-nd ball (Color $1$) and $3$-rd ball (Color $2$). Now the balls are arranged in the order $(5,2)$, $(2,1)$, $(1,3)$, $(2,2)$, $(1,1)$.
- Swap the $3$-rd ball (Color $1$) and $4$-th ball (Color $2$). Now the balls are in the order $(5,2)$, $(2,1)$, $(2,2)$, $(1,3)$, $(1,1)$.
- Swap the $4$-th ball (Color $1$) and $5$-th ball (Color $1$). Now the balls are in the order $(5,2)$, $(2,1)$, $(2,2)$, $(1,1)$, $(1,3)$.
- Swap the $3$-rd ball (Color $2$) and $4$-th ball (Color $1$). Now the balls are in the order$(5,2)$, $(2,1)$, $(1,1)$, $(2,2)$, $(1,3)$.
- Swap the $1$-st ball (Color $5$) and $2$-nd ball (Color $2$). Now the balls are in the order $(2,1)$, $(5,2)$, $(1,1)$, $(2,2)$, $(1,3)$.
- Swap the $2$-nd ball (Color $5$) and $3$-rd ball (Color $1$). Now the balls are in the order $(2,1)$, $(1,1)$, $(5,2)$, $(2,2)$, $(1,3)$.

After the last operation, the numbers written on the balls are $1,1,2,2,3$ from left to right, which achieves Takahashi's objective.

The $1$-st, $2$-nd, $3$-rd, $5$-th, $6$-th, and $7$-th operations incur a cost of $1$ each, for a total of $6$, which is the minimum.
Note that the $4$-th operation does not incur a cost since the balls are both in Color $1$.

```input2
3
1 1 1
3 2 1
```

```output2
0
```

All balls are in the same color, so no cost is incurred in swapping balls.

```input3
3
3 1 2
1 1 2
```

```output3
0
```

Takahashi's objective is already achieved without any operation.