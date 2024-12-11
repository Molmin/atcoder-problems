Score : $600$ points

## Problem Statement

We have an infinite hexagonal grid shown below.

![](https://img.atcoder.jp/abc269/b61b1e0469588c61352a7fa7f7865351.png)

A hexagonal cell is represented as $(i,j)$ with two integers $i$ and $j$.<br>
Cell $(i,j)$ is adjacent to the following six cells: 

- $(i-1,j-1)$
- $(i-1,j)$
- $(i,j-1)$
- $(i,j+1)$
- $(i+1,j)$
- $(i+1,j+1)$

Let us define the distance between two cells $X$ and $Y$ by the minimum number of moves required to travel from cell $X$ to cell $Y$ by repeatedly moving to an adjacent cell.<br>
For example, the distance between cells $(0,0)$ and $(1,1)$ is $1$, and the distance between cells $(2,1)$ and $(-1,-1)$ is $3$.

You are given $N$ cells $(X_1,Y_1),\ldots,(X_N,Y_N)$.<br>
How many ways are there to choose one or more from these $N$ cells so that the distance between any two of the chosen cells is at most $D$?<br>
Find the count modulo $998244353$.

## Constraints

- $1 \leq N \leq 300$
- $-10^9\leq X_i,Y_i \leq 10^9$
- $1\leq D \leq 10^{10}$
- $(X_i,Y_i)$ are pairwise distinct.
- All values in the input are integers.

## Input

The input is given from Standard Input in the following format:

> $N$ $D$
> 
> $X_1$ $Y_1$
> 
> $\vdots$
> 
> $X_N$ $Y_N$

## Output

Print the answer.  

```input1
3 1
0 0
0 1
1 0
```

```output1
5
```

There are five possible sets of the chosen cells: $\{(0,0)\},\{(0,1)\},\{(1,0)\},\{(0,0),(0,1)\}$, and $\{(0,0),(1,0)\}$.

```input2
9 1
0 0
0 1
0 2
1 0
1 1
1 2
2 0
2 1
2 2
```

```output2
33
```

```input3
5 10000000000
314159265 358979323
846264338 -327950288
-419716939 937510582
-97494459 -230781640
628620899 862803482
```

```output3
31
```