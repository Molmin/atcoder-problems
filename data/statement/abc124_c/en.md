Score : $300$ points

## Problem Statement

$N$ tiles are arranged in a row from left to right. The initial color of each tile is represented by a string $S$ of length $N$.

The $i$-th tile from the left is painted black if the $i$-th character of $S$ is `0`, and painted white if that character is `1`.

You want to repaint some of the tiles black or white, so that any two adjacent tiles have different colors.

At least how many tiles need to be repainted to satisfy the condition?

## Constraints

- $1 \leq |S| \leq 10^5$
- $S_i$ is `0` or `1`.

## Input

Input is given from Standard Input in the following format:

> $S$

## Output

Print the minimum number of tiles that need to be repainted to satisfy the condition.

```input1
000
```

```output1
1
```

The condition can be satisfied by repainting the middle tile white.

```input2
10010010
```

```output2
3
```

```input3
0
```

```output3
0
```