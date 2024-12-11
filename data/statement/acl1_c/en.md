Score : $600$ points

## Problem Statement

There is a board with $N$ rows and $M$ columns.
The information of this board is represented by $N$ strings $S_1,S_2,\ldots,S_N$.
Specifically, the state of the square at the $i$-th row from the top and the $j$-th column from the left is represented as follows:

- $S_{i,j}=$`.` : the square is empty.
- $S_{i,j}=$`#` : an obstacle is placed on the square.
- $S_{i,j}=$`o` : a piece is placed on the square.

Yosupo repeats the following operation:

- Choose a piece and move it to its right adjecent square or its down adjacent square.
Moving a piece to squares with another piece or an obstacle is prohibited.
Moving a piece out of the board is also prohibited.

Yosupo wants to perform the operation as many times as possible.
Find the maximum possible number of operations.

## Constraints

- $1 \leq N \leq 50$
- $1 \leq M \leq 50$
- $S_i$ is a string of length $M$ consisting of `.`, `#` and `o`.
- $1 \leq ($ the number of pieces $)\leq 100$.
In other words, the number of pairs $(i, j)$ that satisfy $S_{i,j}=$`o` is between $1$ and $100$, both inclusive.

## Input

Input is given from Standard Input in the following format:

> $N$ $M$
> 
> $S_1$
> 
> $S_2$
> 
> $\vdots$
> 
> $S_N$

## Output

Print the maximum possible number of operations in a line.

```input1
3 3
o..
...
o.#
```

```output1
4
```

Yosupo can perform operations $4$ times as follows:

```output1
o..      .o.      ..o      ...      ...
...  ->  ...  ->  ...  ->  ..o  ->  ..o
o.#      o.#      o.#      o.#      .o#
```

```input2
9 10
.#....o#..
.#..#..##o
.....#o.##
.###.#o..o
#.#...##.#
..#..#.###
#o.....#..
....###..o
o.......o#
```

```output2
24
```