Score : $500$ points

## Problem Statement

We have a grid with $H$ horizontal rows and $W$ vertical columns of squares.
Square $(i,j)$, which is at the $i$-th row from the top and $j$-th column from the left, is *wall* if $S_{ij}$ is `#` and *road* if $S_{ij}$ is `.`.

There is a queen, the chess piece, at Square $(1, 1)$. In one move, it can move any number of squares to the right, downwards, or diagonally to the lower right to a road square without jumping over wall squares.

In how many ways can the queen travel from Square $(1, 1)$ to Square $(H, W)$? Find the count modulo $(10^9+7)$.

Here, two ways to travel are considered different if and only if there exists $i$ such that the position of the queen after the $i$-th move is different in those two ways.

## Constraints

- $2 \leq H,W \leq 2000$
- $S_{ij}$ is `#` or `.`.
- $S_{11}$ and $S_{HW}$ are `.`.

## Input

Input is given from Standard Input in the following format:

> $H$ $W$
> 
> $S_{11}\ldots S_{1W}$
> 
> $\vdots$
> 
> $S_{H1}\ldots S_{HW}$

## Output

Print the number of ways, modulo $(10^9+7)$, in which the queen can travel from Square $(1, 1)$ to Square $(H, W)$.

```input1
3 3
...
.#.
...
```

```output1
10
```

There are $10$ ways to travel, as follows:

- $(1,1)\to (1,2)\to (1,3)\to (2,3)\to (3,3)$
- $(1,1)\to (1,2)\to (1,3)\to (3,3)$
- $(1,1)\to (1,2)\to (2,3)\to (3,3)$
- $(1,1)\to (1,3)\to (2,3)\to (3,3)$
- $(1,1)\to (1,3)\to (3,3)$
- $(1,1)\to (2,1)\to (3,1)\to (3,2)\to (3,3)$
- $(1,1)\to (2,1)\to (3,1)\to (3,3)$
- $(1,1)\to (2,1)\to (3,2)\to (3,3)$
- $(1,1)\to (3,1)\to (3,2)\to (3,3)$
- $(1,1)\to (3,1)\to (3,3)$

```input2
4 4
...#
....
..#.
....
```

```output2
84
```

From $(1,1)$, the queen can move to $(1,2)$, $(1,3)$, $(2,1)$, $(2,2)$, $(3,1)$, or $(4,1)$.

One possible path to $(4,4)$ is $(1,1)\to (3,1)\to (3,2)\to (4,3)\to (4,4)$.

```input3
8 10
..........
..........
..........
..........
..........
..........
..........
..........
```

```output3
13701937
```

Find the count modulo $(10^9+7)$.