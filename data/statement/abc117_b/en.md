Score : $200$ points

## Problem Statement

Determine if an $N$-sided polygon (not necessarily convex) with sides of length $L_1, L_2, ..., L_N$ can be drawn in a two-dimensional plane.

You can use the following theorem:

**Theorem**: an $N$-sided polygon satisfying the condition can be drawn if and only if the longest side is strictly shorter than the sum of the lengths of the other $N-1$ sides.

## Constraints

- All values in input are integers.
- $3 \leq N \leq 10$
- $1 \leq L_i \leq 100$

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $L_1$ $L_2$ $...$ $L_N$

## Output

If an $N$-sided polygon satisfying the condition can be drawn, print `Yes`; otherwise, print `No`.

```input1
4
3 8 5 1
```

```output1
Yes
```

Since $8 &lt; 9 = 3 + 5 + 1$, it follows from the theorem that such a polygon can be drawn on a plane.

```input2
4
3 8 4 1
```

```output2
No
```

Since $8 \geq 8 = 3 + 4 + 1$, it follows from the theorem that such a polygon cannot be drawn on a plane.

```input3
10
1 8 10 5 8 12 34 100 11 3
```

```output3
No
```