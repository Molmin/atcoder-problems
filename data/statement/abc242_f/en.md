Score : $500$ points

## Problem Statement

Consider placing $B$ black rooks and $W$ white rooks on a grid with $N$ horizontal rows and $M$ vertical columns.

A placement of the rooks satisfying all of the following conditions is called a *good placement*.

- All $B+W$ rooks are placed on the grid.
- At most one rook is placed in the same square.
- There is no pair of white rook and black rook attacking each other. That is, there is no pair of white rook and black rook such that one of them can reach the square in which the other is placed in one move.

Here, in one move, a rook can reach any square that is on a horizontal or vertical line from its current position and is reachable without jumping over another rook.

How many good placements are there? Since this count can be enormous, print it modulo $998244353$.

Rooks in the same color are not distinguished.

## Constraints

- $1 \leq N,M \leq 50$
- $1 \leq B,W \leq 2500$
- $B+W \leq N \times M$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$ $M$ $B$ $W$

## Output

Print the count modulo $998244353$.

```input1
2 2 1 1
```

```output1
4
```

There are four good placements as follows.

![](https://img.atcoder.jp/ghi/00c6bee30b78604192be9b9f0701fc48.png)

```input2
1 2 1 1
```

```output2
0
```

There may be no good placement.

```input3
40 40 30 30
```

```output3
467620384
```

Be sure to print the count modulo $998244353$.