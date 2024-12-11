Score : $400$ points

## Problem Statement

Given is a string $S$ consisting of `L` and `R`.

Let $N$ be the length of $S$. There are $N$ squares arranged from left to right, and the $i$-th character of $S$ from the left is written on the $i$-th square from the left.

The character written on the leftmost square is always `R`, and the character written on the rightmost square is always `L`.

Initially, one child is standing on each square.

Each child will perform the move below $10^{100}$ times:

- Move one square in the direction specified by the character written in the square on which the child is standing. `L` denotes left, and `R` denotes right.

Find the number of children standing on each square after the children performed the moves.

## Constraints

- $S$ is a string of length between $2$ and $10^5$ (inclusive).
- Each character of $S$ is `L` or `R`.
- The first and last characters of $S$ are `R` and `L`, respectively.

## Input

Input is given from Standard Input in the following format:

> $S$

## Output

Print the number of children standing on each square after the children performed the moves, in order from left to right.

```input1
RRLRL
```

```output1
0 1 2 1 1
```

- After each child performed one move, the number of children standing on each square is $0, 2, 1, 1, 1$ from left to right.
- After each child performed two moves, the number of children standing on each square is $0, 1, 2, 1, 1$ from left to right.
- After each child performed $10^{100}$ moves, the number of children standing on each square is $0, 1, 2, 1, 1$ from left to right.

```input2
RRLLLLRLRRLL
```

```output2
0 3 3 0 0 0 1 1 0 2 2 0
```

```input3
RRRLLRLLRRRLLLLL
```

```output3
0 0 3 2 0 2 1 0 0 0 4 4 0 0 0 0
```