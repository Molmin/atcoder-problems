Score : $400$ points

## Problem Statement

We have a circle of radius $R$ centered at $(X, Y)$.<br>
Find the number of grid points (points whose $x$- and $y$-coordinates are both integers) within or on the circle.

## Constraints

- $|X| \le 10^5$
- $|Y| \le 10^5$
- $0 \lt R \le 10^5$
- Each of $X$, $Y$, and $R$ has at most four digits after the decimal point.

## Input

Input is given from Standard Input in the following format:

> $X$ $Y$ $R$

## Output

Print the answer.

```input1
0.2 0.8 1.1
```

```output1
3
```

The circle is shown below. The grid points within or on the circle are marked red.

![Figure](https://img.atcoder.jp/ghi/4f37b99cfbdbb337043b16d8ce64571c.png)

```input2
100 100 1
```

```output2
5
```

$X$, $Y$, and $R$ may not have decimal points.
Note that we also count the grid points on the circle.

```input3
42782.4720 31949.0192 99999.99
```

```output3
31415920098
```