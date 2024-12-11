Score : $100$ points

## Problem Statement

You are given a trapezoid. The lengths of its upper base, lower base, and height are $a$, $b$, and $h$, respectively.

![](https://atcoder.jp/img/arc061/1158e37155d46a42e90f31566478e6da.png)

An example of a trapezoid

Find the area of this trapezoid.

## Constraints

- $1 \leq a \leq 100$
- $1 \leq b \leq 100$
- $1 \leq h \leq 100$
- All input values are integers.
- $h$ is even.

## Input

The input is given from Standard Input in the following format:

> $a$
> 
> $b$
> 
> $h$

## Output

Print the area of the given trapezoid. It is guaranteed that the area is an integer.

```input1
3
4
2
```

```output1
7
```

When the lengths of the upper base, lower base, and height are $3$, $4$, and $2$, respectively, the area of the trapezoid is $(3+4) \times 2/2 = 7$.

```input2
4
4
4
```

```output2
16
```

In this case, a parallelogram is given, which is also a trapezoid.