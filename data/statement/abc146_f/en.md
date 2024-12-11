Score : $600$ points

## Problem Statement

Takahashi is playing a board game called Sugoroku.

On the board, there are $N + 1$ squares numbered $0$ to $N$. Takahashi starts at Square $0$, and he has to stop exactly at Square $N$ to win the game.

The game uses a roulette with the $M$ numbers from $1$ to $M$. In each turn, Takahashi spins the roulette. If the number $x$ comes up when he is at Square $s$, he moves to Square $s+x$. If this makes him go beyond Square $N$, he loses the game.

Additionally, some of the squares are Game Over Squares. He also loses the game if he stops at one of those squares. You are given a string $S$ of length $N + 1$, representing which squares are Game Over Squares. For each $i$ $(0 \leq i \leq N)$, Square $i$ is a Game Over Square if $S[i] = 1$ and not if $S[i] = 0$.

Find the sequence of numbers coming up in the roulette in which Takahashi can win the game in the fewest number of turns possible. If there are multiple such sequences, find the lexicographically smallest such sequence. If Takahashi cannot win the game, print $-1$.

## Constraints

- $1 \leq N \leq 10^5$
- $1 \leq M \leq 10^5$
- $|S| = N + 1$
- $S$ consists of `0` and `1`.
- $S[0] =$ `0`
- $S[N] =$ `0`

## Input

Input is given from Standard Input in the following format:

> $N$ $M$
> 
> $S$

## Output

If Takahashi can win the game, print the lexicographically smallest sequence among the shortest sequences of numbers coming up in the roulette in which Takahashi can win the game, with spaces in between.

If Takahashi cannot win the game, print $-1$.

```input1
9 3
0001000100
```

```output1
1 3 2 3
```

If the numbers $1$, $3$, $2$, $3$ come up in this order, Takahashi can reach Square $9$ via Square $1$, $4$, and $6$. He cannot reach Square $9$ in three or fewer turns, and this is the lexicographically smallest sequence in which he reaches Square $9$ in four turns.

```input2
5 4
011110
```

```output2
-1
```

Takahashi cannot reach Square $5$.

```input3
6 6
0101010
```

```output3
6
```