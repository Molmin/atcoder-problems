Score : $250$ points

## Problem Statement

The AtCoder company office can be represented as a grid of $H$ rows and $W$ columns. Let $(i, j)$ denote the cell at the $i$-th row from the top and $j$-th column from the left.

The state of each cell is represented by a character $S_{i,j}$. If $S_{i,j}$ is `#`, that cell contains a desk; if $S_{i,j}$ is `.`, that cell is a floor. It is guaranteed that there are at least two floor cells.

You will choose two distinct floor cells and place a humidifier on each.

After placing the humidifiers, a cell $(i,j)$ is humidified if and only if it is within a Manhattan distance $D$ from at least one of the humidifier cells $(i',j')$. The Manhattan distance between $(i,j)$ and $(i',j')$ is defined as $|i - i'| + |j - j'|$.
Note that any floor cell on which a humidifier is placed is always humidified.

Find the maximum possible number of humidified floor cells.

## Constraints

- $1 \leq H \leq 10$
- $1 \leq W \leq 10$
- $2 \leq H \times W$
- $0 \leq D \leq H+W-2$
- $H,W,D$ are integers.
- $S_{i,j}$ is `#` or `.`. $(1 \leq i \leq H, 1 \leq j \leq W)$
- There are at least two floor cells.

## Input

The input is given from Standard Input in the following format:

> $H$ $W$ $D$
> 
> $S_{1,1}$$S_{1,2}$$\cdots$$S_{1,W}$
> 
> $S_{2,1}$$S_{2,2}$$\cdots$$S_{2,W}$
> 
> $\vdots$
> 
> $S_{H,1}$$S_{H,2}$$\cdots$$S_{H,W}$

## Output

Print the answer.

```input1
2 5 1
.###.
.#.##
```

```output1
3
```

When placing humidifiers on $(1,1)$ and $(1,5)$:

- From the humidifier on $(1,1)$, two cells $(1,1)$ and $(2,1)$ are humidified.
- From the humidifier on $(1,5)$, one cell $(1,5)$ is humidified.

In total, three cells are humidified. No configuration can humidify four or more floor cells, so the answer is $3$.

```input2
5 5 2
.#.#.
.....
.#.#.
#.#.#
.....
```

```output2
15
```

When placing humidifiers on $(2,4)$ and $(5,3)$, $15$ floor cells are humidified.

```input3
4 4 2
....
.##.
.##.
....
```

```output3
10
```