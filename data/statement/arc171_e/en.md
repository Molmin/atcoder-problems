Score: $800$ points

## Problem Statement

There is a grid with $N$ rows and $N$ columns. Let $(i, j)$ denote the cell at the $i$-th row from the top and the $j$-th column from the left. Additionally, there is one black stone and $M$ white stones.<br>
You will play a single-player game using these items.

Here are the rules. Initially, you place the black stone at $(A, B)$. Then, you place each of the $M$ white stones on some cell of the grid. Here:

- You cannot place a white stone at $(A, B)$.
- You can place at most one white stone per row.
- You can place at most one white stone per column.

Then, you will perform the following operation until you cannot do so:

- Assume the black stone is at $(i, j)$. Perform one of the four operations below:-   - If there is a white stone at $(i, k)$ where $(j &amp;lt; k)$, remove that white stone and move the black stone to $(i, k + 1)$.
-   - If there is a white stone at $(i, k)$ where $(j &amp;gt; k)$, remove that white stone and move the black stone to $(i, k - 1)$.
-   - If there is a white stone at $(k, j)$ where $(i &amp;lt; k)$, remove that white stone and move the black stone to $(k + 1, j)$.
-   - If there is a white stone at $(k, j)$ where $(i &amp;gt; k)$, remove that white stone and move the black stone to $(k - 1, j)$.-   -   - Here, if the cell to which the black stone is to be moved does not exist, such a move cannot be made.

The following figure illustrates an example. Here, `B` represents the black stone, `W` represents a white stone, `.` represents an empty cell, and `O` represents a cell to which the black stone can be moved.

```plain
..O...
..W...
......
......
..B.WO
......
```

You win the game if all of the following conditions are satisfied when you finish performing the operation. Otherwise, you lose.

- All white stones have been removed from the grid.
- The black stone is placed at $(A, B)$.

In how many initial configurations of the $M$ white stones can you win the game by optimally performing the operation? Find the count modulo $998244353$.

## Constraints

- $2 \leq M \leq N \leq 2 \times 10^5$
- $1 \leq A \leq N$
- $1 \leq B \leq N$
- $N$, $M$, $A$, and $B$ are integers.

## Input

The input is given from Standard Input in the following format:

> $N$ $M$ $A$ $B$

## Output

Print the number, modulo $998244353$, of possible configurations of the white stones that can lead to your victory.

```input1
6 4 2 3
```

```output1
4
```

For example, consider the white stones placed as shown in the following figure:

```output1
......
..BW..
.....W
......
..W...
....W.
```

Here, you can win the game by moving the black stone in the following steps:

- Remove the white stone at $(5, 3)$ and move the black stone to $(6, 3)$.
- Remove the white stone at $(6, 5)$ and move the black stone to $(6, 6)$.
- Remove the white stone at $(3, 6)$ and move the black stone to $(2, 6)$.
- Remove the white stone at $(2, 4)$ and move the black stone to $(2, 3)$.
- Since all white stones have been removed from the grid and the black stone is placed at $(A, B) = (2, 3)$, you win the game.

There are four configurations of white stones that can lead to your victory.

```input2
5 3 1 3
```

```output2
0
```

```input3
200000 47718 21994 98917
```

```output3
146958602
```