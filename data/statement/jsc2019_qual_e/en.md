Score : $800$ points

## Problem Statement

There are $N$ cards placed on a grid with $H$ rows and $W$ columns of squares.

The $i$-th card has an integer $A_i$ written on it, and it is placed on the square at the $R_i$-th row from the top and the $C_i$-th column from the left.

Multiple cards may be placed on the same square.

You will first pick up at most one card from each row.

Then, you will pick up at most one card from each column.

Find the maximum possible sum of the integers written on the picked cards.

## Constraints

- All values are integers.
- $1 \leq N \leq 10^5$
- $1 \leq H, W \leq 10^5$
- $1 \leq A_i \leq 10^5$
- $1 \leq R_i \leq H$
- $1 \leq C_i \leq W$

## Input

Input is given from Standard Input in the following format:

> $N$ $H$ $W$
> 
> $R_1$ $C_1$ $A_1$
> 
> $R_2$ $C_2$ $A_2$
> 
> $\vdots$
> 
> $R_N$ $C_N$ $A_N$

## Output

Print the maximum possible sum of the integers written on the picked cards.

```input1
6 2 2
2 2 2
1 1 8
1 1 5
1 2 9
1 2 7
2 1 4
```

```output1
28
```

The sum of the integers written on the picked cards will be $28$, the maximum value possible, if you pick up cards as follows:

- Pick up the fourth card from the first row.
- Pick up the sixth card from the second row.
- Pick up the second card from the first column.
- Pick up the fifth card from the second column.

```input2
13 5 6
1 3 35902
4 6 19698
4 6 73389
3 6 3031
3 1 4771
1 4 4784
2 1 36357
2 1 24830
5 6 50219
4 6 22645
1 2 30739
1 4 68417
1 5 78537
```

```output2
430590
```

```input3
1 100000 100000
1 1 1
```

```output3
1
```