Score : $900$ points

## Problem Statement

Snuke is playing with a board composed of infinitely many squares lining up in a row.
Each square has an assigned integer; for each integer $i$, Square $i$ and Square $i+1$ are adjacent.
Additionally, each square is painted white or black.

A string $s$ of length $n$ consisting of `w` and `b` represents the colors of the squares of this board, as follows:

- For each $i = 1, 2, \dots, n$, Square $i$ is white if the $i$-th character of $s$ is `w`, and black if that character is `b`;
- For each $i \leq 0$, Square $i$ is white;
- For each $i &gt; n$, Square $i$ is black.

Snuke has infinitely many white pieces and infinitely many black pieces. He will put these pieces on the board as follows:

- (1) Choose a piece of the color of his choice.
- (2) Among the squares adjacent to a square that already contains a piece, look for squares of the same color as the chosen piece.-   - (2a) If there are such squares, choose one of them and put the piece on it;
-   - (2b) if there is no such square, choose a square of the same color as the chosen piece and put the piece on it.

The board initially has no piece on it.

You are given a string $t$ of length $n$ consisting of `o` and `_`. Find the minimum number of pieces Snuke needs to put on the board to have a piece on every square $i$ among Squares $1,..,n$ such that the $i$-th character of $t$ is `o`.
It is guaranteed that $t$ has at least one occurrence of `o`.

## Constraints

- $1 \leq n \leq 10^5$
- $|s| = |t| = n$
- $s$ consists of `w` and `b`.
- $t$ consists of `o` and `_`.
- $t$ has at least one occurrence of `o`.

## Input

Input is given from Standard Input in the following format:

> $n$
> 
> $s$
> 
> $t$

## Output

Print the minimum number of pieces Snuke needs to put on the board.

```input1
3
wbb
o_o
```

```output1
2
```

Let us use `W` to represent a white square that needs a piece on it, `B` to represent a black square that needs a piece on it, `w` to represent a white square that does not need a piece on it, and `b` to represent a black square that does not need a piece on it.

We have the following board:

```output1
...wwwwwwWbBbbbbb...
```

If we put pieces in the following order, two pieces is enough:

```output1
...wwwwwwWbBbbbbb...
         2 1
```

Note that if we put a piece on the white square first, we will need three or more pieces:

```output1
...wwwwwwWbBbbbbb...
         123
```

```input2
4
wwww
o__o
```

```output2
3
```

If we put pieces in the following order, three pieces is enough:

```output2
...wwwwwWwwWbbbbb...
        1  32
```

```input3
9
bbwbwbwbb
_o_o_o_o_
```

```output3
5
```

If we put pieces in the following order, five pieces is enough:

```output3
...wwwwwbBwBwBwBbbbbbb...
        12 3 4 5
```

```input4
17
wwwwbbbbbbbbwwwwb
__o__o_o_ooo__oo_
```

```output4
11
```