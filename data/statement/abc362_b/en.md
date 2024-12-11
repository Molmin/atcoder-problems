Score : $200$ points

## Problem Statement

In the $xy$-plane, there are three points $A(x_A, y_A)$, $B(x_B, y_B)$, and $C(x_C, y_C)$ that are not collinear. Determine whether the triangle $ABC$ is a right triangle.

## Constraints

- $-1000 \leq x_A, y_A, x_B, y_B, x_C, y_C \leq 1000$
- The three points $A$, $B$, and $C$ are not collinear.
- All input values are integers.

## Input

The input is given from Standard Input in the following format:

> $x_A$ $y_A$
> 
> $x_B$ $y_B$
> 
> $x_C$ $y_C$

## Output

Print `Yes` if the triangle $ABC$ is a right triangle, and `No` otherwise.

```input1
0 0
4 0
0 3
```

```output1
Yes
```

The triangle $ABC$ is a right triangle.

![](https://img.atcoder.jp/abc362/3f4a68afd7a43d159b7e7ef4cee6c646.png)

```input2
-4 3
2 1
3 4
```

```output2
Yes
```

The triangle $ABC$ is a right triangle.

![](https://img.atcoder.jp/abc362/092af99ccc22b9235a87bc2b5f53bfa3.png)

```input3
2 4
-3 2
1 -2
```

```output3
No
```

The triangle $ABC$ is not a right triangle.

![](https://img.atcoder.jp/abc362/f7fbb440279967aee94ef846562d4b0e.png)