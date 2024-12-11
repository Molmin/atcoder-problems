Score : $600$ points

## Problem Statement

We have an $H \times W$ chessboard with $H$ rows and $W$ columns, and a king.<br>
Let $(i, j)$ denote the square at the $i$-th row from the top $(1 \leq i \leq H)$ and $j$-th column from the left $(1 \leq j \leq W)$.<br>
The king can move one square in any direction. Formally, the king on $(i,j)$ can move to $(k,l)$ if and only if $\max(|i-k|,|j-l|) = 1$.

A *tour* is the process of moving the king on the $H \times W$ chessboard as follows.

- Start by putting the king on $(1, 1)$. Then, move the king to put it on each square exactly once.

For example, when $H = 2, W = 3$, going $(1,1) \to (1,2) \to (1, 3) \to (2, 3) \to (2, 2) \to (2, 1)$ is a valid tour.

You are given a square $(a, b)$ other than $(1, 1)$. Construct a tour ending on $(a,b)$ and print it. It can be proved that a solution always exists under the Constraints of this problem.

## Constraints

- $2 \leq H \leq 100$
- $2 \leq W \leq 100$
- $1 \leq a \leq H$
- $1 \leq b \leq W$
- $(a, b) \neq (1, 1)$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $H$ $W$ $a$ $b$

## Output

Print $HW$ lines. The $i$-th line should contain the $i$-th square $(h_i, w_i)$ the king is put on, in the following format:

> $h_i$ $w_i$

Here, note that the $1$-st line should contain $(1, 1)$, and the $HW$-th line should contain $(a, b)$.

```input1
3 2 3 2
```

```output1
1 1
1 2
2 1
2 2
3 1
3 2
```

The king goes $(1, 1) \to (1, 2) \to (2, 1) \to (2, 2)\to (3, 1) \to (3, 2)$, which is indeed a tour ending on $(3, 2)$.<br>
There are some other valid tours, three of which are listed below.

- $(1, 1) \to (1, 2) \to (2, 2) \to (2, 1) \to (3, 1) \to (3, 2)$
- $(1, 1) \to (2, 1) \to (1, 2) \to (2, 2) \to (3, 1) \to (3, 2)$
- $(1, 1) \to (2, 2) \to (1, 2) \to (2, 1) \to (3, 1) \to (3, 2)$