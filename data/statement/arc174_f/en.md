Points: $900$ points

## Problem Statement

Players Alice and Bob play a game using sequences $L$ and $R$ of length $N$, as follows.

- The game consists of $N$ turns.
- If $i$ is odd, turn $i$ is played by Alice; if $i$ is even, turn $i$ is played by Bob.
- Initially, there is a pile with some number of stones.
- For $i=1,2,\dots,N$ in this order, they perform the following operation (called turn $i$):-   - The player who plays turn $i$ takes an integer number of stones between $L_i$ and $R_i$, inclusive, from the pile.
-   - If the player cannot take stones satisfying the above, they lose, and the other player wins.
- If neither player has lost by the end of turn $N$, the game ends in a draw.

Before the game starts, both players are informed of the sequences $L$ and $R$ and the number of stones in the pile at the start of the game.

It can be proved that the game has exactly one of the following three **consequences**:

- `Alice` ... Alice has a winning strategy.
- `Bob` ... Bob has a winning strategy.
- `Draw` ... Neither player has a winning strategy.

Answer $Q$ queries about this game. The $i$-th query is as follows:

- Assume that the pile contains $C_i$ stones at the start of the game. Report the consequence of the game: `Alice`, `Bob`, or `Draw`.

## Constraints

- $N$, $L_i$, $R_i$, $Q$, and $C_i$ are integers.
- $1 \le N \le 3 \times 10^5$
- $1 \le L_i \le R_i \le 10^9$
- $1 \le Q \le 3 \times 10^5$
- $1 \le C_i \le \sum_{i=1}^{N} R_i$

## Input

The input is given from Standard Input in the following format:

> $N$
> 
> $L_1$ $R_1$
> 
> $L_2$ $R_2$
> 
> $\vdots$
> 
> $L_N$ $R_N$
> 
> $Q$
> 
> $C_1$
> 
> $C_2$
> 
> $\vdots$
> 
> $C_Q$

## Output

Print $Q$ lines.
The $i$-th line should contain the answer to the $i$-th query.

```input1
4
1 3
1 2
3 4
1 2
11
1
2
3
4
5
6
7
8
9
10
11
```

```output1
Alice
Alice
Alice
Bob
Bob
Alice
Alice
Alice
Draw
Draw
Draw
```

This input contains $11$ queries.

- When $C_i \le 3$, Alice can take all $C_i$ stones on turn $1$, leaving no stones in the pile, so Alice has a winning strategy.
- When $4 \le C_i \le 5$, Bob has a winning strategy.
- When $6 \le C_i \le 8$, Alice has a winning strategy.
- When $C_i \ge 9$, neither player has a winning strategy.-   - For example, if $C_i=9$, the game could proceed as follows:-   -   - On turn $1$, Alice takes $3$ stones. $6$ stones remain.
-   -   - On turn $2$, Bob takes $1$ stone. $5$ stones remain.
-   -   - On turn $3$, Alice takes $4$ stones. $1$ stone remains.
-   -   - On turn $4$, Bob takes $1$ stone. No stones remain.
-   -   - Since neither player has lost by the end of turn $4$, the game ends in a draw.
-   - Various other progressions are possible, but it can be shown that when $C_i=9$, neither player has a winning strategy (if both players play optimally, the game will end in a draw).