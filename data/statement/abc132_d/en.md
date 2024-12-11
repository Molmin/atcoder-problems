Score : $400$ points

## Problem Statement

There are $K$ blue balls and $N-K$ red balls. The balls of the same color cannot be distinguished. Snuke and Takahashi are playing with these balls.

First, Snuke will arrange the $N$ balls in a row from left to right.

Then, Takahashi will collect only the $K$ blue balls. In one move, he can collect any number of consecutive blue balls. He will collect all the blue balls in the fewest moves possible.

How many ways are there for Snuke to arrange the $N$ balls in a row so that Takahashi will need exactly $i$ moves to collect all the blue balls? Compute this number modulo $10^9+7$ for each $i$ such that $1 \leq i \leq K$.

## Constraints

- $1 \leq K \leq N \leq 2000$

## Input

Input is given from Standard Input in the following format:

> $N$ $K$

## Output

Print $K$ lines. The $i$-th line ($1 \leq i \leq K$) should contain the number of ways to arrange the $N$ balls so that Takahashi will need exactly $i$ moves to collect all the blue balls, modulo $10^9+7$.

```input1
5 3
```

```output1
3
6
1
```

There are three ways to arrange the balls so that Takahashi will need exactly one move: (B, B, B, R, R), (R, B, B, B, R), and (R, R, B, B, B). (R and B stands for red and blue, respectively).

There are six ways to arrange the balls so that Takahashi will need exactly two moves: (B, B, R, B, R), (B, B, R, R, B), (R, B, B, R, B), (R, B, R, B, B), (B, R, B, B, R), and (B, R, R, B, B).

There is one way to arrange the balls so that Takahashi will need exactly three moves: (B, R, B, R, B).

```input2
2000 3
```

```output2
1998
3990006
327341989
```

Be sure to print the numbers of arrangements modulo $10^9+7$.