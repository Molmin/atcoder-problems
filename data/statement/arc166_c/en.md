Score : $600$ points

## Problem Statement

There is a grid with $H$ rows and $W$ columns.

This grid has $H(W+1)$ vertical edges and $W(H+1)$ horizontal edges, for a total of $H(W+1) + W(H+1)$ (see also the figures at Sample Input/Output). Consider marking these edges by the following two kinds of operations.

- **Operation (1)**: Choose a square whose left and upper edges are unmarked when performing this operation. Mark the left and upper edges of that square.
- **Operation (2)**: Choose a square whose right and lower edges are unmarked when performing this operation. Mark the right and lower edges of that square.

Find the number, modulo $998244353$, of possible sets of edges that are eventually marked when Operations (1) and (2) can be performed any number of times, possibly zero.

You have $T$ test cases to solve.

## Constraints

- $1\leq T\leq 2\times 10^5$
- $1\leq H, W\leq 10^6$

## Input

The input is given from Standard Input in the following format:

> $T$
> 
> $\text{case}_1$
> 
> $\vdots$
> 
> $\text{case}_T$

Each test case is given in the following format:

> $H$ $W$

## Output

Print $T$ lines. The $i$-th line should contain the number, modulo $998244353$, of possible sets of edges that are eventually marked for the $i$-th test case.

```input1
2
1 1
2 3
```

```output1
4
800
```

For the case $(H, W)=(1,1)$, there are four possible sets of edges that are eventually marked, as shown below. The marked edges are drawn in bold.

![](https://img.atcoder.jp/arc166/bd84a15ada55c0df6d4e66863053bd59.png)

For the case $(H, W)=(2,3)$, the following sets of marked edges are **possible**:

![](https://img.atcoder.jp/arc166/66c77b9132c38d82c36732966ff3ae4f.png)

On the other hand, the following sets of marked edges are **impossible**:

![](https://img.atcoder.jp/arc166/0029e3cc83a0232231ddf6e280c7f9a8.png)

```input2
3
123 456
654 321
1000000 1000000
```

```output2
60549740
298307903
656009181
```