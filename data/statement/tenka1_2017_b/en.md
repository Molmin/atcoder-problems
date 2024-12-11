Score : $200$ points

## Problem Statement

A group of people played a game. All players had distinct scores, which are positive integers.

Takahashi knows $N$ facts on the players' scores. The $i$-th fact is as follows: the $A_i$-th highest score among the players is $B_i$.

Find the maximum possible number of players in the game.

## Constraints

- $1 \leq N \leq 10^5$
- $1 \leq A_i \leq 10^9(1\leq i\leq N)$
- $0 \leq B_i \leq 10^9(1\leq i\leq N)$
- If $i \neq j$, $A_i \neq A_j$.
- There exists a possible outcome of the game that are consistent with the facts.
- All input values are integers.

## Inputs

Input is given from Standard Input in the following format:

> $N$
> 
> $A_1$ $B_1$
> 
> :
> 
> $A_N$ $B_N$

## Outputs

Print the maximum possible number of players in the game.

```input1
3
4 7
2 9
6 2
```

```output1
8
```

The maximum possible number of players is achieved when, for example, the players have the following scores: $12,9,8,7,5,2,1,0$.

```input2
5
1 10
3 6
5 2
4 4
2 8
```

```output2
7
```

```input3
2
1 1000000000
1000000000 1
```

```output3
1000000001
```