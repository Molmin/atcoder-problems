Score : $600$ points

## Problem Statement

We have three stones at points $(0, 0)$, $(1,0)$, and $(0,1)$ on a two-dimensional plane.

These three stones are said to form an L when they satisfy the following conditions:

- Each of the stones is at integer coordinates.
- Each of the stones is adjacent to another stone. (That is, for each stone, there is another stone whose distance from that stone is $1$.)
- The three stones do not lie on the same line.

Particularly, the initial arrangement of the stone - $(0, 0)$, $(1,0)$, and $(0,1)$ - forms an L.

You can do the following operation any number of times: choose one of the stones and move it to any position. However, after each operation, the stones must form an L.
You want to do as few operations as possible to put stones at points $(ax, ay)$, $(bx, by)$, and $(cx, cy)$. How many operations do you need to do this?

It is guaranteed that the desired arrangement of stones - $(ax, ay)$, $(bx, by)$, and $(cx, cy)$ - forms an L. Under this condition, it is always possible to achieve the objective with a finite number of operations.

You will be given $T$ cases of this problem. Solve each of them.

## Notes

We assume that the three stones are indistinguishable. For example, the stone that is initially at point $(0,0)$ may be at any of the points $(ax, ay)$, $(bx, by)$, and $(cx, cy)$ in the end.

## Constraints

- $1 \leq T \leq 10^3$
- $|ax|,|ay|,|bx|,|by|,|cx|,|cy| \leq 10^9$
- The desired arrangement of stones - $(ax, ay)$, $(bx, by)$, and $(cx, cy)$ - forms an L.

## Input

Input is given from Standard Input in the following format:

> $T$
> 
> $\text{case}_1$
> 
> $\vdots$
> 
> $\text{case}_T$

Each case is in the following format:

> $ax$ $ay$ $bx$ $by$ $cx$ $cy$

## Output

Print $T$ values. The $i$-th value should be the minimum number of operations for $\text{case}_i$.

```input1
1
3 2 2 2 2 1
```

```output1
4
```

Let us use `#` to represent a stone.
You can move the stones to the specified positions with four operations, as follows:

```output1
....    ....    ....    ..#.    ..##
#... -> ##.. -> .##. -> .##. -> ..#.
##..    .#..    .#..    ....    ....
```

```input2
10
0 0 1 0 0 1
1 0 0 1 1 1
2 -1 1 -1 1 0
1 -2 2 -1 1 -1
-1 2 0 2 -1 3
-1 -2 -2 -2 -2 -3
-2 4 -3 3 -2 3
3 1 4 2 4 1
-4 2 -4 3 -3 3
5 4 5 3 4 4
```

```output2
0
1
2
3
4
5
6
7
8
9
```