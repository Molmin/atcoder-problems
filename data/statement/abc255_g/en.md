Score : $600$ points

## Problem Statement

Takahashi and Aoki will play a game against each other using $N$ piles of stones.

Initially, for each $i = 1, 2, \ldots, N$, the $i$-th pile is composed of $A_i$ stones.
The players alternately perform the following action, with Takahashi going first.

- Choose a pile with at least one stone remaining, and remove one or more stones.

However, there are $M$ forbidden moves. <br>
For each $i = 1, 2, \ldots, M$, it is not allowed to remove exactly $Y_i$ stones from a pile composed of exactly $X_i$ stones.

The first player to become unable to perform the action loses, resulting in the other player's victory.
Which player will win when both players employ the optimal strategy for the victory?

## Constraints

- $1 \leq N \leq 2 \times 10^5$
- $1 \leq M \leq 2 \times 10^5$
- $1 \leq A_i \leq 10^{18}$
- $1 \leq Y_i \leq X_i \leq 10^{18}$
- $i \neq j \Rightarrow (X_i, Y_i) \neq (X_j, Y_j)$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$ $M$
> 
> $A_1$ $A_2$ $\ldots$ $A_N$
> 
> $X_1$ $Y_1$
> 
> $X_2$ $Y_2$
> 
> $\vdots$
> 
> $X_M$ $Y_M$

## Output

If Takahashi will win when both players employ the optimal strategy for the victory, print `Takahashi`; if Aoki will win, print `Aoki`.

```input1
3 4
1 2 4
2 1
3 3
3 1
1 1
```

```output1
Takahashi
```

For each $i = 1, 2, 3$, let $A'_i$ be the number of stones remaining in the $i$-th pile. Now, we use the sequence $A' = (A'_1, A'_2, A'_3)$ to represent the numbers of stones remaining in the piles.

Before the start of the game, we have $A' = (1, 2, 4)$. One possible progression of the game is as follows.

- First, Takahashi removes $1$ stone from the $3$-rd pile. Now, $A' = (1, 2, 3)$.
- Next, Aoki removes $2$ stones from the $2$-nd pile. Now, $A' = (1, 0, 3)$.
- Then, Takahashi removes $2$ stones from the $3$-rd pile. Now, $A' = (1, 0, 1)$.

At this point, the $1$-st and $3$-rd piles still have $1$ stone each, but it is forbidden ー as the fourth forbidden move ー to remove exactly $1$ stone from a pile composed of exactly $1$ stone, so Aoki cannot play. Thus, Takahashi wins.

```input2
1 5
5
5 1
5 2
5 3
5 4
5 5
```

```output2
Aoki
```