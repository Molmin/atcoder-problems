Score : $100$ points

## Problem Statement

We have an $N \times N$ square grid.

We will paint each square in the grid either black or white.

If we paint exactly $A$ squares white, how many squares will be painted black?

## Constraints

- $1 \leq N \leq 100$
- $0 \leq A \leq N^2$

## Inputs

Input is given from Standard Input in the following format:

> $N$
> 
> $A$

## Outputs

Print the number of squares that will be painted black.

```input1
3
4
```

```output1
5
```

There are nine squares in a $3 \times 3$ square grid.
Four of them will be painted white, so the remaining five squares will be painted black.

```input2
19
100
```

```output2
261
```

```input3
10
0
```

```output3
100
```

As zero squares will be painted white, all the squares will be painted black.