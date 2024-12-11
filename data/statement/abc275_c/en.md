Score : $300$ points

## Problem Statement

There is a two-dimensional plane. For integers $r$ and $c$ between $1$ and $9$, there is a pawn at the coordinates $(r,c)$ if the $c$-th character of $S_{r}$ is `#`, and nothing if the $c$-th character of $S_{r}$ is `.`.

Find the number of squares in this plane with pawns placed at all four vertices.

## Constraints

- Each of $S_1,\ldots,S_9$ is a string of length $9$ consisting of `#` and `.`.

## Input

The input is given from Standard Input in the following format:

> $S_1$
> 
> $S_2$
> 
> $\vdots$
> 
> $S_9$

## Output

Print the answer.

```input1
##.......
##.......
.........
.......#.
.....#...
........#
......#..
.........
.........
```

```output1
2
```

The square with vertices $(1,1)$, $(1,2)$, $(2,2)$, and $(2,1)$ have pawns placed at all four vertices.

The square with vertices $(4,8)$, $(5,6)$, $(7,7)$, and $(6,9)$ also have pawns placed at all four vertices.

Thus, the answer is $2$.

```input2
.#.......
#.#......
.#.......
.........
....#.#.#
.........
....#.#.#
........#
.........
```

```output2
3
```