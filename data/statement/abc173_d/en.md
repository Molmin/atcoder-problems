Score: $400$ points

## Problem Statement

Quickly after finishing the tutorial of the online game *ATChat*, you have decided to visit a particular place with $N-1$ players who happen to be there. These $N$ players, including you, are numbered $1$ through $N$, and the **friendliness** of Player $i$ is $A_i$.

The $N$ players will arrive at the place one by one in some order. To make sure nobody gets lost, you have set the following rule: players who have already arrived there should form a circle, and a player who has just arrived there should cut into the circle somewhere.

When each player, except the first one to arrive, arrives at the place, the player gets **comfort** equal to the smaller of the friendliness of the clockwise adjacent player and that of the counter-clockwise adjacent player. The first player to arrive there gets the comfort of $0$.

What is the maximum total comfort the $N$ players can get by optimally choosing the order of arrivals and the positions in the circle to cut into?

## Constraints

- All values in input are integers.
- $2 \leq N \leq 2 \times 10^5$
- $1 \leq A_i \leq 10^9$

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $A_1$ $A_2$ $\dots$ $A_N$

## Output

Print the maximum total comfort the $N$ players can get.

```input1
4
2 2 1 3
```

```output1
7
```

By arriving at the place in the order Player $4, 2, 1, 3$, and cutting into the circle as shown in the figure, they can get the total comfort of $7$.

![Figure](https://img.atcoder.jp/ghi/766a260a0019ea93e86e0588cc4db868.png)

They cannot get the total comfort greater than $7$, so the answer is $7$.

```input2
7
1 1 1 1 1 1 1
```

```output2
6
```