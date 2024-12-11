Score : $200$ points

## Problem Statement

We have a deck of $N$ cards.<br>
Each of these cards is *good* or *bad*.

Using this deck, Takahashi and Aoki will play a game against each other.<br>
In the game, the players alternately draw the topmost card and eat it.<br>
The player who first gets to eat a bad card loses the game. (Here, it is guaranteed that the deck contains at least one bad card.)

You are given a string $S$ consisting of `0` and `1`. For each $i = 1, 2, \ldots, N$,

- if the $i$-th character of $S$ is `0`, it means that the $i$-th card from the top of the deck is good;
- if the $i$-th character of $S$ is `1`, it means that the $i$-th card from the top of the deck is bad.

Which player will **lose** when Takahashi goes first in the game?

## Constraints

- $1 \leq N \leq 10^5$
- $N$ is an integer.
- $S$ is a string of length $N$ consisting of `0` and `1`.
- $S$ contains at least one occurrence of `1`.

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $S$

## Output

Print the name of the player who will **lose** when Takahashi goes first in the game: `Takahashi` or `Aoki`.

```input1
5
00101
```

```output1
Takahashi
```

First, Takahashi will eat a good card. Next, Aoki will eat a good card. Then, Takahashi will eat a bad card.<br>
Thus, Takahashi will be the first to eat a bad card, so we should print `Takahashi`.

```input2
3
010
```

```output2
Aoki
```