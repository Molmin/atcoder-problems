Score: $525$ points

## Problem Statement

There are $N$ balls lined up in a row.<br>
The $i$-th ball from the left is of color $C_i$ and has a value of $V_i$.

Takahashi wants to remove **exactly** $K$ balls from this row so that no two adjacent balls have the same color when arranging the remaining balls without changing the order. 
Additionally, under that condition, he wants to maximize the total value of the balls remaining in the row.

Determine if Takahashi can remove $K$ balls so that no two adjacent balls in the remaining row have the same color. If it is possible, find the maximum possible total value of the remaining balls.

## Constraints

- $1\leq K&lt;N\leq 2\times 10^5$
- $K\leq 500$
- $1\leq C_i\leq N$
- $1\leq V_i\leq 10^9$
- All input values are integers.

## Input

The input is given from Standard Input in the following format:

> $N$ $K$
> 
> $C_1$ $V_1$
> 
> $C_2$ $V_2$
> 
> $\vdots$
> 
> $C_N$ $V_N$

## Output

If Takahashi can remove $K$ balls so that no two adjacent balls in the remaining row have the same color, print the maximum possible total value of the remaining balls as an integer.
Otherwise, print $-1$.

```input1
5 2
1 1
3 5
3 3
1 4
1 2
```

```output1
10
```

After removing the $3$-rd and $5$-th balls from the left, the remaining balls are of colors $1, 3, 1$ from left to right, so no two adjacent balls have the same color, satisfying the condition. <br>
The total value of the remaining balls is $V_1+V_2+V_4=1+5+4=10$.<br>
There are other ways to remove two balls from the five balls so that no two adjacent balls have the same color, but the total value of the remaining balls is maximized when removing the $3$-rd and $5$-th balls.

Hence, print $10$.

```input2
3 1
1 10
1 10
1 10
```

```output2
-1
```

No matter how you remove one ball, balls of color $1$ will end up next to each other.<br>
Hence, print $-1$.

```input3
3 1
1 1
2 2
3 3
```

```output3
5
```

Note that exactly $K$ balls must be removed.