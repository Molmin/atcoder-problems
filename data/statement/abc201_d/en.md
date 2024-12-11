Score : $400$ points

## Problem Statement

We have a grid with $H$ rows and $W$ columns of squares, where each square is blue or red. The square at the $i$-th row and $j$-th column is blue if $A_{i, j}$ is `+`, and red if $A_{i, j}$ is `-`.<br>
There is a piece on this grid, which is initially placed on the top-left square. Takahashi and Aoki will play a game using this piece.<br>
Each of the two players has $0$ points in the beginning. They will alternately do the following operation, with Takahashi going first:

- Move the piece one square right or one square down. It is not allowed to move the piece outside the grid. Then, the player (who moved the piece) gets one point if the piece is now on a blue square, and loses one point if the piece is now on a red square.

The game ends when one of the players is unable to do the operation. Then, the player with the greater number of points wins the game if they have different numbers of points. Otherwise, the game is drawn.<br>
Find the result of the game when both players play the game to get the best outcome.

## Constraints

- $1 \le H, W \le 2000$
- $A_{i, j}$ is `+` or `-`.

## Input

Input is given from Standard Input in the following format:

> $H$ $W$
> 
> $A_{1, 1}A_{1, 2}A_{1, 3} \dots A_{1, W}$
> 
> $A_{2, 1}A_{2, 2}A_{2, 3} \dots A_{2, W}$
> 
> $A_{3, 1}A_{3, 2}A_{3, 3} \dots A_{3, W}$
> 
> $\hspace{2cm}\vdots$
> 
> $A_{H, 1}A_{H, 2}A_{H, 3} \dots A_{H, W}$

## Output

If Takahashi will win, print `Takahashi`; if Aoki will win, print `Aoki`; if the game will be drawn, print `Draw`.

```input1
3 3
---
+-+
+--
```

```output1
Takahashi
```

Takahashi has a winning strategy described below.

First, Takahashi moves the piece right, which makes him lose one point because the piece goes to a red square. Now, Takahashi has $-1$ point and Aoki has $0$ points. Then,

- if Aoki moves the piece right, Takahashi moves it down;
- if Aoki moves the piece down, Takahashi moves it right.

In either case, Aoki moves the piece to a red square losing one point, and Takahashi moves the piece to a blue square getting one point, which means now Takahashi has $0$ points and Aoki has $-1$ point.<br>
The piece is now on the square at the $2$-nd row from the top and $3$-rd column from the left, and Aoki can only choose to move it down, to a red square. Now, Takahashi has $0$ points and Aoki has $-2$ points.<br>
The piece cannot move right or down anymore, so the game ends. Since Takahashi has the greater number of points, he wins.

```input2
2 4
+++-
-+-+
```

```output2
Aoki
```

Aoki can win the game, regardless of what choices Takahashi makes.

```input3
1 1
-
```

```output3
Draw
```

In this case, the game immediately ends. Since both players have $0$ points, the game is drawn.