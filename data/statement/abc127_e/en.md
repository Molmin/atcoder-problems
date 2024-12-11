Score : $500$ points

## Problem Statement

We have a grid of squares with $N$ rows and $M$ columns. Let $(i, j)$ denote the square at the $i$-th row from the top and $j$-th column from the left. We will choose $K$ of the squares and put a piece on each of them.

If we place the $K$ pieces on squares $(x_1, y_1)$, $(x_2, y_2)$, ..., and $(x_K, y_K)$, the *cost* of this arrangement is computed as:

$\sum_{i=1}^{K-1} \sum_{j=i+1}^K (|x_i - x_j| + |y_i - y_j|)$

Find the sum of the costs of all possible arrangements of the pieces. Since this value can be tremendous, print it modulo $10^9+7$.

We consider two arrangements of the pieces different if and only if there is a square that contains a piece in one of the arrangements but not in the other.

## Constraints

- $2 \leq N \times M \leq 2 \times 10^5$
- $2 \leq K \leq N \times M$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$ $M$ $K$

## Output

Print the sum of the costs of all possible arrangements of the pieces, modulo $10^9+7$.

```input1
2 2 2
```

```output1
8
```

There are six possible arrangements of the pieces, as follows:

- $((1,1),(1,2))$, with the cost $|1-1|+|1-2| = 1$
- $((1,1),(2,1))$, with the cost $|1-2|+|1-1| = 1$
- $((1,1),(2,2))$, with the cost $|1-2|+|1-2| = 2$
- $((1,2),(2,1))$, with the cost $|1-2|+|2-1| = 2$
- $((1,2),(2,2))$, with the cost $|1-2|+|2-2| = 1$
- $((2,1),(2,2))$, with the cost $|2-2|+|1-2| = 1$

The sum of these costs is $8$.

```input2
4 5 4
```

```output2
87210
```

```input3
100 100 5000
```

```output3
817260251
```

Be sure to print the sum modulo $10^9+7$.