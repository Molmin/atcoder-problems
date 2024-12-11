Score : $600$ points

## Problem Statement

We have a rectangular grid of squares with $H$ horizontal rows and $W$ vertical columns. Let $(i,j)$ denote the square at the $i$-th row from the top and the $j$-th column from the left.
On this grid, there is a piece, which is initially placed at square $(s_r,s_c)$.

Takahashi and Aoki will play a game, where each player has a string of length $N$.
Takahashi's string is $S$, and Aoki's string is $T$. $S$ and $T$ both consist of four kinds of letters: `L`, `R`, `U` and `D`.

The game consists of $N$ steps. The $i$-th step proceeds as follows:

- First, Takahashi performs a move. He either moves the piece in the direction of $S_i$, or does not move the piece.
- Second, Aoki performs a move. He either moves the piece in the direction of $T_i$, or does not move the piece.

Here, to move the piece in the direction of `L`, `R`, `U` and `D`, is to move the piece from square $(r,c)$ to square $(r,c-1)$, $(r,c+1)$, $(r-1,c)$ and $(r+1,c)$, respectively. If the destination square does not exist, the piece is removed from the grid, and the game ends, even if less than $N$ steps are done.

Takahashi wants to remove the piece from the grid in one of the $N$ steps.
Aoki, on the other hand, wants to finish the $N$ steps with the piece remaining on the grid.
Determine if the piece will remain on the grid at the end of the game when both players play optimally.

## Constraints

- $2 \leq H,W \leq 2 \times 10^5$
- $2 \leq N \leq 2 \times 10^5$
- $1 \leq s_r \leq H$
- $1 \leq s_c \leq W$
- $|S|=|T|=N$
- $S$ and $T$ consists of the four kinds of letters `L`, `R`, `U` and `D`.

## Input

Input is given from Standard Input in the following format:

> $H$ $W$ $N$
> 
> $s_r$ $s_c$
> 
> $S$
> 
> $T$

## Output

If the piece will remain on the grid at the end of the game, print `YES`; otherwise, print `NO`.

```input1
2 3 3
2 2
RRL
LUD
```

```output1
YES
```

Here is one possible progress of the game:

- Takahashi moves the piece right. The piece is now at $(2,3)$.
- Aoki moves the piece left. The piece is now at $(2,2)$.
- Takahashi does not move the piece. The piece remains at $(2,2)$.
- Aoki moves the piece up. The piece is now at $(1,2)$.
- Takahashi moves the piece left. The piece is now at $(1,1)$.
- Aoki does not move the piece. The piece remains at $(1,1)$.

```input2
4 3 5
2 2
UDRRR
LLDUD
```

```output2
NO
```

```input3
5 6 11
2 1
RLDRRUDDLRL
URRDRLLDLRD
```

```output3
NO
```