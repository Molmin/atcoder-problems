Score : $400$ points

## Problem Statement

There is a grid with $N \times N$ squares.  We denote by $(i, j)$ the square at the $i$-th row from the top and $j$-th column from the left.

Initially, a piece is placed on $(1, 1)$.  You may repeat the following operation any number of times:

- Let $(i, j)$ be the square the piece is currently on.  Move the piece to the square whose distance from $(i, j)$ is exactly $\sqrt{M}$.

Here, we define the distance between square $(i, j)$ and square $(k, l)$ as $\sqrt{(i-k)^2+(j-l)^2}$.

For all squares $(i, j)$, determine if the piece can reach $(i, j)$.  If it can, find the minimum number of operations required to do so.

## Constraints

- $1 \le N \le 400$
- $1 \le M \le 10^6$
- All values in the input are integers.

## Input

The input is given from Standard Input in the following format:

> $N$ $M$

## Output

Print $N$ lines.  The $i$-th line should contain $N$ integers.  If the piece can reach $(i, j)$, the $j$-th integer in the $i$-th line should be the minimum number of operations required to do so; otherwise, it should be $-1$.

```input1
3 1
```

```output1
0 1 2
1 2 3
2 3 4
```

You can move the piece to four adjacent squares.

For example, we can move the piece to $(2,2)$ with two operations as follows.

- The piece is now on $(1,1)$. The distance between $(1,1)$ and $(1,2)$ is exactly $\sqrt{1}$, so move the piece to $(1,2)$.
- The piece is now on $(1,2)$. The distance between $(1,2)$ and $(2,2)$ is exactly $\sqrt{1}$, so move the piece to $(2,2)$.

```input2
10 5
```

```output2
0 3 2 3 2 3 4 5 4 5
3 4 1 2 3 4 3 4 5 6
2 1 4 3 2 3 4 5 4 5
3 2 3 2 3 4 3 4 5 6
2 3 2 3 4 3 4 5 4 5
3 4 3 4 3 4 5 4 5 6
4 3 4 3 4 5 4 5 6 5
5 4 5 4 5 4 5 6 5 6
4 5 4 5 4 5 6 5 6 7
5 6 5 6 5 6 5 6 7 6
```