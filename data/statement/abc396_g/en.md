Score : $600$ points

## Problem Statement

There is a $H \times W$ grid, and each cell contains $0$ or $1$. The cell at the $i$-th row from the top and the $j$-th column from the left contains an integer $A_{i,j}$.

You can perform the following two operations any number of times in any order:

- Operation X: Choose an integer $x$ ($1 \leq x \leq H$). For every integer $1 \leq y \leq W$, replace $A_{x,y}$ with $1 - A_{x,y}$.
- Operation Y: Choose an integer $y$ ($1 \leq y \leq W$). For every integer $1 \leq x \leq H$, replace $A_{x,y}$ with $1 - A_{x,y}$.

Find the minimum possible value of $\displaystyle \sum_{x=1}^H\sum_{y=1}^W A_{x,y}$ after the process.

## Constraints

- $1 \leq H \leq 2\times 10^5$
- $1 \leq W \leq 18$
- $H$ and $W$ are integers.
- $A_{i,1}A_{i,2}\ldots A_{i,W}$ is a length-$W$ string consisting of `0` and `1`.

## Input

The input is given from Standard Input in the following format:

> $H$ $W$
> 
> $A_{1,1}A_{1,2}\ldots A_{1,W}$
> 
> $A_{2,1}A_{2,2}\ldots A_{2,W}$
> 
> $\vdots$
> 
> $A_{H,1}A_{H,2}\ldots A_{H,W}$

## Output

Print the answer.

```input1
3 3
100
010
110
```

```output1
2
```

By performing the following operations, the grid changes as shown below, and you get $\displaystyle \sum_{x=1}^H\sum_{y=1}^W A_{x,y} = 2$.

1. Operation Y with $y=1$
2. Operation X with $x=2$

![](https://img.atcoder.jp/abc396/efeef604adf229d32bc42042f0a4e066.png)

It is impossible to make $\displaystyle \sum_{x=1}^H\sum_{y=1}^W A_{x,y} \leq 1$, so the answer is $2$.

```input2
3 4
1111
1111
1111
```

```output2
0
```

```input3
10 5
10000
00111
11000
01000
10110
01110
10101
00100
00100
10001
```

```output3
13
```