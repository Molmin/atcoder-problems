Score : $425$ points

## Problem Statement

You are given two grids, A and B, each with $H$ rows and $W$ columns.

For each pair of integers $(i, j)$ satisfying $1 \leq i \leq H$ and $1 \leq j \leq W$, let $(i, j)$ denote the cell in the $i$-th row and $j$-th column. In grid A, cell $(i, j)$ contains the integer $A_{i, j}$. In grid B, cell $(i, j)$ contains the integer $B_{i, j}$.

You will repeat the following operation any number of times, possibly zero. In each operation, you perform one of the following:

- Choose an integer $i$ satisfying $1 \leq i \leq H-1$ and swap the $i$-th and $(i+1)$-th rows in grid A.
- Choose an integer $i$ satisfying $1 \leq i \leq W-1$ and swap the $i$-th and $(i+1)$-th columns in grid A.

Determine whether it is possible to make grid A identical to grid B by repeating the above operation. If it is possible, print the minimum number of operations required to do so.

Here, grid A is identical to grid B if and only if, for all pairs of integers $(i, j)$ satisfying $1 \leq i \leq H$ and $1 \leq j \leq W$, the integer written in cell $(i, j)$ of grid A is equal to the integer written in cell $(i, j)$ of grid B.

## Constraints

- All input values are integers.
- $2 \leq H, W \leq 5$
- $1 \leq A_{i, j}, B_{i, j} \leq 10^9$

## Input

The input is given from Standard Input in the following format:

> $H$ $W$
> 
> $A_{1, 1}$ $A_{1, 2}$ $\cdots$ $A_{1, W}$
> 
> $A_{2, 1}$ $A_{2, 2}$ $\cdots$ $A_{2, W}$
> 
> $\vdots$
> 
> $A_{H, 1}$ $A_{H, 2}$ $\cdots$ $A_{H, W}$
> 
> $B_{1, 1}$ $B_{1, 2}$ $\cdots$ $B_{1, W}$
> 
> $B_{2, 1}$ $B_{2, 2}$ $\cdots$ $B_{2, W}$
> 
> $\vdots$
> 
> $B_{H, 1}$ $B_{H, 2}$ $\cdots$ $B_{H, W}$

## Output

If it is impossible to make grid A identical to grid B, output `-1`. Otherwise, print the minimum number of operations required to make grid A identical to grid B.

```input1
4 5
1 2 3 4 5
6 7 8 9 10
11 12 13 14 15
16 17 18 19 20
1 3 2 5 4
11 13 12 15 14
6 8 7 10 9
16 18 17 20 19
```

```output1
3
```

Swapping the fourth and fifth columns of the initial grid A yields the following grid:

```output1
1 2 3 5 4
6 7 8 10 9
11 12 13 15 14
16 17 18 20 19
```

Then, swapping the second and third rows yields the following grid:

```output1
1 2 3 5 4
11 12 13 15 14
6 7 8 10 9
16 17 18 20 19
```

Finally, swapping the second and third columns yields the following grid, which is identical to grid B:

```output1
1 3 2 5 4
11 13 12 15 14
6 8 7 10 9
16 18 17 20 19
```

You can make grid A identical to grid B with the three operations above and cannot do so with fewer operations, so print $3$.

```input2
2 2
1 1
1 1
1 1
1 1000000000
```

```output2
-1
```

There is no way to perform the operation to make grid A match grid B, so print `-1`.

```input3
3 3
8 1 6
3 5 7
4 9 2
8 1 6
3 5 7
4 9 2
```

```output3
0
```

Grid A is already identical to grid B at the beginning.

```input4
5 5
710511029 136397527 763027379 644706927 447672230
979861204 57882493 442931589 951053644 152300688
43971370 126515475 962139996 541282303 834022578
312523039 506696497 664922712 414720753 304621362
325269832 191410838 286751784 732741849 806602693
806602693 732741849 286751784 191410838 325269832
304621362 414720753 664922712 506696497 312523039
834022578 541282303 962139996 126515475 43971370
152300688 951053644 442931589 57882493 979861204
447672230 644706927 763027379 136397527 710511029
```

```output4
20
```