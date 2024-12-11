Score : $900$ points

## Problem Statement

There is a rectangular sheet of paper with height $H+1$ and width $W+1$. We introduce an $xy$-coordinate system so that the four corners of the sheet are $(0, 0)$, $(W + 1, 0)$, $(0, H + 1)$ and $(W + 1, H + 1)$.

This sheet can be cut along the lines $x = 1,2,...,W$ and the lines $y = 1,2,...,H$. Consider a sequence of operations of length $K$ where we choose $K$ of these $H + W$ lines and cut the sheet along those lines one by one in some order.

Let the score of a cut be the number of pieces of paper that exist just after the cut. The score of a sequence of operations is the sum of the scores of all of the $K$ cuts.

Find the sum of the scores of all possible sequences of operations of length $K$. Since this value can be extremely large, print the number modulo $10^9 + 7$.

## Constraints

- $1 \leq H,W \leq 10^7$
- $1 \leq K \leq H + W$
- $H, W$ and $K$ are integers.

## Input

Input is given from Standard Input in the following format:

> $H$ $W$ $K$

## Output

Print the sum of the scores, modulo $10^9 + 7$.

```input1
2 1 2
```

```output1
34
```

Let $x_1$, $y_1$ and $y_2$ denote the cuts along the lines $x = 1$, $y = 1$ and $y = 2$, respectively. The six possible sequences of operations and the score of each of them are as follows:

- $y_1, y_2$: $2 + 3 = 5$
- $y_2, y_1$: $2 + 3 = 5$
- $y_1, x_1$: $2 + 4 = 6$
- $y_2, x_1$: $2 + 4 = 6$
- $x_1, y_1$: $2 + 4 = 6$
- $x_1, y_2$: $2 + 4 = 6$

The sum of these is $34$.

```input2
30 40 50
```

```output2
616365902
```

Be sure to print the sum modulo $10^9 + 7$.