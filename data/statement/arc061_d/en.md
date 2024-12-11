Score : $1100$ points

## Problem Statement

Alice, Bob and Charlie are playing *Card Game for Three*, as below:

- At first, each of the three players has a deck consisting of some number of cards. Alice's deck has $N$ cards, Bob's deck has $M$ cards, and Charlie's deck has $K$ cards. Each card has a letter `a`, `b` or `c` written on it. The orders of the cards in the decks cannot be rearranged.
- The players take turns. Alice goes first.
- If the current player's deck contains at least one card, discard the top card in the deck. Then, the player whose name begins with the letter on the discarded card, takes the next turn. (For example, if the card says `a`, Alice takes the next turn.)
- If the current player's deck is empty, the game ends and the current player wins the game.

There are $3^{N+M+K}$ possible patters of the three player's initial decks. Among these patterns, how many will lead to Alice's victory?

Since the answer can be large, print the count modulo $1\,000\,000\,007 (=10^9+7)$.

## Constraints

- $1 \leq N \leq 3 \times 10^5$
- $1 \leq M \leq 3 \times 10^5$
- $1 \leq K \leq 3 \times 10^5$

## Partial Scores

- $500$ points will be awarded for passing the test set satisfying the following: $1 \leq N \leq 1000$, $1 \leq M \leq 1000$, $1 \leq K \leq 1000$.

## Input

The input is given from Standard Input in the following format:

> $N$ $M$ $K$

## Output

Print the answer modulo $1\,000\,000\,007 (=10^9+7)$.

```input1
1 1 1
```

```output1
17
```

- If Alice's card is `a`, then Alice will win regardless of Bob's and Charlie's card. There are $3 \times 3=9$ such patterns.
- If Alice's card is `b`, Alice will only win when Bob's card is `a`, or when Bob's card is `c` and Charlie's card is `a`. There are $3+1=4$ such patterns.
- If Alice's card is `c`, Alice will only win when Charlie's card is `a`, or when Charlie's card is `b` and Bob's card is `a`. There are $3+1=4$ such patterns.

Thus, there are total of $9+4+4=17$ patterns that will lead to Alice's victory.

```input2
4 2 2
```

```output2
1227
```

```input3
1000 1000 1000
```

```output3
261790852
```