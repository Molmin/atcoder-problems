Score : $300$ points

## Problem Statement

There are $N$ mochi (rice cakes) arranged in ascending order of size.
The size of the $i$-th mochi $(1 \leq i \leq N)$ is $A_i$.

Given two mochi $A$ and $B$, with sizes $a$ and $b$ respectively, you can make one kagamimochi (a stacked rice cake) by placing mochi $A$ on top of mochi $B$ if and only if $a$ is at most half of $b$.

You choose two mochi out of the $N$ mochi, and place one on top of the other to form one kagamimochi.

Find how many different kinds of kagamimochi can be made.

Two kagamimochi are distinguished if at least one of the mochi is different, even if the sizes of the mochi are the same.

## Constraints

- $2 \leq N \leq 5 \times 10^5$
- $1 \leq A_i \leq 10^9 \ (1 \leq i \leq N)$
- $A_i \leq A_{i+1} \ (1 \leq i &lt; N)$
- All input values are integers.

## Input

The input is given from Standard Input in the following format:

> $N$
> 
> $A_1$ $A_2$ $\cdots$ $A_N$

## Output

Print the number of different kinds of kagamimochi that can be made.

```input1
6
2 3 4 4 7 10
```

```output1
8
```

The sizes of the given mochi are as follows:

![](https://img.atcoder.jp/abc388/29024766d11c2d88b06c92b2081129f5.png)

In this case, you can make the following eight kinds of kagamimochi:

![](https://img.atcoder.jp/abc388/0b69fbe457f2c4298173acce2faab37e.png)

Note that there are two kinds of kagamimochi where a mochi of size $4$ is topped by a mochi of size $2$, and two kinds where a mochi of size $10$ is topped by a mochi of size $4$.

```input2
3
387 388 389
```

```output2
0
```

It is possible that you cannot make any kagamimochi.

```input3
32
1 2 4 5 8 10 12 16 19 25 33 40 50 64 87 101 149 175 202 211 278 314 355 405 412 420 442 481 512 582 600 641
```

```output3
388
```