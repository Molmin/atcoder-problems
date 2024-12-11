Score : $200$ points

## Problem Statement

In an $xy$-coordinate plane whose $x$-axis is oriented to the right and whose $y$-axis is oriented upwards, rotate a point $(a, b)$ around the origin $d$ degrees counterclockwise and find the new coordinates of the point.

## Constraints

- $-1000 \leq a,b \leq 1000$
- $1 \leq d \leq 360$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $a$ $b$ $d$

## Output

Let the new coordinates of the point be $(a', b')$. Print $a'$ and $b'$ in this order, with a space in between.<br>
Your output will be considered correct when, for each value printed, the absolute or relative error from the answer is at most $10^{-6}$.

```input1
2 2 180
```

```output1
-2 -2
```

When $(2, 2)$ is rotated around the origin $180$ degrees counterclockwise, it becomes the symmetric point of $(2, 2)$ with respect to the origin, which is $(-2, -2)$.

```input2
5 0 120
```

```output2
-2.49999999999999911182 4.33012701892219364908
```

When $(5, 0)$ is rotated around the origin $120$ degrees counterclockwise, it becomes $(-\frac {5}{2} , \frac {5\sqrt{3}}{2})$.<br>
This sample output does not precisely match these values, but the errors are small enough to be considered correct.

```input3
0 0 11
```

```output3
0.00000000000000000000 0.00000000000000000000
```

Since $(a, b)$ is the origin (the center of rotation), a rotation does not change its coordinates.

```input4
15 5 360
```

```output4
15.00000000000000177636 4.99999999999999555911
```

A $360$-degree rotation does not change the coordinates of a point.

```input5
-505 191 278
```

```output5
118.85878514480690171240 526.66743699786547949770
```