Score : $1600$ points

## Problem Statement

$2^N$ players competed in a tournament.
Each player has a unique ID number from $1$ through $2^N$. When two players play a match, the player with the smaller ID always wins.

This tournament was a little special, in which losers are not eliminated to fully rank all the players.

We will call such a tournament that involves $2^n$ players a *full tournament of level $n$*.
In a full tournament of level $n$, the players are ranked as follows:

- In a full tournament of level $0$, the only player is ranked first.
- In a full tournament of level $n\ (1 \leq n)$, initially all $2^n$ players are lined up in a row. Then:
- First, starting from the two leftmost players, the players are successively divided into $2^{n-1}$ pairs of two players.
- Each of the pairs plays a match. The winner enters the "Won" group, and the loser enters the "Lost" group.
- The players in the "Won" group are lined up in a row, maintaining the relative order in the previous row. Then, a full tournament of level $n-1$ is held to fully rank these players.
- The players in the "Lost" group are also ranked in the same manner, then the rank of each of these players increases by $2^{n-1}$.

For example, the figure below shows how a full tournament of level $3$ progresses when eight players are lined up in the order $3,4,8,6,2,1,7,5$. The list of the players sorted by the final ranking will be $1,3,5,6,2,4,7,8$.

![](https://img.atcoder.jp/cf17-final/e93269f0dfb68bcdff175a3b634ab0d8.png)

Takahashi has a sheet of paper with the list of the players sorted by the final ranking in the tournament, but some of it blurred and became unreadable.
You are given the information on the sheet as a sequence $A$ of length $N$. When $A_i$ is $1$ or greater, it means that the $i$-th ranked player had the ID $A_i$. If $A_i$ is $0$, it means that the ID of the $i$-th ranked player is lost.

Determine whether there exists a valid order in the first phase of the tournament which is consistent with the sheet. If it exists, provide one such order.

## Constraints

- $1 \leq N \leq 18$
- $0 \leq A_i \leq 2^N$
- No integer, except $0$, occurs more than once in $A_i$.

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $A_1$ $A_2$ $...$ $A_{2^N}$

## Output

If there exists a valid order in the first phase of the tournament, print `YES` first, then in the subsequent line, print the IDs of the players sorted by the final ranking, with spaces in between.
If there is no such order, print `NO` instead.

```input1
3
0 3 0 6 0 0 0 8
```

```output1
YES
3 4 8 6 2 1 7 5
```

This is the same order as the one in the statement.

```input2
1
2 1
```

```output2
NO
```