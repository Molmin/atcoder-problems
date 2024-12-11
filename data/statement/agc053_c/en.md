Score : $900$ points

## Problem Statement

We have $2N$ cards, with ID numbers from $1$ through $2N$.
Consider the following game using them.

First, the dealer randomly split the cards into two piles of $N$ cards each.
Here, the dealer also randomly chooses the order of cards in each pile.
Then, the player repeatedly does the operation below until one pile becomes empty, and the number of operations done will be the score.

- Choose a positive integer $k$ and compare the $k$-th cards from the top in the two piles. ($k$ should not exceed the number of each pile.) Then, remove the card with the smaller ID number from the pile that contains it.

Assume that a *cheater* plays this game.
That is, assume that the player can always see the ID numbers of all cards in both piles.
Find the expected value of the score when the player plays optimally to minimize it, modulo $(10^9 + 7)$ (see Notes).

## Notes

- The expected value in question will be a rational number. If we express it as a fractional number $\frac{y}{x}$ where $x$ and $y$ are coprime positive integers, $x$ will be coprime with $P=10^9+7$, so print the only integer $z$ between $0$ and $P-1$ (inclusive) such that $xz \equiv y \pmod P$.

## Constraints

- $1 \leq N \leq 10^6$

## Input

Input is given from Standard Input in the following format:

> $N$

## Output

Print the answer.

```input1
1
```

```output1
1
```

```input2
3
```

```output2
486111118
```