Score : $200$ points

## Problem Statement

There are $2000001$ stones placed on a number line. The coordinates of these stones are $-1000000, -999999, -999998, \ldots, 999999, 1000000$.

Among them, some $K$ consecutive stones are painted black, and the others are painted white.

Additionally, we know that the stone at coordinate $X$ is painted black.

Print all coordinates that potentially contain a stone painted black, in ascending order.

## Constraints

- $1 \leq K \leq 100$
- $0 \leq X \leq 100$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $K$ $X$

## Output

Print all coordinates that potentially contain a stone painted black, in ascending order, with spaces in between.

```input1
3 7
```

```output1
5 6 7 8 9
```

We know that there are three stones painted black, and the stone at coordinate $7$ is painted black. There are three possible cases:

- The three stones painted black are placed at coordinates $5$, $6$, and $7$.
- The three stones painted black are placed at coordinates $6$, $7$, and $8$.
- The three stones painted black are placed at coordinates $7$, $8$, and $9$.

Thus, five coordinates potentially contain a stone painted black: $5$, $6$, $7$, $8$, and $9$.

```input2
4 0
```

```output2
-3 -2 -1 0 1 2 3
```

Negative coordinates can also contain a stone painted black.

```input3
1 100
```

```output3
100
```