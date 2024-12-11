Score : $200$ points

## Problem Statement

From the point $(0,0)$ in a two-dimensional plane, let us move the distance of $1$ toward the point $(A, B)$. Find our coordinates after the move.

Here, after moving the distance of $d$ from a point $X$ to a point $Y$ ($d \le$ length of the segment $XY$), we are at the point on the segment $XY$ whose distance from $X$ is $d$.<br>
The Constraints guarantee that the distance between the points $(0, 0)$ and $(A, B)$ is at least $1$.

## Constraints

- All values in input are integers.
- $0 \le A,B \le 1000$
- $(A,B) \neq (0,0)$

## Input

Input is given from Standard Input in the following format:

> $A$ $B$

## Output

Let $(x, y)$ be our coordinates after the move. Print $x$ and $y$ in this order, separated by a space.<br>
Your output is considered correct when, for each printed value, the absolute or relative error from the judge's answer is at most $10^{ - 6}$.

```input1
3 4
```

```output1
0.600000000000 0.800000000000
```

Printing `0.5999999999 0.8000000001`, for example, would also be accepted.

```input2
1 0
```

```output2
1.000000000000 0.000000000000
```

We may arrive at $(A, B)$.

```input3
246 402
```

```output3
0.521964870245 0.852966983083
```