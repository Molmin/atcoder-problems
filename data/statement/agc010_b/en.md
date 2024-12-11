Score : $500$ points

## Problem Statement

There are $N$ boxes arranged in a circle. The $i$-th box contains $A_i$ stones.

Determine whether it is possible to remove all the stones from the boxes by repeatedly performing the following operation:

- Select one box. Let the box be the $i$-th box. Then, for each $j$ from $1$ through $N$, remove exactly $j$ stones from the $(i+j)$-th box. Here, the $(N+k)$-th box is identified with the $k$-th box.

Note that the operation cannot be performed if there is a box that does not contain enough number of stones to be removed.

## Constraints

- $1 \leq N \leq 10^5$
- $1 \leq A_i \leq 10^9$

## Input

The input is given from Standard Input in the following format:

> $N$
> 
> $A_1$ $A_2$ … $A_N$

## Output

If it is possible to remove all the stones from the boxes, print `YES`. Otherwise, print `NO`.

```input1
5
4 5 1 2 3
```

```output1
YES
```

All the stones can be removed in one operation by selecting the second box.

```input2
5
6 9 12 10 8
```

```output2
YES
```

```input3
4
1 2 3 1
```

```output3
NO
```