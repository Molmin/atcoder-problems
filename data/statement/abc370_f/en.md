Score : $575$ points

## Problem Statement

There is a circular cake divided into $N$ pieces by cut lines. Each cut line is a line segment connecting the center of the circle to a point on the arc.

The pieces and cut lines are numbered $1, 2, \ldots, N$ in clockwise order, and piece $i$ has a mass of $A_i$. Piece $1$ is also called piece $N + 1$.

Cut line $i$ is between pieces $i$ and $i + 1$, and they are arranged clockwise in this order: piece $1$, cut line $1$, piece $2$, cut line $2$, $\ldots$, piece $N$, cut line $N$.

We want to divide this cake among $K$ people under the following conditions. Let $w_i$ be the sum of the masses of the pieces received by the $i$-th person.

- Each person receives one or more **consecutive** pieces.
- There are no pieces that no one receives.
- Under the above two conditions, $\min(w_1, w_2, \ldots, w_K)$ is maximized.

Find the value of $\min(w_1, w_2, \ldots, w_K)$ in a division that satisfies the conditions, and the number of cut lines that are never cut in the divisions that satisfy the conditions. Here, cut line $i$ is considered cut if pieces $i$ and $i + 1$ are given to different people.

## Constraints

- $2 \leq K \leq N \leq 2 \times 10^5$
- $1 \leq A_i \leq 10^4$
- All input values are integers.

## Input

The input is given from Standard Input in the following format:

> $N$ $K$
> 
> $A_1$ $A_2$ $\ldots$ $A_N$

## Output

Let $x$ be the value of $\min(w_1, w_2, \ldots, w_K)$ in a division that satisfies the conditions, and $y$ be the number of cut lines that are never cut. Print $x$ and $y$ in this order, separated by a space.

```input1
5 2
3 6 8 6 4
```

```output1
13 1
```

The following divisions satisfy the conditions:

- Give pieces $2, 3$ to one person and pieces $4, 5, 1$ to the other. Pieces $2, 3$ have a total mass of $14$, and pieces $4, 5, 1$ have a total mass of $13$.
- Give pieces $3, 4$ to one person and pieces $5, 1, 2$ to the other. Pieces $3, 4$ have a total mass of $14$, and pieces $5, 1, 2$ have a total mass of $13$.

The value of $\min(w_1, w_2)$ in divisions satisfying the conditions is $13$, and there is one cut line that is not cut in either division: cut line $5$.

```input2
6 3
4 7 11 3 9 2
```

```output2
11 1
```

```input3
10 3
2 9 8 1 7 9 1 3 5 8
```

```output3
17 4
```