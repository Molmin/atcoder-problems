Score : $625$ points

## Problem Statement

There are several balls.
Each ball is one of the colors $1$, $2$, $\ldots$, $N$, and for each $i = 1, 2, \ldots, N$, there are $A_i$ balls of color $i$.

Additionally, there are $M$ boxes.
For each $j = 1, 2, \ldots, M$, the $j$-th box can hold up to $B_j$ balls in total.

Here, for all pairs of integers $(i, j)$ satisfying $1 \leq i \leq N$ and $1 \leq j \leq M$,
the $j$-th box may hold at most $(i \times j)$ balls of color $i$.

Print the maximum total number of balls that the $M$ boxes can hold.

## Constraints

- All input values are integers.
- $1 \leq N \leq 500$
- $1 \leq M \leq 5 \times 10^5$
- $0 \leq A_i, B_i \leq 10^{12}$

## Input

The input is given from Standard Input in the following format:

> $N$ $M$
> 
> $A_1$ $A_2$ $\ldots$ $A_N$
> 
> $B_1$ $B_2$ $\ldots$ $B_M$

## Output

Print the answer.

```input1
2 3
8 10
4 3 8
```

```output1
14
```

You can do as follows to put a total of $14$ balls into the boxes while satisfying the conditions in the problem statement.

- For balls of color $1$, put one into the first box, one into the second box, and three into the third box.
- For balls of color $2$, put two into the first box, two into the second box, and five into the third box.

```input2
1 1
1000000000000
0
```

```output2
0
```

```input3
10 12
59 168 130 414 187 236 330 422 31 407
495 218 351 105 351 414 198 230 345 297 489 212
```

```output3
2270
```