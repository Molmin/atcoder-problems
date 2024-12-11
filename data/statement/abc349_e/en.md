Score: $450$ points

## Problem Statement

There is a $3 \times 3$ grid. Let $(i, j)$ denote the cell at the $i$-th row from the top and $j$-th column from the left $(1 \leq i, j \leq 3)$. Cell $(i, j)$ contains an integer $A_{i,j}$. It is guaranteed that $\sum_{i=1}^3 \sum_{j=1}^3 A_{i,j}$ is odd. Additionally, all cells are initially painted white.

Takahashi and Aoki will play a game using this grid. Takahashi goes first, and they take turns performing the following operation:

- Choose a cell $(i, j)$ $(1\leq i, j \leq 3)$ that is still painted white (it can be shown that such a cell always exists at the time of the operation). The player performing the operation scores $A_{i,j}$ points. Then, if the player is Takahashi, he paints the cell $(i, j)$ red; if the player is Aoki, he paints it blue.

After each operation, the following checks are made:

- Check if there are three consecutive cells painted the same color (red or blue) in any row, column, or diagonal. If such a sequence exists, the game ends immediately, and the player whose color forms the sequence wins.
- Check if there are white cells left. If no white cells remain, the game ends, and the player with the higher total score wins.

It can be shown that the game will always end after a finite number of moves, and either Takahashi or Aoki will win. Determine which player wins if both play optimally for victory.

## Constraints

- $|A_{i,j}| \leq 10^9$
- $\sum_{i=1}^3 \sum_{j=1}^3 A_{i,j}$ is odd.
- All input values are integers.

## Input

The input is given from Standard Input in the following format:

> $A_{1,1}$ $A_{1,2}$ $A_{1,3}$
> 
> $A_{2,1}$ $A_{2,2}$ $A_{2,3}$
> 
> $A_{3,1}$ $A_{3,2}$ $A_{3,3}$

## Output

If Takahashi wins, print `Takahashi`; if Aoki wins, print `Aoki`.

```input1
0 0 0
0 1 0
0 0 0
```

```output1
Takahashi
```

If Takahashi chooses cell $(2,2)$ in his first move, no matter how Aoki plays afterward, Takahashi can always act to prevent three consecutive blue cells. If three consecutive red cells are formed, Takahashi wins. If the game ends without three consecutive red cells, at that point, Takahashi has scored $1$ point and Aoki $0$ points, so Takahashi wins either way.

```input2
-1 1 0
-4 -2 -5
-4 -1 -5
```

```output2
Aoki
```