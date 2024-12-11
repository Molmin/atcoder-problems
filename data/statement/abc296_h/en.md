Score : $600$ points

## Problem Statement

We have a grid with $N$ rows and $M$ columns, where each square is painted black or white.
Here, at least one square is painted black.<br>
The initial state of the grid is given as $N$ strings $S_1,S_2,\ldots,S_N$ of length $M$.<br>
The square at the $i$-th row from the top and $j$-th column from the left is painted black if the $j$-th character of $S_i$ is `#`, and white if it is `.`.

Takahashi wants to repaint some white squares (possibly zero) black so that the squares painted black are **connected**.
Find the minimum number of squares he needs to **repaint** to achieve his objective.

Here, the squares painted black are said to be **connected** when, for every pair of squares $(S,T)$ painted black, there are a positive integer $K$ and a sequence of $K$ squares $X=(x_1,x_2,\ldots,x_K)$ painted black such that $x_1=S$, $x_K=T$, and $x_i$ and $x_{i+1}$ share a side for every $1\leq i\leq K-1$.<br>
It can be proved that, under the constraints of the problem, there is always a way for Takahashi to achieve his objective.

## Constraints

- $1 \leq N \leq 100$
- $1\leq M \leq 7$
- $N$ and $M$ are integers.
- $S_i$ is a string of length $M$ consisting of `#` and `.`.
- The given grid has at least one square painted black.

## Input

The input is given from Standard Input in the following format:

> $N$ $M$
> 
> $S_1$
> 
> $S_2$
> 
> $\vdots$
> 
> $S_N$

## Output

Print the minimum number of squares that Takahashi needs to repaint for the squares painted black to be connected.

```input1
3 5
...#.
.#...
....#
```

```output1
3
```

The initial grid looks as follows, where $(i,j)$ denotes the square at the $i$-th row from the top and $j$-th column from the left.

![](https://img.atcoder.jp/abc296/d5b5d945798a02840b8add26271fe2a5.png)

Assume that Takahashi repaints three squares $(2,3),(2,4),(3,4)$ (shown red in the figure below) black.

![](https://img.atcoder.jp/abc296/d2d0f1745af0dc309341f96dbd83e717.png)

Then, we have the following squares painted black, including the ones painted black from the beginning. These squares are connected.

![](https://img.atcoder.jp/abc296/76bebc05c2d7c5240151b534ba30f29b.png)

It is impossible to repaint two or fewer squares black so that the squares painted black are connected, so the answer is $3$.<br>
Note that the squares painted white do not have to be connected.

```input2
3 3
###
###
###
```

```output2
0
```

All squares might be painted black from the beginning.

```input3
10 1
.
#
.
.
.
.
.
.
#
.
```

```output3
6
```