Score: $100$ points

## Problem Statement

There are $N$ buildings aligned in a row. The $i$-th building from the left has a height of $H_i$.

Determine if there is a building taller than the first one from the left. If such a building exists, find the position of the leftmost such building from the left.

## Constraints

- $1 \leq N \leq 100$
- $1 \leq H_i \leq 100$
- All input values are integers.

## Input

The input is given from Standard Input in the following format:

> $N$
> 
> $H_1$ $H_2$ $\ldots$ $H_N$

## Output

If no building is taller than the first one from the left, print `-1`.

If such a building exists, print the position (index) of the leftmost such building from the left.

```input1
4
3 2 5 2
```

```output1
3
```

The building taller than the first one from the left is the third one from the left.

```input2
3
4 3 2
```

```output2
-1
```

No building is taller than the first one from the left.

```input3
7
10 5 10 2 10 13 15
```

```output3
6
```

The buildings taller than the first one from the left are the sixth and seventh ones. Among them, the leftmost is the sixth one.