Score : $600$ points

## Problem Statement

There are positive integers $N$ and $M$, where $N \lt M$.<br>
Alice and Bob will play a game. Each player has $N$ cards with $1, 2, \dots, N$ written on them, one for each number.
Starting with Alice, the two players take turns repeatedly performing this action: choose one card from their hand and play it onto the table.<br>
Immediately after a card is played onto the table, if the sum of the numbers on the cards that have been played so far is divisible by $M$, the player who just played the card loses, and the other player wins.<br>
If both players play all their cards without satisfying the above condition, Alice wins.<br>
Who will win, Alice or Bob, when both play optimally?

You are given $T$ test cases. Solve each of them.

## Constraints

- $1 \leq T \leq 10^5$
- $1 \leq N \lt M \leq 10^9$
- All input values are integers.

## Input

The input is given from Standard Input in the following format. Here, $\mathrm{case}_i$ denotes the $i$-th test case.

> $T$
> 
> $\mathrm{case}_1$
> 
> $\mathrm{case}_2$
> 
> $\vdots$
> 
> $\mathrm{case}_T$

Each test case is given in the following format:

> $N$ $M$

## Output

Print $T$ lines. The $i$-th line should contain the answer for the $i$-th test case.<br>
For each test case, if Alice wins when both play optimally, print `Alice`; if Bob wins, print `Bob`.

```input1
8
2 3
3 6
5 9
45 58
39 94
36 54
74 80
61 95
```

```output1
Alice
Alice
Bob
Bob
Alice
Bob
Bob
Alice
```

In the first test case, the game could proceed as follows.

- Initially, both Alice and Bob have two cards: the card with $1$ and the card with $2$.
- Alice plays the card with $1$.-   - The sum of the numbers on the cards played so far is $1$, which is not divisible by $3$, so Alice does not lose.
- Bob plays the card with $1$.-   - The sum is now $2$, which is not divisible by $3$, so Bob does not lose.
- Alice plays the card with $2$.-   - The sum is now $4$, which is not divisible by $3$, so Alice does not lose.
- Bob plays the card with $2$.-   - The sum is now $6$, which is divisible by $3$, so Bob loses and Alice wins.

In the first test case, no matter how Bob plays, Alice can win.