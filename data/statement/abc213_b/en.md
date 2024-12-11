Score : $200$ points

## Problem Statement

$N$ players, who are numbered $1, \ldots, N$, have played a game. Player $i$ has scored $A_i$, and a player with a **smaller** score ranks higher.

The player who ranks the second lowest will receive a booby prize. Who is this player? Answer with an integer representing the player.

## Constraints

- $2 \leq N \leq 2\times 10^5$
- $1 \leq A_i \leq 10^9$
- $A_i$ are distinct.
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $A_1$ $\ldots$ $A_N$

## Output

Print the answer.

```input1
6
1 123 12345 12 1234 123456
```

```output1
3
```

It is Player $3$ who ranks fifth among the six players.

```input2
5
3 1 4 15 9
```

```output2
5
```