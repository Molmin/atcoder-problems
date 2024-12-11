Score : $100$ points

## Problem Statement

Takahashi is playing a game.

In this game, each time the number of coins you have collected so far becomes a multiple of $100$, you get a prize.

Takahashi has collected $X$ coins so far. How many more coins does he need to collect before he gets the next prize? (If $X$ is a multiple of $100$, we assume that he has already got the prize for collecting $X$ coins in total.)

## Constraints

- $0 \leq X \leq 10^5$

## Input

Input is given from Standard Input in the following format:

> $X$

## Output

Print the number of additional coins that he needs to collect before he gets the next prize.

```input1
140
```

```output1
60
```

He gets the next prize when he has collected $200$ coins in total. To get it, he needs to collect $60$ more coins.

```input2
1000
```

```output2
100
```

He gets the next prize when he has collected $1100$ coins in total.