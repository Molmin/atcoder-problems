Score : $425$ points

## Problem Statement

There is a field divided into a grid of $H$ rows and $W$ columns.<br>
The square at the $i$-th row from the north (top) and the $j$-th column from the west (left) is represented by the character $A_{i, j}$. Each character represents the following.

- `.` : An empty square. Passable.
- `#` : An obstacle. Impassable.
- `&amp;gt;`, `v`, `&amp;lt;`, `^` : Squares with a person facing east, south, west, and north, respectively. Impassable. The person's line of sight is one square wide and extends straight in the direction the person is facing, and is blocked by an obstacle or another person. (See also the description at Sample Input/Output $1$.)
- `S` : The starting point. Passable. There is exactly one starting point. It is guaranteed not to be in a person's line of sight.
- `G` : The goal. Passable. There is exactly one goal. It is guaranteed not to be in a person's line of sight.

Naohiro is at the starting point and can move one square to the east, west, south, and north as many times as he wants. However, he cannot enter an impassable square or leave the field.<br>
Determine if he can reach the goal without entering a person's line of sight, and if so, find the minimum number of moves required to do so.

## Constraints

- $2 \leq H, W \leq 2000$
- $A_{i,j}$ is `.`, `#`, `&amp;gt;`, `v`, `&amp;lt;`, `^`, `S`, or `G`.
- Each of `S` and `G` occurs exactly once among $A_{i, j}$.
- Neither the starting point nor the goal is in a person's line of sight.

## Input

The input is given from Standard Input in the following format:

> $H$ $W$
> 
> $A_{1,1}A_{1,2}\dots A_{1,W}$
> 
> $A_{2,1}A_{2,2}\dots A_{2,W}$
> 
> $\vdots$
> 
> $A_{H,1}A_{H,2}\dots A_{H,W}$

## Output

If Naohiro can reach the goal without entering a person's line of sight, print the (minimum) number of moves required to do so. Otherwise, print `-1`.

```input1
5 7
....Sv.
.>.....
.......
>..<.#<
^G....>
```

```output1
15
```

For Sample Input $1$, the following figure shows the empty squares that are in the lines of sight of one or more people as `!`. 

![image2](https://img.atcoder.jp/abc317/8a40fc4c621cfef326cc25a1f69c0300.jpg)

Let us describe some of the squares. (Let $(i, j)$ denote the square in the $i$-th row from the north and the $j$-th column from the west.)

- $(2, 4)$ is a square in the line of sight of the east-facing person at $(2, 2)$.
- $(2, 6)$ is a square in the lines of sight of two people, one facing east at $(2, 2)$ and the other facing south at $(1, 6)$.
- The square $(4, 5)$ is not in anyone's line of sight. The line of sight of the west-facing person at $(4, 7)$ is blocked by the obstacle at $(4, 6)$, and the line of sight of the east-facing person at $(4, 1)$ is blocked by the person at $(4, 4)$.

Naohiro must reach the goal without passing through impassable squares or squares in a person's line of sight.

```input2
4 3
S..
.<.
.>.
..G
```

```output2
-1
```

Print `-1` if he cannot reach the goal.