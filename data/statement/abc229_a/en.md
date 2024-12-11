Score : $100$ points

## Problem Statement

We have a grid with $2$ horizontal rows and $2$ vertical columns.<br>
Each of the squares is black or white, and there are at least $2$ black squares.<br>
The colors of the squares are given to you as strings $S_1$ and $S_2$, as follows.

- If the $j$-th character of $S_i$ is `#`, the square at the $i$-th row from the top and $j$-th column from the left is black.
- If the $j$-th character of $S_i$ is `.`, the square at the $i$-th row from the top and $j$-th column from the left is white.

You can travel between two different black squares if and only if they share a side.<br>
Determine whether it is possible to travel from every black square to every black square (directly or indirectly) by only passing black squares.

## Constraints

- Each of $S_1$ and $S_2$ is a string with two characters consisting of `#` and `.`.
- $S_1$ and $S_2$ have two or more `#`s in total.

## Input

Input is given from Standard Input in the following format:

> $S_1$
> 
> $S_2$

## Output

If it is possible to travel from every black square to every black square, print `Yes`; otherwise, print `No`.

```input1
##
.#
```

```output1
Yes
```

It is possible to directly travel between the top-left and top-right black squares and between top-right and bottom-right squares.<br>
These two moves enable us to travel from every black square to every black square, so the answer is `Yes`.

```input2
.#
#.
```

```output2
No
```

It is impossible to travel between the top-right and bottom-left black squares, so the answer is `No`.