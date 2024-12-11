Score : $1000$ points

## Problem Statement

Inspired by the tv series *Stranger Things*, bear Limak is going for a walk between two mirror worlds.

There are two perfect binary trees of height $H$,
    each with the standard numeration of vertices from $1$ to $2^H-1$.
The root is $1$ and the children of $x$ are $2 \cdot x$ and $2 \cdot x + 1$.

Let $L$ denote the number of leaves in a single tree, $L = 2^{H-1}$.

You are given a permutation $P_1, P_2, \ldots, P_L$ of numbers $1$ through $L$.
It describes $L$ *special* edges that connect leaves of the two trees.
There is a special edge between vertex $L+i-1$ in the first tree and vertex $L+P_i-1$ in the second tree.

![graph for sample1](https://img.atcoder.jp/agc047/nice_wide_example.png)

*drawing for the first sample test, permutation $P = (2, 3, 1, 4)$, special edges in green*

Let's define *product* of a cycle as the product of numbers in its vertices.
Compute the sum of products of all simple cycles that have **exactly two special edges**, modulo $(10^9+7)$.

A simple cycle is a cycle of length at least 3, without repeated vertices or edges.

## Constraints

- $2 \leq H \leq 18$
- $1 \leq P_i \leq L$ where $L = 2^{H-1}$
- $P_i \neq P_j$ (so this is a permutation)

## Input

Input is given from Standard Input in the following format (where $L = 2^{H-1}$).

> $H$
> 
> $P_1$ $P_2$ $\cdots$ $P_L$

## Output

Compute the sum of products of simple cycles that have exactly two special edges.
Print the answer modulo $(10^9+7)$.

```input1
3
2 3 1 4
```

```output1
121788
```

The following drawings show two valid cycles (but there are more!) with products
    $2 \cdot 5 \cdot 6 \cdot 3 \cdot 1 \cdot 2 \cdot 5 \cdot 4 = 7200$
    and $1 \cdot 3 \cdot 7 \cdot 7 \cdot 3 \cdot 1 \cdot 2 \cdot 5 \cdot 4 \cdot 2 = 35280$.
The third cycle is invalid because it doesn't have exactly two special edges.

![three cycles](https://img.atcoder.jp/agc047/3_trees_font.png)

```input2
2
1 2
```

```output2
36
```

The only simple cycle in the graph indeed has two special edges, and the product of vertices is
    $1 \cdot 3 \cdot 3 \cdot 1 \cdot 2 \cdot 2 = 36$.

```input3
5
6 14 15 7 12 16 5 4 11 9 3 10 8 2 13 1
```

```output3
10199246
```