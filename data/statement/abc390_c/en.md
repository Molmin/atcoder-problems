Score : $300$ points

## Problem Statement

You are given a grid of $H$ rows and $W$ columns.<br>
Let $(i,j)$ denote the cell at row $i$ ($1 \leq i \leq H$) from the top and column $j$ ($1 \leq j \leq W$) from the left.<br>
The state of the grid is represented by $H$ strings $S_1, S_2, \ldots, S_H$, each of length $W$, as follows:

- If the $j$-th character of $S_i$ is `#`, cell $(i,j)$ is painted black.
- If the $j$-th character of $S_i$ is `.`, cell $(i,j)$ is painted white.
- If the $j$-th character of $S_i$ is `?`, cell $(i,j)$ is not yet painted.

Takahashi wants to paint each not-yet-painted cell white or black so that all the black cells form a rectangle.<br>
More precisely, he wants there to exist a quadruple of integers $(a,b,c,d)$ ($1 \leq a \leq b \leq H$, $1 \leq c \leq d \leq W$) such that:

For each cell $(i,j)$ ($1 \leq i \leq H, 1 \leq j \leq W$),
if $a \leq i \leq b$ and $c \leq j \leq d$, the cell is black;<br>
otherwise, the cell is white.

Determine whether this is possible.

## Constraints

- $1 \leq H, W \leq 1000$
- $H$ and $W$ are integers.
- Each $S_i$ is a string of length $W$ consisting of `#`, `.`, `?`.
- There is at least one cell that is already painted black.

## Input

The input is given from Standard Input in the following format:

> $H$ $W$
> 
> $S_1$
> 
> $S_2$
> 
> $\vdots$
> 
> $S_H$

## Output

If it is possible to paint all the not-yet-painted cells so that the black cells form a rectangle, print `Yes`; otherwise, print `No`.

```input1
3 5
.#?#.
.?#?.
?...?
```

```output1
Yes
```

The grid is in the following state. `?` indicates a cell that are not yet painted.

![](https://img.atcoder.jp/abc390/85b372e4c19d09eb4f842736d40de3b9.png)

By painting cells $(1,3)$, $(2,2)$, and $(2,4)$ black and cells $(3,1)$ and $(3,5)$ white, the black cells can form a rectangle as follows:

![](https://img.atcoder.jp/abc390/535404bb0565608276c41ef49d8f2336.png)

Therefore, print `Yes`.

```input2
3 3
?##
#.#
##?
```

```output2
No
```

To form a rectangle with all black cells, you would need to paint cell $(2,2)$ black, but it is already painted white.<br>
Therefore, it is impossible to make all black cells form a rectangle, so print `No`.

```input3
1 1
#
```

```output3
Yes
```