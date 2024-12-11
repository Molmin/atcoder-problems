Score : $600$ points

## Problem Statement

There is a grid with $N$ rows and $N$ columns, where each square has one white piece, one black piece, or nothing on it.<br>
The square at the $i$-th row from the top and $j$-th column from the left is described by $S_{i,j}$. If $S_{i,j}$ is `W`, the square has a white piece; if $S_{i,j}$ is `B`, it has a black piece; if $S_{i,j}$ is `.`, it is empty.

Takahashi and Snuke will play a game, where the players take alternate turns, with Takahashi going first.

In Takahashi's turn, he does one of the following operations.

- Choose a **white** piece that can move one square up to an empty square, and move it one square up (see below).
- Eat a **black** piece of his choice.

In Snuke's turn, he does one of the following operations.

- Choose a **black** piece that can move one square up to an empty square, and move it one square up.
- Eat a **white** piece of his choice.

The player who becomes unable to do the operation loses the game. Which player will win when both players play optimally?

Here, moving a piece one square up means moving a piece at the $i$-th row and $j$-th column to the $(i-1)$-th row and $j$-th column.<br>
Note that this is the same for both players; they see the board from the same direction.

## Constraints

- $1 \leq N \leq 8$
- $N$ is an integer.
- $S_{i,j}$ is `W`, `B`, or `.`.

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $S_{1,1}S_{1,2}\ldots S_{1,N}$
> 
> $S_{2,1}S_{2,2}\ldots S_{2,N}$
> 
> $\vdots$
> 
> $S_{N,1}S_{N,2}\ldots S_{N,N}$

## Output

If Takahashi will win, print `Takahashi`; if Snuke will win, print `Snuke`.

```input1
3
BB.
.B.
...
```

```output1
Takahashi
```

If Takahashi eats the black piece at the $1$-st row and $1$-st columns, the board will become:

```output1
.B.
.B.
...
```

Then, Snuke cannot do an operation, making Takahashi win.<br>
Note that it is forbidden to move a piece out of the board or to a square occupied by another piece.

```input2
2
..
WW
```

```output2
Snuke
```

```input3
4
WWBW
WWWW
BWB.
BBBB
```

```output3
Snuke
```