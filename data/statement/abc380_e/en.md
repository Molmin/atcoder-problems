Score : $450$ points

## Problem Statement

There are $N$ cells in a row, numbered $1$ to $N$.<br>
For each $1 \leq i &lt; N$, cells $i$ and $i+1$ are adjacent.

Initially, cell $i$ is painted with color $i$.

You are given $Q$ queries. Process them in order. Each query is of one of the following two types.

- `1 x c`: Repaint the following to color $c$: all reachable cells reachable from cell $x$ by repeatedly moving to an adjacent cell painted in the same color as the current cell.
- `2 c`: Print the number of cells painted with color $c$.

## Constraints

- $1 \leq N \leq 5 \times 10^5$
- $1 \leq Q \leq 2 \times 10^5$
- In queries of the first type, $1 \leq x \leq N$.
- In queries of the first and second types, $1 \leq c \leq N$.
- There is at least one query of the second type.
- All input values are integers.

## Input

The input is given from Standard Input in the following format:

> $N$ $Q$
> 
> $\mathrm{query}_1$
> 
> $\vdots$
> 
> $\mathrm{query}_Q$

Each query is given in one of the following two formats:

> $1$ $x$ $c$
> $2$ $c$

## Output

Let $q$ be the number of queries of the second type. Print $q$ lines.

The $i$-th line should contain the answer to the $i$-th such query.

```input1
5 6
1 5 4
1 4 2
2 2
1 3 2
1 2 3
2 3
```

```output1
3
4
```

The queries recolor the cells as shown in the figure.

![Figure](https://img.atcoder.jp/abc380/c3bf3eec819a7b7fcbfd21065c06bab2.png)