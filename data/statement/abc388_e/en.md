Score : $450$ points

## Problem Statement

There are $N$ mochi (rice cakes), arranged in ascending order of size.
The size of the $i$-th mochi $(1\leq i\leq N)$ is $A_i$.

Given two mochi $A$ and $B$, with sizes $a$ and $b$ respectively, you can make one kagamimochi (a stacked rice cake) by placing mochi $A$ on top of mochi $B$ if and only if $a$ is at most half of $b$.

Find how many kagamimochi can be made simultaneously.

More precisely, find the maximum non-negative integer $K$ for which the following is possible:

- From the $N$ mochi, choose $2K$ of them to form $K$ pairs. For each pair, place one mochi on top of the other, to make $K$ kagamimochi.

## Constraints

- $2 \leq N \leq 5 \times 10^5$
- $1 \leq A_i \leq 10^9 \ (1 \leq i \leq N)$
- $A_i \leq A_{i+1} \ (1 \leq i &lt; N)$
- All input values are integers.

## Input

The input is given from Standard Input in the following format:

> $N$
> 
> $A_1$ $A_2$ $\dotsc$ $A_N$

## Output

Print the maximum $K$ such that $K$ kagamimochi can be made simultaneously.

```input1
6
2 3 4 4 7 10
```

```output1
3
```

The sizes of the given mochi are as follows:

![](https://img.atcoder.jp/abc388/29024766d11c2d88b06c92b2081129f5.png)

In this case, you can make the following three kagamimochi simultaneously:

![](https://img.atcoder.jp/abc388/26686710916fe3623058f6000669e049.png)

It is not possible to make four or more kagamimochi from six mochi, so print `3`.

```input2
3
387 388 389
```

```output2
0
```

It is possible that you cannot make any kagamimochi.

```input3
24
307 321 330 339 349 392 422 430 477 481 488 537 541 571 575 602 614 660 669 678 712 723 785 792
```

```output3
6
```