Score: $100$ points

## Problem Statement

Team Takahashi and Team Aoki are playing a baseball game, with Team Takahashi batting first.<br>
Currently, the game has finished through the top of the ninth inning, and the bottom of the ninth is about to begin.

Team Takahashi scored $A_i$ runs in the top of the $i$-th inning $(1\leq i\leq 9)$, and Team Aoki scored $B_j$ runs in the bottom of the $j$-th inning $(1\leq j\leq 8)$.<br>
At the end of the top of the ninth, Team Takahashi's score is not less than Team Aoki's score.<br>
Determine the minimum number of runs Team Aoki needs to score in the bottom of the ninth to win the game.

Here, if the game is tied at the end of the bottom of the ninth, it results in a draw. Therefore, for Team Aoki to win, they must score strictly more runs than Team Takahashi by the end of the bottom of the ninth.<br>
Team Takahashi's score at any point is the total runs scored in the tops of the innings up to that point, and Team Aoki's score is the total runs scored in the bottoms of the innings.

## Constraints

- $0\leq A_i, B_j\leq 99$
- $A_1 + A_2 + A_3 + A_4 + A_5 + A_6 + A_7 + A_8 + A_9 \geq B_1 + B_2 + B_3 + B_4 + B_5 + B_6 + B_7 + B_8$
- All input values are integers.

## Input

The input is given from Standard Input in the following format:

> $A_1$ $A_2$ $A_3$ $A_4$ $A_5$ $A_6$ $A_7$ $A_8$ $A_9$
> 
> $B_1$ $B_2$ $B_3$ $B_4$ $B_5$ $B_6$ $B_7$ $B_8$

## Output

Print the minimum number of runs Team Aoki needs to score in the bottom of the ninth inning to win.

```input1
0 1 0 1 2 2 0 0 1
1 1 0 0 0 0 1 0
```

```output1
5
```

At the end of the top of the ninth inning, Team Takahashi has scored seven runs, and Team Aoki has scored three runs.<br>
Therefore, if Team Aoki scores five runs in the bottom of the ninth, the scores will be $7-8$, allowing them to win.<br>
Note that scoring four runs would result in a draw and not a victory.

```input2
0 0 0 0 0 0 0 0 0
0 0 0 0 0 0 0 0
```

```output2
1
```