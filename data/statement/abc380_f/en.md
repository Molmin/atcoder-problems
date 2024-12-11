Score : $500$ points

## Problem Statement

Takahashi and Aoki will play a game using cards with numbers written on them.

Initially, Takahashi has $N$ cards with numbers $A_1, \ldots, A_N$ in his hand, Aoki has $M$ cards with numbers $B_1, \ldots, B_M$ in his hand, and there are $L$ cards with numbers $C_1, \ldots, C_L$ on the table.<br>
Throughout the game, both Takahashi and Aoki know all the numbers on all the cards, including the opponent's hand.

Starting with Takahashi, they take turns performing the following action:

- Choose one card from his hand and put it on the table. Then, if there is a card on the table with a number less than the number on the card he just played, he may take one such card from the table into his hand.

The player who cannot make a move first loses, and the other player wins. Determine who wins if both players play optimally.

It can be proved that the game always ends in a finite number of moves.

## Constraints

- $1 \leq N, M, L$
- $N + M + L \leq 12$
- $1 \leq A_i, B_i, C_i \leq 10^9$
- All input values are integers.

## Input

The input is given from Standard Input in the following format:

> $N$ $M$ $L$
> 
> $A_1$ $\ldots$ $A_N$
> 
> $B_1$ $\ldots$ $B_M$
> 
> $C_1$ $\ldots$ $C_L$

## Output

Print `Takahashi` if Takahashi wins, and `Aoki` if Aoki wins.

```input1
1 1 2
2
4
1 3
```

```output1
Aoki
```

The game may proceed as follows (not necessarily optimal moves):

- Takahashi plays $2$ from his hand to the table, and takes $1$ from the table into his hand. Now, Takahashi's hand is $(1)$, Aoki's hand is $(4)$, and the table cards are $(2,3)$.
- Aoki plays $4$ from his hand to the table, and takes $2$ into his hand. Now, Takahashi's hand is $(1)$, Aoki's hand is $(2)$, and the table cards are $(3,4)$.
- Takahashi plays $1$ from his hand to the table. Now, Takahashi's hand is $()$, Aoki's hand is $(2)$, and the table cards are $(1,3,4)$.
- Aoki plays $2$ from his hand to the table. Now, Takahashi's hand is $()$, Aoki's hand is $()$, and the table cards are $(1,2,3,4)$.
- Takahashi cannot make a move and loses; Aoki wins.

```input2
4 4 4
98 98765 987654 987654321
987 9876 9876543 98765432
123 12345 1234567 123456789
```

```output2
Takahashi
```

```input3
1 1 8
10
10
1 2 3 4 5 6 7 8
```

```output3
Aoki
```