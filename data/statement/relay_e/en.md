Score : $100$ points

## Problem Statement

Takahashi is drawing a segment on grid paper.

From a certain square, a square that is $x$ squares to the right and $y$ squares above, is denoted as square $(x, y)$.

When Takahashi draws a segment connecting the lower left corner of square $(A, B)$ and the lower left corner of square $(C, D)$, find the number of the squares crossed by the segment.

Here, the segment is said to *cross* a square if the segment has non-empty intersection with the region within the square, excluding the boundary.

## Constraints

- $1 \leq A, B, C, D \leq 10^9$
- At least one of $A \neq C$ and $B \neq D$ holds.

## Input

The input is given from Standard Input in the following format:

> $A$ $B$ $C$ $D$

## Output

Print the number of the squares crossed by the segment.

```input1
1 1 3 4
```

```output1
4
```

```input2
2 3 10 7
```

```output2
8
```