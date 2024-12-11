Score : $200$ points

## Problem Statement

There is a grid with $H$ rows and $W$ columns. Let $(i, j)$ denote the cell at the $i$-th row from the top and $j$-th column from the left.

Cell $(i, j)$ is empty if $C_{i, j}$ is `.`, and not empty if $C_{i, j}$ is `#`.

Takahashi is currently at cell $(S_i, S_j)$, and he will act according to the following rules for $i = 1, 2, \ldots, |X|$ in order.

- If the $i$-th character of $X$ is `L`, and the cell to the left of his current cell exists and is empty, he moves to the cell to the left. Otherwise, he stays in the current cell.
- If the $i$-th character of $X$ is `R`, and the cell to the right of his current cell exists and is empty, he moves to the cell to the right. Otherwise, he stays in the current cell.
- If the $i$-th character of $X$ is `U`, and the cell above his current cell exists and is empty, he moves to the cell above. Otherwise, he stays in the current cell.
- If the $i$-th character of $X$ is `D`, and the cell below his current cell exists and is empty, he moves to the cell below. Otherwise, he stays in the current cell.

Print the cell where he is after completing the series of actions.

## Constraints

- $1 \leq H, W \leq 50$
- $1 \leq S_i \leq H$
- $1 \leq S_j \leq W$
- $H, W, S_i, S_j$ are integers.
- $C_{i, j}$ is `.` or `#`.
- $C_{S_i, S_j} =$ `.`
- $X$ is a string of length between $1$ and $50$, inclusive, consisting of `L`, `R`, `U`, `D`.

## Input

The input is given from Standard Input in the following format:

> $H$ $W$
> 
> $S_i$ $S_j$
> 
> $C_{1, 1}$$C_{1, 2}$$\ldots$$C_{1, W}$
> 
> $C_{2, 1}$$C_{2, 2}$$\ldots$$C_{2, W}$
> 
> $\vdots$
> 
> $C_{H, 1}$$C_{H, 2}$$\ldots$$C_{H, W}$
> 
> $X$

## Output

Let $(x, y)$ be the cell where Takahashi is after completing the series of actions. Print $x$ and $y$, separated by a space.

```input1
2 3
2 1
.#.
...
ULDRU
```

```output1
2 2
```

Takahashi starts at cell $(2, 1)$. His series of actions are as follows:

- The 1st character of $X$ is `U`, and the cell above $(2, 1)$ exists and is an empty cell, so he moves to the cell above, which is $(1, 1)$.
- The 2nd character of $X$ is `L`, and the cell to the left of $(1, 1)$ does not exist, so he stays at $(1, 1)$.
- The 3rd character of $X$ is `D`, and the cell below $(1, 1)$ exists and is an empty cell, so he moves to the cell below, which is $(2, 1)$.
- The 4th character of $X$ is `R`, and the cell to the right of $(2, 1)$ exists and is an empty cell, so he moves to the cell to the right, which is $(2, 2)$.
- The 5th character of $X$ is `U`, and the cell above $(2, 2)$ exists but is not an empty cell, so he stays at $(2, 2)$.

Therefore, after completing the series of actions, he is at cell $(2, 2)$.

```input2
4 4
4 2
....
.#..
...#
....
DUUUURULRD
```

```output2
2 4
```

```input3
6 6
1 1
.#####
######
######
######
######
######
RURLDLULLRULRDL
```

```output3
1 1
```