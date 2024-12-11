Score : $600$ points

## Problem Statement

We have a grid with $A$ horizontal rows and $B$ vertical columns, with the squares painted white. On this grid, we will repeatedly apply the following operation:

- Assume that the grid currently has $a$ horizontal rows and $b$ vertical columns. Choose "vertical" or "horizontal".-   - If we choose "vertical", insert one row at the top of the grid, resulting in an $(a+1) \times b$ grid.
-   - If we choose "horizontal", insert one column at the right end of the grid, resulting in an $a \times (b+1)$ grid.
- Then, paint one of the added squares black, and the other squares white.

Assume the grid eventually has $C$ horizontal rows and $D$ vertical columns. Find the number of ways in which the squares can be painted in the end, modulo $998244353$.

## Constraints

- $1 \leq A \leq C \leq 3000$
- $1 \leq B \leq D \leq 3000$
- $A$, $B$, $C$, and $D$ are integers.

## Input

Input is given from Standard Input in the following format:

> $A$ $B$ $C$ $D$

## Output

Print the number of ways in which the squares can be painted in the end, modulo $998244353$.

```input1
1 1 2 2
```

```output1
3
```

Any two of the three squares other than the bottom-left square can be painted black.

```input2
2 1 3 4
```

```output2
65
```

```input3
31 41 59 265
```

```output3
387222020
```