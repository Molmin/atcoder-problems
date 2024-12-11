Score : $250$ points

## Problem Statement

There are $N$ boxes numbered $1$ to $N$ and $N$ items numbered $1$ to $N$. Item $i$ $(1 \leq i \leq N)$ is in box $A_i$ and has a weight of $W_i$.

You can repeatedly perform the operation of choosing an item and moving it to another box zero or more times. If the weight of the item being moved is $w$, the cost of the operation is $w$.

Find the minimum total cost required to make each box contain exactly one item.

## Constraints

- $1 \leq N \leq 10^{5}$
- $1 \leq A_i \leq N$ $(1 \leq i \leq N)$
- $1 \leq W_i \leq 10^{4}$ $(1 \leq i \leq N)$
- All input values are integers.

## Input

The input is given from Standard Input in the following format:

> $N$
> 
> $A_1$ $A_2$ $\ldots$ $A_N$
> 
> $W_1$ $W_2$ $\ldots$ $W_N$

## Output

Print the minimum total cost required to make each box contain exactly one item.

```input1
5
2 2 3 3 5
33 40 2 12 16
```

```output1
35
```

With the following two moves, you can make each box contain exactly one item:

- Move item $1$ from box $2$ to box $1$. The cost is $33$.
- Move item $3$ from box $3$ to box $4$. The cost is $2$.

The total cost of these two moves is $35$. It is impossible to make each box contain exactly one item with a cost less than $35$, so print $35$.

```input2
12
3 6 7 4 12 4 8 11 11 1 8 11
3925 9785 9752 3587 4013 1117 3937 7045 6437 6208 3391 6309
```

```output2
17254
```