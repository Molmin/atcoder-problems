Score : $600$ points

## Problem Statement

We have a set $S$ of $N$ points in a two-dimensional plane. The coordinates of the $i$-th point are $(x_i, y_i)$. The $N$ points have distinct $x$-coordinates and distinct $y$-coordinates.

For a non-empty subset $T$ of $S$, let $f(T)$ be the number of points contained in the smallest rectangle, whose sides are parallel to the coordinate axes, that contains all the points in $T$. More formally, we define $f(T)$ as follows:

- $f(T) :=$ (the number of integers $i$ $(1 \leq i \leq N)$ such that $a \leq x_i \leq b$ and $c \leq y_i \leq d$, where $a$, $b$, $c$, and $d$ are the minimum $x$-coordinate, the maximum $x$-coordinate, the minimum $y$-coordinate, and the maximum $y$-coordinate of the points in $T$)

Find the sum of $f(T)$ over all non-empty subset $T$ of $S$. Since it can be enormous, print the sum modulo $998244353$.

## Constraints

- $1 \leq N \leq 2 \times 10^5$
- $-10^9 \leq x_i, y_i \leq 10^9$
- $x_i \neq x_j (i \neq j)$
- $y_i \neq y_j (i \neq j)$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $x_1$ $y_1$
> 
> $:$
> 
> $x_N$ $y_N$

## Output

Print the sum of $f(T)$ over all non-empty subset $T$ of $S$, modulo $998244353$.

```input1
3
-1 3
2 1
3 -2
```

```output1
13
```

Let the first, second, and third points be $P_1$, $P_2$, and $P_3$, respectively. $S = \{P_1, P_2, P_3\}$ has seven non-empty subsets, and $f$ has the following values for each of them:

- $f(\{P_1\}) = 1$
- $f(\{P_2\}) = 1$
- $f(\{P_3\}) = 1$
- $f(\{P_1, P_2\}) = 2$
- $f(\{P_2, P_3\}) = 2$
- $f(\{P_3, P_1\}) = 3$
- $f(\{P_1, P_2, P_3\}) = 3$

The sum of these is $13$.

```input2
4
1 4
2 1
3 3
4 2
```

```output2
34
```

```input3
10
19 -11
-3 -12
5 3
3 -15
8 -14
-9 -20
10 -9
0 2
-7 17
6 -6
```

```output3
7222
```

Be sure to print the sum modulo $998244353$.