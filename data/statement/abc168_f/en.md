Score: $600$ points

## Problem Statement

There is a grass field that stretches infinitely.

In this field, there is a negligibly small cow. Let $(x, y)$ denote the point that is $x\ \mathrm{cm}$ south and $y\ \mathrm{cm}$ east of the point where the cow stands now. The cow itself is standing at $(0, 0)$.

There are also $N$ north-south lines and $M$ east-west lines drawn on the field. The $i$-th north-south line is the segment connecting the points $(A_i, C_i)$ and $(B_i, C_i)$, and the $j$-th east-west line is the segment connecting the points $(D_j, E_j)$ and $(D_j, F_j)$.

What is the area of the region the cow can reach when it can move around as long as it does not cross the segments (including the endpoints)? If this area is infinite, print `INF` instead.

## Constraints

- All values in input are integers between $-10^9$ and $10^9$  (inclusive).
- $1 \leq N, M \leq 1000$
- $A_i &lt; B_i\ (1 \leq i \leq N)$
- $E_j &lt; F_j\ (1 \leq j \leq M)$
- The point $(0, 0)$ does not lie on any of the given segments.

## Input

Input is given from Standard Input in the following format:

> $N$ $M$
> 
> $A_1$ $B_1$ $C_1$
> 
> $:$
> 
> $A_N$ $B_N$ $C_N$
> 
> $D_1$ $E_1$ $F_1$
> 
> $:$
> 
> $D_M$ $E_M$ $F_M$

## Output

If the area of the region the cow can reach is infinite, print `INF`; otherwise, print an integer representing the area in $\mathrm{cm^2}$.

(Under the constraints, it can be proved that the area of the region is always an integer if it is not infinite.)

```input1
5 6
1 2 0
0 1 1
0 2 2
-3 4 -1
-2 6 3
1 0 1
0 1 2
2 0 2
-1 -4 5
3 -2 4
1 2 4
```

```output1
13
```

The area of the region the cow can reach is $13\ \mathrm{cm^2}$.

![Sample 1](https://img.atcoder.jp/abc168/education.png)

```input2
6 1
-3 -1 -2
-3 -1 1
-2 -1 2
1 4 -2
1 4 -1
1 4 1
3 1 4
```

```output2
INF
```

The area of the region the cow can reach is infinite.