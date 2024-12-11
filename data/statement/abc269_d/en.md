Score : $400$ points

## Problem Statement

We have an infinite hexagonal grid shown below. Initially, all squares are white.

![](https://img.atcoder.jp/abc269/b61b1e0469588c61352a7fa7f7865351.png)

A hexagonal cell is represented as $(i,j)$ with two integers $i$ and $j$.<br>
Cell $(i,j)$ is adjacent to the following six cells: 

- $(i-1,j-1)$
- $(i-1,j)$
- $(i,j-1)$
- $(i,j+1)$
- $(i+1,j)$
- $(i+1,j+1)$

Takahashi has painted $N$ cells $(X_1,Y_1),(X_2,Y_2),\dots,(X_N,Y_N)$ black.<br>
Find the number of connected components formed by the black cells.<br>
Two black cells belong to the same connected component when one can travel between those two black cells by repeatedly moving to an adjacent black cell.

## Constraints

- All values in the input are integers.
- $1 \le N \le 1000$
- $|X_i|,|Y_i| \le 1000$
- The pairs $(X_i,Y_i)$ are distinct.

## Input

The input is given from Standard Input in the following format:

> $N$
> 
> $X_1$ $Y_1$
> 
> $X_2$ $Y_2$
> 
> $\vdots$
> 
> $X_N$ $Y_N$

## Output

Print the answer as an integer.

```input1
6
-1 -1
0 1
0 2
1 0
1 2
2 0
```

```output1
3
```

After Takahashi paints cells black, the grid looks as shown below.

![](https://img.atcoder.jp/abc269/865747dac44d93b150ecbed462ac4ef3.png)

The black squares form the following three connected components:

- $(-1,-1)$
- $(1,0),(2,0)$
- $(0,1),(0,2),(1,2)$

```input2
4
5 0
4 1
-3 -4
-2 -5
```

```output2
4
```

```input3
5
2 1
2 -1
1 0
3 1
1 -1
```

```output3
1
```