Score : $500$ points

## Problem Statement

   #nck {
      width: 30px;
      height: auto;
   }

A cheetah and a cheater are going to play the game of Nim.
In this game they use $N$ piles of stones.
Initially the $i$-th pile contains $a_i$ stones.
The players take turns alternately, and the cheetah plays first.
In each turn, the player chooses one of the piles, and takes one or more stones from the pile.
The player who can't make a move loses.

However, before the game starts, the cheater wants to cheat a bit to make sure that he can win regardless of the moves by the cheetah.
From each pile, the cheater takes zero or one stone and eats it before the game.
In case there are multiple ways to guarantee his winning, he wants to minimize the number of stones he eats.

Compute the number of stones the cheater will eat.
In case there is no way for the cheater to win the game even with the cheating, print `-1` instead.

## Constraints

- $1 \leq N \leq 10^5$
- $2 \leq a_i \leq 10^9$

## Input

The input is given from Standard Input in the following format:

> $N$
> 
> $a_1$
> 
> :
> 
> $a_N$

## Output

Print the answer.

```input1
3
2
3
4
```

```output1
3
```

The only way for the cheater to win the game is to take stones from all piles and eat them.

```input2
3
100
100
100
```

```output2
-1
```