Score : $400$ points

## Problem Statement

You are given a sequence $A = (A_1, A_2, \dots, A_N)$ of length $N$ consisting of positive integers, and integers $x$ and $y$.<br>
Determine whether it is possible to place $N+1$ points $p_1, p_2, \dots, p_N, p_{N+1}$ in the $xy$-coordinate plane to satisfy all of the following conditions. (It is allowed to place two or more points at the same coordinates.)

- $p_1 = (0, 0)$.
- $p_2 = (A_1, 0)$.
- $p_{N+1} = (x, y)$.
- The distance between the points $p_i$ and $p_{i+1}$ is $A_i$. ($1 \leq i \leq N$)
- The segments $p_i p_{i+1}$ and $p_{i+1} p_{i+2}$ form a $90$ degree angle. ($1 \leq i \leq N - 1$)

## Constraints

- $2 \leq N \leq 10^3$
- $1 \leq A_i \leq 10$
- $|x|, |y| \leq 10^4$
- All values in the input are integers.

## Input

The input is given from Standard Input in the following format:

> $N$ $x$ $y$
> 
> $A_1$ $A_2$ $\dots$ $A_N$

## Output

If it is possible to place $p_1, p_2, \dots, p_N, p_{N+1}$ to satisfy all of the conditions in the Problem Statement, print `Yes`; otherwise, print `No`.

```input1
3 -1 1
2 1 3
```

```output1
Yes
```

The figure below shows a placement where $p_1 = (0, 0)$, $p_2 = (2, 0)$, $p_3 = (2, 1)$, and $p_4 = (-1, 1)$. All conditions in the Problem Statement are satisfied.

![](https://img.atcoder.jp/ghi/9e66a2e8cd081f011d3baba22dbe64fa.jpg)

```input2
5 2 0
2 2 2 2 2
```

```output2
Yes
```

Letting $p_1 = (0, 0)$, $p_2 = (2, 0)$, $p_3 = (2, 2)$, $p_4 = (0, 2)$, $p_5 = (0, 0)$, and $p_6 = (2, 0)$ satisfies all the conditions. Note that multiple points may be placed at the same coordinates.

```input3
4 5 5
1 2 3 4
```

```output3
No
```

```input4
3 2 7
2 7 4
```

```output4
No
```

```input5
10 8 -7
6 10 4 1 5 9 8 6 5 1
```

```output5
Yes
```