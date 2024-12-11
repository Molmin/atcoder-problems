Score : $900$ points

## Problem Statement

There is a circle on a plane. It has $N$ distinct points on its circumference, numbered $1,2,\dots,N$ in clockwise order.

There are $\frac{N(N-1)}{2}$ line segments that can be drawn by connecting two different points among the $N$ points; you will choose and draw $M$ of these segments. Find the number, modulo $(10^9+7)$, of ways to draw $M$ segments such that no two of them intersect at a point other than their endpoints.

## Constraints

- $1 \le N \le 10^7$
- $0 \le M \le \frac{N(N-1)}{2}$

## Input

The input is given from Standard Input in the following format:

> $N$ $M$

## Output

Print the answer.

```input1
4 2
```

```output1
14
```

The following examples on the left and in the middle satisfy the conditions. (Note that it is acceptable for the segments to intersect at their endpoints.)

The example on the right is unsuitable because two edges intersect at a point other than their endpoints. All other $\binom{6}{2} - 1 = 14$ ways satisfy the conditions.

![](https://img.atcoder.jp/agc065/4854b47261fd9c54c2d25ee53c3e6be5.png)

```input2
6 3
```

```output2
295
```

```input3
2023 1217
```

```output3
10811951
```

```input4
1234321 2345432
```

```output4
789452255
```