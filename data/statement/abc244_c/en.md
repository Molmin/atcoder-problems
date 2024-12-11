Score : $300$ points

## Problem Statement

Takahashi and Aoki will play the following game against each other.

Starting from Takahashi, the two alternatingly declare an integer between $1$ and $2N+1$ (inclusive) until the game ends.
Any integer declared by either player cannot be declared by either player again.
The player who is no longer able to declare an integer loses; the player who didn't lose wins.

In this game, Takahashi will always win.
Your task is to actually play the game on behalf of Takahashi and win the game.

## Constraints

- $1 \leq N \leq 1000$
- $N$ is an integer.

## Input and Output

**This task is an interactive task** (in which your program and the judge program interact with each other via inputs and outputs).<br>
Your program plays the game on behalf of Takahashi, and the judge program plays the game on behalf of Aoki.

First, your program is given a positive integer $N$ from Standard Input.
Then, the following procedures are repeated until the game ends.

1. Your program outputs an integer between $1$ and $2N+1$ (inclusive) to Standard Output, which defines the integer that Takahashi declares.  (You cannot output an integer that is already declared by either player.)
2. The integer that Aoki declares is given by the judge program to your program from Standard Input.  (No integer that is already declared by either player will be given.)
If Aoki has no more integer to declare, $0$ is given instead, which means that the game ended and Takahashi won.

## Notes

- <span style="color:red">**After each output, you must flush Standard Output.  Otherwise, you may get TLE.**</span>
- **After the game ended and Takahashi won, the program must be terminated immediately.**  Otherwise, the judge does not necessarily give AC.
- If your program outputs something that violates the rules of the game (such as an integer that has already been declared by either player), your answer is considered incorrect.  In such case, the verdict is indeterminate.  It does not necessarily give WA.

## Sample Input and Output

Input
Output
Description

$2$

First, an integer $N$ is given.

$1$
Takahashi declares an integer $1$.

$3$

Aoki declares an integer $3$.

$2$
Takahashi declares an integer $2$.

$4$

Aoki declares an integer $4$.

$5$
Takahashi declares an integer $5$.

$0$

Aoki has no more integer to declare, so Takahashi wins, and the game ends.