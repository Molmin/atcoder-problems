Score : $800$ points

## Problem Statement

Takahashi and Aoki will play a game using a grid with $H$ rows and $W$ columns of square cells.
There are $N$ obstacles on this grid; the $i$-th obstacle is at $(X_i,Y_i)$.
Here, we represent the cell at the $i$-th row and $j$-th column $(1 \leq i \leq H, 1 \leq j \leq W)$ by $(i,j)$.
There is no obstacle at $(1,1)$, and there is a piece placed there at $(1,1)$.

Starting from Takahashi, he and Aoki alternately perform one of the following actions:

- Move the piece to an adjacent cell.
    Here, let the position of the piece be $(x,y)$. Then Takahashi can only move the piece to $(x+1,y)$, and Aoki can only move the piece to $(x,y+1)$.
    If the destination cell does not exist or it is occupied by an obstacle, this action cannot be taken.
- Do not move the piece, and end his turn without affecting the grid.

The game ends when the piece does not move twice in a row.

Takahashi would like to perform as many actions (including not moving the piece) as possible before the game ends, while Aoki would like to perform as few actions as possible before the game ends.
How many actions will Takahashi end up performing?

## Constraints

- $1 \leq H,W \leq 2\times 10^5$
- $0 \leq N \leq 2\times 10^5$
- $1 \leq X_i \leq H$
- $1 \leq Y_i \leq W$
- If $i \neq j$, $(X_i,Y_i) \neq (X_j,Y_j)$
- $(X_i,Y_i) \neq (1,1)$
- $X_i$ and $Y_i$ are integers.

## Input

Input is given from Standard Input in the following format:

> $H$ $W$ $N$
> 
> $X_1$ $Y_1$
> 
> $:$
> 
> $X_N$ $Y_N$

## Output

Print the number of actions Takahashi will end up performing.

```input1
3 3 1
3 2
```

```output1
2
```

For example, the game proceeds as follows:

- Takahashi moves the piece to (2,1).
- Aoki does not move the piece.
- Takahashi moves the piece to (3,1).
- Aoki does not move the piece.
- Takahashi does not move the piece.

Takahashi performs three actions in this case, but if both players play optimally, Takahashi will perform only two actions before the game ends.

```input2
10 10 14
4 3
2 2
7 3
9 10
7 7
8 1
10 10
5 4
3 4
2 8
6 4
4 4
5 8
9 2
```

```output2
6
```

```input3
100000 100000 0
```

```output3
100000
```