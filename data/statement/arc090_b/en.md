Score : $400$ points

## Problem Statement

There are $N$ people standing on the $x$-axis.
Let the coordinate of Person $i$ be $x_i$.
For every $i$, $x_i$ is an integer between $0$ and $10^9$ (inclusive).
It is possible that more than one person is standing at the same coordinate.

You will given $M$ pieces of information regarding the positions of these people.
The $i$-th piece of information has the form $(L_i, R_i, D_i)$.
This means that Person $R_i$ is to the right of Person $L_i$ by $D_i$ units of distance, that is, $x_{R_i} - x_{L_i} = D_i$ holds.

It turns out that some of these $M$ pieces of information may be incorrect.
Determine if there exists a set of values $(x_1, x_2, ..., x_N)$ that is consistent with the given pieces of information.

## Constraints

- $1 \leq N \leq 100$ $000$
- $0 \leq M \leq 200$ $000$
- $1 \leq L_i, R_i \leq N$ ($1 \leq i \leq M$)
- $0 \leq D_i \leq 10$ $000$ ($1 \leq i \leq M$)
- $L_i \neq R_i$ ($1 \leq i \leq M$)
- If $i \neq j$, then $(L_i, R_i) \neq (L_j, R_j)$ and $(L_i, R_i) \neq (R_j, L_j)$.
- $D_i$ are integers.

## Input

Input is given from Standard Input in the following format:

> $N$ $M$
> 
> $L_1$ $R_1$ $D_1$
> 
> $L_2$ $R_2$ $D_2$
> 
> $:$
> 
> $L_M$ $R_M$ $D_M$

## Output

If there exists a set of values $(x_1, x_2, ..., x_N)$ that is consistent with all given pieces of information, print `Yes`; if it does not exist, print `No`.

```input1
3 3
1 2 1
2 3 1
1 3 2
```

```output1
Yes
```

Some possible sets of values $(x_1, x_2, x_3)$ are $(0, 1, 2)$ and $(101, 102, 103)$.

```input2
3 3
1 2 1
2 3 1
1 3 5
```

```output2
No
```

If the first two pieces of information are correct, $x_3 - x_1 = 2$ holds, which is contradictory to the last piece of information.

```input3
4 3
2 1 1
2 3 5
3 4 2
```

```output3
Yes
```

```input4
10 3
8 7 100
7 9 100
9 8 100
```

```output4
No
```

```input5
100 0
```

```output5
Yes
```