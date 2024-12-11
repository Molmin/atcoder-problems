Score : $100$ points

## Problem Statement

There is a stack of $N$ cards, and the $i$-th card from the top has an integer $A_i$ written on it.

You take $K$ cards from the bottom of the stack and place them on top of the stack, maintaining their order.

Print the integers written on the cards from top to bottom after the operation.

## Constraints

- $1 \leq K &lt; N \leq 100$
- $1 \leq A_i \leq 100$
- All input values are integers.

## Input

The input is given from Standard Input in the following format:

> $N$ $K$
> 
> $A_1$ $A_2$ $\ldots$ $A_N$

## Output

Let $B_i$ be the integer written on the $i$-th card from the top of the stack after the operation. Print $B_1,B_2,\ldots,B_N$ in this order, separated by spaces.

```input1
5 3
1 2 3 4 5
```

```output1
3 4 5 1 2
```

Initially, the integers written on the cards are $1,2,3,4,5$ from top to bottom.

After taking three cards from the bottom of the stack and placing them on top, the integers written on the cards become $3,4,5,1,2$ from top to bottom.

```input2
6 2
1 2 1 2 1 2
```

```output2
1 2 1 2 1 2
```

The integers written on the cards are not necessarily distinct.