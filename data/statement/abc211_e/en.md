Score : $500$ points

## Problem Statement

You are given a grid with $N$ rows and $N$ columns, where the square at the $i$-th row from the top and $j$-th column from the left is painted black if $S_{i, j}$ is `#` and white if $S_{i, j}$ is `.`.<br>
You will choose $K$ of the white squares and paint them red. How many such ways to paint the grid satisfy the following condition?

- The squares painted red will be connected. That is, you will be able to get from any red square to any red square by repeatedly moving horizontally or vertically while only visiting red squares.

## Constraints

- $1 \leq N \leq 8$
- $1 \leq K \leq 8$
- Each $S_{i, j}$ is `#` or `.`.
- $N$ and $K$ are integers.

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $K$
> 
> $S_{1, 1}S_{1, 2} \dots S_{1, N}$
> 
> $S_{2, 1}S_{2, 2} \dots S_{2, N}$
> 
> $\vdots$
> 
> $S_{N, 1}S_{N, 2} \dots S_{N, N}$

## Output

Print the answer.

```input1
3
5
#.#
...
..#
```

```output1
5
```

We have five ways to satisfy the condition as shown below, where `@` stands for a red square.

```output1
#.# #@# #@# #@# #@#
@@@ .@@ @@. @@@ @@@
@@# @@# @@# .@# @.#
```

Note that the way shown below does not satisfy the connectivity requirement since we do not consider diagonal adjacency.

```output1
#@#
@.@
@@#
```

```input2
2
2
#.
.#
```

```output2
0
```

There is no way to satisfy the condition.

```input3
8
8
........
........
........
........
........
........
........
........
```

```output3
64678
```