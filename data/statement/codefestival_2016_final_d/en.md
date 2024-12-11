Score : $700$ points

## Problem Statement

Takahashi is playing with $N$ cards.

The $i$-th card has an integer $X_i$ on it.

Takahashi is trying to create as many pairs of cards as possible satisfying one of the following conditions:

- The integers on the two cards are the same.
- The sum of the integers on the two cards is a multiple of $M$.

Find the maximum number of pairs that can be created.

Note that a card cannot be used in more than one pair.

## Constraints

- $2 \leq N \leq 10^5$
- $1 \leq M \leq 10^5$
- $1 \leq X_i \leq 10^5$

## Input

The input is given from Standard Input in the following format:

> $N$ $M$
> 
> $X_1$ $X_2$ $...$ $X_N$

## Output

Print the maximum number of pairs that can be created.

```input1
7 5
3 1 4 1 5 9 2
```

```output1
3
```

Three pairs $(3,2), (1,4)$ and $(1,9)$ can be created.

It is possible to create pairs $(3,2)$ and $(1,1)$, but the number of pairs is not maximized with this.

```input2
15 10
1 5 6 10 11 11 11 20 21 25 25 26 99 99 99
```

```output2
6
```