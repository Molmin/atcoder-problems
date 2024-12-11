Score : $500$ points

## Problem Statement

There are $N$ cards, each with a number written on both sides. On the $i$-th card, the number $A_i$ is written in red on one side, and the number $B_i$ is written in blue on the other side. Initially, all cards are placed with the red number side facing up. Alice and Bob play a game in which they repeat the following steps.

- First, Alice chooses one of the remaining cards and flips it over. Next, Bob removes one of the remaining cards. Then, Bob scores points equal to the number written on the face-up side of the removed card.

The game ends when there are no cards left.

Alice tries to minimize Bob's score at the end of the game, and Bob tries to maximize it. What is Bob's score at the end of the game when both players take optimal steps?

## Constraints

- $1\leq N\leq 2\times 10^5$
- $1\leq A_i, B_i\leq 10^9$ $(1\leq i \leq N)$
- All input values are integers.

## Input

The input is given from Standard Input in the following format:

> $N$
> 
> $A_1$ $B_1$
> 
> $A_2$ $B_2$
> 
> $\vdots$
> 
> $A_N$ $B_N$

## Output

Print the answer as an integer.

```input1
3
6 4
2 1
5 3
```

```output1
12
```

In the initial state, the numbers written on the face-up sides are $6,2,5$. One possible progression from here is as follows.

1. Alice flips the first card. Then, the numbers written on the face-up sides are $4,2,5$. Bob removes the third card and scores $5$ points.
2. Alice flips the second card. Then, the numbers written on the face-up sides are $4,1$. Bob removes the second card and scores $1$ point.
3. Alice flips the first card, the final one remaining. Then, the number written on the face-up side is $6$. Bob removes it and scores $6$ points.

In this case, Bob's final score is $12$ points. In fact, this progression is an example of optimal sequences of moves for both players; the answer is $12$.

```input2
5
166971716 552987438
219878198 619875818
918378176 518975015
610749017 285601372
701849287 307601390
```

```output2
3078692091
```