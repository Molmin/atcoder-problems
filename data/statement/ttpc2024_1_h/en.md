配点 : $100$ 点

## Problem Statement

A set of points $U$ in the $xy$-plane is called **good** if no point in $U$ lies in the **interior** of the convex hull of $U$. Note that the empty set is considered good.

You are given $N$ distinct points $v_1, v_2, \dots, v_N$ in the $xy$-plane. The coordinates of the point $v_i$ are $(x_i, y_i)$. No three distinct points are collinear.

Count the number of subsets $S$ of $V = \lbrace v_1, v_2, \dots, v_N \rbrace$ such that both $S$ and $V \setminus S$ are good sets.

## Constraints

- All input values are integers.
- $1 \le N \le 40$
- $|x_i|,|y_i|\le 10^6$
- $(x_i,y_i)\neq (x_j,y_j)\ (i\neq j)$
- No three distinct points are collinear.

## Input

The input is given in the following format:

> $N$
> 
> $x_1$ $y_1$
> 
> $x_2$ $y_2$
> 
> $\vdots$
> 
> $x_N$ $y_N$

## Output

Output the answer.

```input1
4
0 0
3 0
0 3
1 1
```

```output1
14
```

Except for $\emptyset$ and $V$, all other sets $S$ satisfy the condition.

```input2
8
1 0
2 0
3 1
3 2
2 3
1 3
0 2
0 1
```

```output2
256
```

```input3
10
0 0
1 1
7 1
1 7
3 2
2 3
4 2
2 4
5 4
4 5
```

```output3
0
```