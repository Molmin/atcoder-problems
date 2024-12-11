Score : $2100$ points

## Problem Statement

Snuke has a board with an $N \times N$ grid, and $N \times N$ tiles.

Each side of a square that is part of the perimeter of the grid is attached with a socket.
That is, each side of the grid is attached with $N$ sockets, for the total of $4 \times N$ sockets.
These sockets are labeled as follows:

- The sockets on the top side of the grid: $U1, U2, ..., UN$ from left to right
- The sockets on the bottom side of the grid: $D1, D2, ..., DN$ from left to right
- The sockets on the left side of the grid: $L1, L2, ..., LN$ from top to bottom
- The sockets on the right side of the grid: $R1, R2, ..., RN$ from top to bottom

![](https://atcoder.jp/img/code-festival-2016-final/916ffede6e718801d689f189e658a9bb.png)
Figure: The labels of the sockets

Snuke can insert a tile from each socket into the square on which the socket is attached.
When the square is already occupied by a tile, the occupying tile will be pushed into the next square, and when the next square is also occupied by another tile, that another occupying tile will be pushed as well, and so forth.
Snuke cannot insert a tile if it would result in a tile pushed out of the grid.
The behavior of tiles when a tile is inserted is demonstrated in detail at Sample Input/Output $1$.

Snuke is trying to insert the $N \times N$ tiles one by one from the sockets, to reach the state where every square contains a tile.
Here, he must insert exactly $U_i$ tiles from socket $Ui$, $D_i$ tiles from socket $Di$, $L_i$ tiles from socket $Li$ and $R_i$ tiles from socket $Ri$.
Determine whether it is possible to insert the tiles under the restriction. If it is possible, in what order the tiles should be inserted from the sockets?

## Constraints

- $1 \leq N \leq 300$
- $U_i,D_i,L_i$ and $R_i$ are non-negative integers.
- The sum of all values $U_i,D_i,L_i$ and $R_i$ is equal to $N \times N$.

## Partial Scores

- $2000$ points will be awarded for passing the test set satisfying $N \leq 40$.
- Additional $100$ points will be awarded for passing the test set without additional constraints.

## Input

The input is given from Standard Input in the following format:

> $N$
> 
> $U_1$ $U_2$ $...$ $U_N$
> 
> $D_1$ $D_2$ $...$ $D_N$
> 
> $L_1$ $L_2$ $...$ $L_N$
> 
> $R_1$ $R_2$ $...$ $R_N$

## Output

If it is possible to insert the tiles so that every square will contain a tile, print the labels of the sockets in the order the tiles should be inserted from them, one per line. If it is impossible, print `NO` instead. If there exists more than one solution, print any of those.

```input1
3
0 0 1
1 1 0
3 0 1
0 1 1
```

```output1
L1
L1
L1
L3
D1
R2
U3
R3
D2
```

Snuke can insert the tiles as shown in the figure below. An arrow indicates where a tile is inserted from, a circle represents a tile, and a number written in a circle indicates how many tiles are inserted before and including the tile.

![](https://atcoder.jp/img/code-festival-2016-final/252110b5818dc7d972f77d90f99cb8cb.png)

```input2
2
2 0
2 0
0 0
0 0
```

```output2
NO
```