Score : $1900$ points

## Problem Statement

Snuke has a grid with $H$ rows and $W$ columns. The square at the $i$-th row and $j$-th column contains a character $S_{i,j}$.

He can perform the following two kinds of operation on the grid:

- Row-reverse: Reverse the order of the squares in a selected row.
- Column-reverse: Reverse the order of the squares in a selected column.

For example, reversing the $2$-nd row followed by reversing the $4$-th column will result as follows:

![](https://atcoder.jp/img/code-festival-2016-final/31458935865e5db21bfbcd2eab9511da.png)

By performing these operations any number of times in any order, how many placements of characters on the grid can be obtained?

## Constraints

- $1 \leq H,W \leq 200$
- $S_{i,j}$ is a lowercase English letter (`a`-`z`).

## Input

The input is given from Standard Input in the following format:

> $H$ $W$
> 
> $S_{1,1}$$S_{1,2}$$...$$S_{1,W}$
> 
> $S_{2,1}$$S_{2,2}$$...$$S_{2,W}$
> 
> $:$
> 
> $S_{H,1}$$S_{H,2}$$...$$S_{H,W}$

## Output

Print the number of placements of characters on the grid that can be obtained, modulo $1000000007 (=10^9+7)$.

```input1
2 2
cf
cf
```

```output1
6
```

The following $6$ placements of characters can be obtained:

![](https://atcoder.jp/img/code-festival-2016-final/ddf2925467af2c9734194a886f819a2b.png)

```input2
1 12
codefestival
```

```output2
2
```