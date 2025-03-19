Score: $100$ points

## Problem Statement

You are given a rooted tree with $N$ vertices. The vertices are numbered from $1$ to $N$, with vertex $1$ being the root. The $i$-th edge connects vertex $A_i$ and vertex $B_i$.

Assign a color to each vertex such that the following condition is satisfied:

- Let the color of vertex $i$ be $c_i$. For any three distinct vertices $u$, $v$, and $w$, if $w = \mathrm{lca}(u, v)$ and $c_u = c_v$, then $c_u \neq c_w$.

Find the minimum possible number of distinct colors used.

Here, $\mathrm{lca}(u, v)$ denotes the lowest common ancestor of vertices $u$ and $v$.

## Constraints

- All input values are integers.
- $3 \leq N \leq 2 \times 10^5$
- $1 \leq A_i, B_i \leq N$
- The input graph is a tree.

## Input

The input is given in the following format:

> $N$
> 
> $A_1$ $B_1$
> 
> $A_2$ $B_2$
> 
> $\vdots$
> 
> $A_{N-1}$ $B_{N-1}$

## Output

Print the minimum number of distinct colors required.

```input1
8
1 2
1 3
2 4
2 5
3 6
3 7
6 8
```

```output1
3
```

For example, the coloring shown below satisfies the given conditions.

Since there is no way to satisfy the conditions using two or fewer colors, the minimum number of colors needed is $3$.

![](https://img.atcoder.jp/ttpc2024_2/956692bccf77f0df9d83837f5a7e95cb.svg)

```input2
4
1 2
2 3
3 4
```

```output2
1
```