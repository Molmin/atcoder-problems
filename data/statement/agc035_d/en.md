Score : $1000$ points

## Problem Statement

There is a stack of $N$ cards, each of which has a non-negative integer written on it. The integer written on the $i$-th card from the top is $A_i$.

Snuke will repeat the following operation until two cards remain:

- Choose three consecutive cards from the stack.
- Eat the middle card of the three.
- For each of the other two cards, replace the integer written on it by the sum of that integer and the integer written on the card eaten.
- Return the two cards to the original position in the stack, without swapping them.

Find the minimum possible sum of the integers written on the last two cards remaining.

## Constraints

- $2 \leq N \leq 18$
- $0 \leq A_i \leq 10^9 (1\leq i\leq N)$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $A_1$ $A_2$ $...$ $A_N$

## Output

Print the minimum possible sum of the integers written on the last two cards remaining.

```input1
4
3 1 4 2
```

```output1
16
```

We can minimize the sum of the integers written on the last two cards remaining by doing as follows:

- Initially, the integers written on the cards are $3$, $1$, $4$, and $2$ from top to bottom.
- Choose the first, second, and third card from the top. Eat the second card with $1$ written on it, add $1$ to each of the other two cards, and return them to the original position in the stack. The integers written on the cards are now $4$, $5$, and $2$ from top to bottom.
- Choose the first, second, and third card from the top. Eat the second card with $5$ written on it, add $5$ to each of the other two cards, and return them to the original position in the stack. The integers written on the cards are now $9$ and $7$ from top to bottom.
- The sum of the integers written on the last two cards remaining is $16$.

```input2
6
5 2 4 1 6 9
```

```output2
51
```

```input3
10
3 1 4 1 5 9 2 6 5 3
```

```output3
115
```