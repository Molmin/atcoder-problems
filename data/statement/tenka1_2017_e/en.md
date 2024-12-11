Score : $800$ points

## Problem Statement

There are $N$ lines in the $xy$-plane. The $i$-th line is represented by $A_ix+B_iy=C_i$.
Any two lines among the $N+2$ lines, the above $N$ lines plus the $x$-axis and $y$-axis, cross each other at exactly one point.

For each pair $1 \leq i &lt; j \leq N$, there is a car at the cross point of the $i$-th and $j$-th lines.
Even where three or more lines intersect at a point, a car is individually placed for each pair of lines.
That is, there will be $k(k-1)/2$ cars placed at the intersection of $k$ lines.

Those cars are already very old, and can only be moved parallel to the $x$-axis or $y$-axis.

Takahashi will hold an exhibition of antique cars at a place on the $xy$-plane.
In order to avoid damaging the half-broken cars too much, he will select the place of the exhibition so that the total distance covered will be minimized when all the cars are moved to the place.
If such a place is not uniquely determined, among the places that satisfy the condition above, the place with the minimum $x$-coordinate will be selected.
If the place is still not uniquely determined, among the places that satisfy the two conditions above, the place with the minimum $y$-coordinate will be selected.

Find the place of the exhibition that will be selected.

## Constraints

- $2 \leq N \leq 4 \times 10^4$
- $1 \leq |A_i|,|B_i| \leq 10^4(1 \leq i \leq N)$
- $0 \leq |C_i| \leq 10^4(1 \leq i \leq N)$
- No two given lines are parallel.
- All input values are integers.

## Inputs

Input is given from Standard Input in the following format:

> $N$
> 
> $A_1$ $B_1$ $C_1$
> 
> :
> 
> $A_N$ $B_N$ $C_N$

## Outputs

Print the $x$-coordinate and $y$-coordinate of the place of the exhibition that will be selected, in this order, with a space in between. The output will be judged as correct when the absolute or relative error is at most $10^{-9}$.

```input1
3
1 1 1
2 -1 2
-1 2 2
```

```output1
1.000000000000000 1.000000000000000
```

![](https://img.atcoder.jp/tenka1-2017/650fff486341589a0388efff446acf0a.png)

There is a car at each place shown by a blue circle in the figure. The place to be selected is shown by a purple circle.

```input2
4
1 1 2
1 -1 0
3 -1 -2
1 -3 4
```

```output2
-1.000000000000000 -1.000000000000000
```

```input3
7
1 7 8
-2 4 9
3 -8 -5
9 2 -14
6 7 5
-8 -9 3
3 8 10
```

```output3
-1.722222222222222 1.325000000000000
```