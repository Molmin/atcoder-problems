Score : $100$ points

## Problem Statement

We will hand out a total of $K$ cards to $N$ people numbered $1, 2, \ldots, N$.

Beginning with Person $A$, we will give the cards one by one to the people in this order: $A, A+1, A+2, \ldots, N, 1, 2, \ldots$. Who will get the last card?

Formally, after Person $x(1 \leq x &lt; N)$ gets a card, Person $x+1$ will get a card. After Person $N$ gets a card, Person $1$ gets a card.

## Constraints

- $1 \leq N,K \leq 1000$
- $1 \leq A \leq N$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$ $K$ $A$

## Output

Print a number representing the person who will get the last card.

```input1
3 3 2
```

```output1
1
```

The cards are given to Person $2, 3, 1$ in this order.

```input2
1 100 1
```

```output2
1
```

```input3
3 14 2
```

```output3
3
```