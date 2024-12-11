Score : $300$ points

## Problem Statement

Takahashi has two sheets $A$ and $B$, each composed of black squares and transparent squares, and an infinitely large sheet $C$ composed of transparent squares.<br>
There is also an ideal sheet $X$ for Takahashi composed of black squares and transparent squares.

The sizes of sheets $A$, $B$, and $X$ are $H_A$ rows $\times$ $W_A$ columns, $H_B$ rows $\times$ $W_B$ columns, and $H_X$ rows $\times$ $W_X$ columns, respectively.<br>
The squares of sheet $A$ are represented by $H_A$ strings of length $W_A$, $A_1, A_2, \ldots, A_{H_A}$ consisting of `.` and `#`.<br>
If the $j$-th character $(1\leq j\leq W_A)$ of $A_i$ $(1\leq i\leq H_A)$ is `.`, the square at the $i$-th row from the top and $j$-th column from the left is transparent; if it is `#`, that square is black.<br>
Similarly, the squares of sheets $B$ and $X$ are represented by $H_B$ strings of length $W_B$, $B_1, B_2, \ldots, B_{H_B}$, and $H_X$ strings of length $W_X$, $X_1, X_2, \ldots, X_{H_X}$, respectively.

Takahashi's goal is to create sheet $X$ using **all black squares** in sheets $A$ and $B$ by following the steps below with sheets $A$, $B$, and $C$.

1. Paste sheets $A$ and $B$ onto sheet $C$ along the grid. Each sheet can be pasted anywhere by translating it, but it cannot be cut or rotated.
2. Cut out an $H_X\times W_X$ area from sheet $C$ along the grid. Here, a square of the cut-out sheet will be black if a black square of sheet $A$ or $B$ is pasted there, and transparent otherwise.

Determine whether Takahashi can achieve his goal by appropriately choosing the positions where the sheets are pasted and the area to cut out, that is, whether he can satisfy both of the following conditions.

- The cut-out sheet includes **all black squares** of sheets $A$ and $B$. The black squares of sheets $A$ and $B$ may overlap on the cut-out sheet.
- The cut-out sheet coincides sheet $X$ without rotating or flipping.

## Constraints

- $1\leq H_A, W_A, H_B, W_B, H_X, W_X\leq 10$
- $H_A, W_A, H_B, W_B, H_X, W_X$ are integers.
- $A_i$ is a string of length $W_A$ consisting of `.` and `#`.
- $B_i$ is a string of length $W_B$ consisting of `.` and `#`.
- $X_i$ is a string of length $W_X$ consisting of `.` and `#`.
- Sheets $A$, $B$, and $X$ each contain at least one black square.

## Input

The input is given from Standard Input in the following format:

> $H_A$ $W_A$
> 
> $A_1$
> 
> $A_2$
> 
> $\vdots$
> 
> $A_{H_A}$
> 
> $H_B$ $W_B$
> 
> $B_1$
> 
> $B_2$
> 
> $\vdots$
> 
> $B_{H_B}$
> 
> $H_X$ $W_X$
> 
> $X_1$
> 
> $X_2$
> 
> $\vdots$
> 
> $X_{H_X}$

## Output

If Takahashi can achieve the goal described in the problem statement, print `Yes`; otherwise, print `No`.

```input1
3 5
#.#..
.....
.#...
2 2
#.
.#
5 3
...
#.#
.#.
.#.
...
```

```output1
Yes
```

First, paste sheet $A$ onto sheet $C$, as shown in the figure below.

```output1
$\vdots$
  .......  
  .#.#...  
$\cdots$.......$\cdots$
  ..#....  
  .......  
     $\vdots$
```

Next, paste sheet $B$ so that its top-left corner aligns with that of sheet $A$, as shown in the figure below.

```output1
$\vdots$
  .......  
  .#.#...  
$\cdots$..#....$\cdots$
  ..#....  
  .......  
     $\vdots$
```

Now, cut out a $5\times 3$ area with the square in the first row and second column of the range illustrated above as the top-left corner, as shown in the figure below.

```output1
...
#.#
.#.
.#.
...
```

This includes all black squares of sheets $A$ and $B$ and matches sheet $X$, satisfying the conditions.

Therefore, print `Yes`.

```input2
2 2
#.
.#
2 2
#.
.#
2 2
##
##
```

```output2
No
```

Note that sheets $A$ and $B$ may not be rotated or flipped when pasting them.

```input3
1 1
#
1 2
##
1 1
#
```

```output3
No
```

No matter how you paste or cut, you cannot cut out a sheet that includes all black squares of sheet $B$, so you cannot satisfy the first condition.
Therefore, print `No`.

```input4
3 3
###
...
...
3 3
#..
#..
#..
3 3
..#
..#
###
```

```output4
Yes
```