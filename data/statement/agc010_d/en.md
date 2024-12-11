Score : $1000$ points

## Problem Statement

There are $N$ integers written on a blackboard. The $i$-th integer is $A_i$, and the greatest common divisor of these integers is $1$.

Takahashi and Aoki will play a game using these integers. In this game, starting from Takahashi the two player alternately perform the following operation:

- Select one integer on the blackboard that is not less than $2$, and subtract $1$ from the integer.
- Then, divide all the integers on the black board by $g$, where $g$ is the greatest common divisor of the integers written on the blackboard.

The player who is left with only $1$s on the blackboard and thus cannot perform the operation, loses the game.
Assuming that both players play optimally, determine the winner of the game.

## Constraints

- $1 \leq N \leq 10^5$
- $1 \leq A_i \leq 10^9$
- The greatest common divisor of the integers from $A_1$ through $A_N$ is $1$.

## Input

The input is given from Standard Input in the following format:

> $N$
> 
> $A_1$ $A_2$ … $A_N$

## Output

If Takahashi will win, print `First`. If Aoki will win, print `Second`.

```input1
3
3 6 7
```

```output1
First
```

Takahashi, the first player, can win as follows:

- Takahashi subtracts $1$ from $7$. Then, the integers become: $(1,2,2)$.
- Aoki subtracts $1$ from $2$. Then, the integers become: $(1,1,2)$.
- Takahashi subtracts $1$ from $2$. Then, the integers become: $(1,1,1)$.

```input2
4
1 2 4 8
```

```output2
First
```

```input3
5
7 8 8 8 8
```

```output3
Second
```