Score : $500$ points

## Problem Statement

There are $2N$ squares arranged from left to right. You are given a string of length $2N$ representing the color of each of the squares.

The color of the $i$-th square from the left is black if the $i$-th character of $S$ is `B`, and white if that character is `W`.

You will perform the following operation exactly $N$ times: choose two distinct squares, then invert the colors of these squares and the squares between them. Here, to invert the color of a square is to make it white if it is black, and vice versa.  

Throughout this process, you cannot choose the same square twice or more. That is, each square has to be chosen exactly once.

Find the number of ways to make all the squares white at the end of the process, modulo $10^9+7$.

Two ways to make the squares white are considered different if and only if there exists $i$ $(1 \leq i \leq N)$ such that the pair of the squares chosen in the $i$-th operation is different.

## Constraints

- $1 \leq N \leq 10^5$
- $|S| = 2N$
- Each character of $S$ is `B` or `W`.

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $S$

## Output

Print the number of ways to make all the squares white at the end of the process, modulo $10^9+7$. If there are no such ways, print $0$.

```input1
2
BWWB
```

```output1
4
```

There are four ways to make all the squares white, as follows:

- Choose Squares $1, 3$ in the first operation, and choose Squares $2, 4$ in the second operation.
- Choose Squares $2, 4$ in the first operation, and choose Squares $1, 3$ in the second operation.
- Choose Squares $1, 4$ in the first operation, and choose Squares $2, 3$ in the second operation.
- Choose Squares $2, 3$ in the first operation, and choose Squares $1, 4$ in the second operation.

```input2
4
BWBBWWWB
```

```output2
288
```

```input3
5
WWWWWWWWWW
```

```output3
0
```