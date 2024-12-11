Score : $500$ points

## Problem Statement

There is a string $s$ of length $3$ or greater.
No two neighboring characters in $s$ are equal.

Takahashi and Aoki will play a game against each other.
The two players alternately performs the following operation, Takahashi going first:

- Remove one of the characters in $s$, excluding both ends. However, a character cannot be removed if removal of the character would result in two neighboring equal characters in $s$.

The player who becomes unable to perform the operation, loses the game. Determine which player will win when the two play optimally.

## Constraints

- $3 \leq |s| \leq 10^5$
- $s$ consists of lowercase English letters.
- No two neighboring characters in $s$ are equal.

## Input

The input is given from Standard Input in the following format:

> $s$

## Output

If Takahashi will win, print `First`. If Aoki will win, print `Second`.

```input1
aba
```

```output1
Second
```

Takahashi, who goes first, cannot perform the operation, since removal of the `b`, which is the only character not at either ends of $s$, would result in $s$ becoming `aa`, with two `a`s neighboring.

```input2
abc
```

```output2
First
```

When Takahashi removes `b` from $s$, it becomes `ac`.
Then, Aoki cannot perform the operation, since there is no character in $s$, excluding both ends.

```input3
abcab
```

```output3
First
```