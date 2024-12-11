Score : $800$ points

## Problem Statement

A triangle $ABC$ on the $xy$-plane is said to be a good triangle when it satisfies all of the following conditions.

- Each of the vertices $A$, $B$, and $C$ is a lattice point whose $x$- and $y$-coordinates are between $0$ and $10^{8}$, inclusive.
- The triangle $ABC$ (**including** the perimeter and vertices) wholly contains exactly one square of area $1$ whose vertices are all lattice points.

You are given a positive integer $S$.

Determine if there is a good triangle of area $\frac{S}{2}$, and construct one if it exists.

For each input file, you have $T$ test cases to solve.

## Constraints

- $1\leq T\leq 10^{5}$
- $1\leq S\leq 10^{8}$
- All input values are integers.

## Input

The input is given from Standard Input in the following format:

> $T$
> 
> $\text{case}_{1}$
> 
> $\text{case}_{2}$
> 
> $\vdots$
> 
> $\text{case}_{T}$

Each case is given in the following format:

> $S$

## Output

For each case, print `No` if there is no good triangle of area $\frac{S}{2}$, and such a triangle in the following format if there is one.

> Yes
> 
> $AX$ $AY$ $BX$ $BY$ $CX$ $CY$

Here, $AX$, $BX$, $CX$ are the $x$-coordinates of $A$, $B$, $C$, and $AY$, $BY$, $CY$ are the $y$-coordinates of $A$, $B$, $C$, respectively.

When printing `Yes` or `No`, you may use either uppercase or lowercase English letters.
If multiple solutions exist, any of them will be accepted.

```input1
3
1
4
15
```

```output1
No
Yes
1 1 1 3 3 3
Yes
5 1 7 8 4 5
```

![](https://img.atcoder.jp/arc167/d6986726412312ca9a6e022bc8e722ce.png)

In the figure, the left and right triangles correspond to the second and third test cases, respectively.