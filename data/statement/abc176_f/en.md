Score : $600$ points

## Problem Statement

We have $3N$ cards arranged in a row from left to right, where each card has an integer between $1$ and $N$ (inclusive) written on it. The integer written on the $i$-th card from the left is $A_i$.

You will do the following operation $N-1$ times:

- Rearrange the five leftmost cards in any order you like, then remove the three leftmost cards. If the integers written on those three cards are all equal, you gain $1$ point.

After these $N-1$ operations, if the integers written on the remaining three cards are all equal, you will gain $1$ additional point.

Find the maximum number of points you can gain.

## Constraints

- $1 \leq N \leq 2000$
- $1 \leq A_i \leq N$

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $A_1$ $A_2$ $\cdots$ $A_{3N}$

## Output

Print the maximum number of points you can gain.

```input1
2
1 2 1 2 2 1
```

```output1
2
```

Let us rearrange the five leftmost cards so that the integers written on the six cards will be $2\ 2\ 2\ 1\ 1\ 1$ from left to right.

Then, remove the three leftmost cards, all of which have the same integer $2$, gaining $1$ point.

Now, the integers written on the remaining cards are $1\ 1\ 1$.

Since these three cards have the same integer $1$, we gain $1$ more point.

In this way, we can gain $2$ points - which is the maximum possible.

```input2
3
1 1 2 2 3 3 3 2 1
```

```output2
1
```

```input3
3
1 1 2 2 2 3 3 3 1
```

```output3
3
```