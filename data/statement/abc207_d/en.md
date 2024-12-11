Score : $400$ points

## Problem Statement

You are given two sets $S=\{(a_1,b_1),(a_2,b_2),\ldots,(a_N,b_N)\}$ and $T=\{(c_1,d_1),(c_2,d_2),\ldots,(c_N,d_N)\}$ of $N$ points each on a two-dimensional plane.

Determine whether it is possible to do the following operations on $S$ any number of times (possibly zero) in any order so that $S$ matches $T$.

- Choose a real number $p\ (0 \lt p \lt 360)$ and rotate every point in $S$ $p$ degrees clockwise about the origin.
- Choose real numbers $q$ and $r$ and move every point in $S$ by $q$ in the $x$-direction and by $r$ in the $y$-direction. Here, $q$ and $r$ can be any real numbers, be it positive, negative, or zero.

## Constraints

- $1 \leq N \leq 100$
- $-10 \leq a_i,b_i,c_i,d_i \leq 10$
- $(a_i,b_i) \neq (a_j,b_j)$ if $i \neq j$.
- $(c_i,d_i) \neq (c_j,d_j)$ if $i \neq j$.
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $a_1$ $b_1$
> 
> $a_2$ $b_2$
> 
> $\hspace{0.6cm}\vdots$
> 
> $a_N$ $b_N$
> 
> $c_1$ $d_1$
> 
> $c_2$ $d_2$
> 
> $\hspace{0.6cm}\vdots$
> 
> $c_N$ $d_N$

## Output

If we can match $S$ with $T$, print `Yes`; otherwise, print `No`.

```input1
3
0 0
0 1
1 0
2 0
3 0
3 1
```

```output1
Yes
```

The figure below shows the given sets of points, where the points in $S$ and $T$ are painted red and green, respectively:

![](https://img.atcoder.jp/ghi/39ad67d4e10490f509f252a1f0e4935b.png)

In this case, we can match $S$ with $T$ as follows:

1. Rotate every point in $S$ $270$ degrees clockwise about the origin.
2. Move every point in $S$ by $3$ in the $x$-direction and by $0$ in the $y$-direction.

```input2
3
1 0
1 1
3 0
-1 0
-1 1
-3 0
```

```output2
No
```

The figure below shows the given sets of points:

![](https://img.atcoder.jp/ghi/02c4ca4a8329110dc131b37720283d2a.png)

Although $S$ and $T$ are symmetric about the $y$-axis, we cannot match $S$ with $T$ by rotations and translations as stated in Problem Statement.

```input3
4
0 0
2 9
10 -2
-6 -7
0 0
2 9
10 -2
-6 -7
```

```output3
Yes
```

```input4
6
10 5
-9 3
1 -5
-6 -5
6 9
-9 0
-7 -10
-10 -5
5 4
9 0
0 -10
-10 -2
```

```output4
Yes
```