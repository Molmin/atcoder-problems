Score : $1000$ points

## Problem Statement

You, the game master, and $N$ players play a **Hat Guessing Game**.
The players line up behind one another, numbered $1$ to $N$ from front to back.

Each player wears a red or blue hat.
The colors of the hats are represented by a string $S$: player $i$ wears a red hat if the $i$-th character of $S$ is `R`, and a blue hat if it is `B`.
You know the string $S$, but the players do not.
Each player can only see the colors of hats of the players in front of them (namely, the players with smaller player numbers).
Particularly, they cannot see the color of their own hat.

The game goes as follows.

First, you count the numbers of players with red hats and those with blue hats, and tell them to all players.
Then, you repeat the following sequence of events (called a **round**) $10^{100}$ times.

- You ask each player, "Have you found out the color of your own hat?"
Each player will honestly answer `Yes` or `No` without being heard by other players.
- After asking all players, you announce all players who have answered `Yes`.
All players can hear this announcement.
Note that you just announce the player numbers and not the colors of their hats.

All players are extremely clever and know that the other players are also clever.
They start answering `Yes` in the first round when the color of their hat is determined.
Additionally, they know that the other players also take this strategy, and use this knowledge to infer the color of their hat.

For each player, find whether they will have found out the color of their own hat after all rounds.

Process $T$ test cases for each input file.

## Constraints

- $1 \leq T \leq 100$
- $1 \leq N \leq 100$
- $S$ is a string of length $N$ consisting of `R` and `B`.
- All input values are integers.

## Input

The input is given from Standard Input in the following format:

> $T$
> 
> $case_1$
> 
> $case_2$
> 
> $\vdots$
> 
> $case_T$

Each test case $case_i$ is in the following format:

> $N$
> 
> $S$

## Output

For each test case, print the answer as a string of length $N$.
The $i$-th character of the string should be `1` if player $i$ will have found out the color of their own hat after all rounds, and `0` otherwise. 

```input1
7
3
RBR
4
BRBR
5
BBBBB
5
BBBRR
20
BRBBRRRRBRRBRBBBRRBR
50
RRBRRRBBBRRRBBBRRBRRBBRBRRBBRRRRRBBBBBRRRBRBRRBRRR
100
BRBRBRBBRRRBBRRBRBBRBBBRBBRBBRRRRBBRRBBBBBBBBBBBBRRBBRBBRBBBBRRRRRRRRRBRBBRBBBBRBBBRBRRBRRBBRBBBBBBB
```

```output1
101
0101
11111
10111
10111111010101011101
11111010111010111010101010101011111111111011111111
1111111001111001111111010001111101011111111011011011111111111111111101111111111111010101011111111111
```

In the first case, the game goes as follows.

- First, you announce to all players, "Two players wear red hats, and one wears a blue hat."
- Round $1$:-   - Player $1$: answers `No` to your question.
-   - Player $2$: answers `No` to your question.
-   - Player $3$: Because the hats of the players in front of him are red and blue, he realizes his hat is red. He answers `Yes` to your question.
-   - You announce, "Player $3$ answered `Yes`."
- Round $2$:-   - Player $1$: Assume his hat is blue. Then, player $2$ should have noticed in round $1$ that his hat is red. However, player $2$ actually answered `No`. Thus, he realizes his hat is red, and answers `Yes` to your question.
-   - Player $2$: answers `No` to your question.
-   - Player $3$: answers `Yes` to your question.
-   - You announce, "Players $1$ and $3$ answered `Yes`."
- Round $3$:-   - Player $1$: answers `Yes` to your question.
-   - Player $2$: answers `No` to your question.
-   - Player $3$: answers `Yes` to your question.
-   - You announce, "Players $1$ and $3$ answered `Yes`."
- $\vdots$

After all rounds, players $1$ and $3$ know the colors of their hats.
However, player $2$ does not.
More specifically, player $2$ can deny neither the possibility that $S=$`RRB` nor the possibility that $S=$`RBR` with just the information he has, so he cannot determine the color of his hat.
Thus, the string `101` should be printed as the answer.