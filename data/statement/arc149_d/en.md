Score : $700$ points

## Problem Statement

There are $N$ pieces placed at integer coordinates on a number line. The coordinate of the $i$-th piece is $X_i$.

Let us move these pieces $M$ times as follows.

- In the $i$-th move, given a positive integer $D_i$, we move each piece as follows.-   - A piece whose coordinate is a negative integer is moved a distance of $D_i$ in the positive direction.
-   - A piece whose coordinate is $0$ is not moved.
-   - A piece whose coordinate is a positive integer is moved a distance of $D_i$ in the negative direction.

Determine whether each piece arrives at the origin. If it does, print the number of moves after which it arrives there for the first time. Otherwise, print its coordinate after the $M$ moves.

## Constraints

- $1\leq N\leq 3\times 10^5$
- $1\leq M\leq 3\times 10^5$
- $1\leq X_1 &lt; \cdots &lt; X_N \leq 10^6$
- $1\leq D_i \leq 10^6$

## Input

The input is given from Standard Input in the following format:

> $N$ $M$
> 
> $X_1$ $\ldots$ $X_N$
> 
> $D_1$ $\ldots$ $D_M$

## Output

Print $N$ lines. The $i$-th line should describe the $i$-th piece in the following format.

If the piece arrives at the origin, let $x$ be the number of moves after which it arrives there for the first time, and print the following:

> Yes $x$

If the piece does not arrive at the origin, let $x$ be its coordinate after the $M$ moves, and print the following:

> No $x$

```input1
6 4
2 4 6 8 10 12
8 2 5 7
```

```output1
No -6
No -4
Yes 2
Yes 1
Yes 2
No 4
```

The coordinate of each piece changes as follows.

- The $1$-st piece: $\phantom{0}2\quad \longmapsto \quad -6\quad \longmapsto \quad -4\quad \longmapsto \quad \phantom{-}1 \quad \longmapsto \quad -6$.
- The $2$-nd piece: $\phantom{0}4 \quad \longmapsto \quad -4\quad \longmapsto \quad -2 \quad \longmapsto \quad \phantom{-}3 \quad \longmapsto \quad -4$.
- The $3$-rd piece: $\phantom{0}6 \quad \longmapsto \quad -2\quad \longmapsto \quad \phantom{-}0 \quad \longmapsto \quad \phantom{-}0 \quad \longmapsto \quad \phantom{-}0$.
- The $4$-th piece: $\phantom{0}8 \quad \longmapsto \quad \phantom{-}0\quad \longmapsto \quad \phantom{-}0 \quad \longmapsto \quad \phantom{-}0 \quad \longmapsto \quad \phantom{-}0$.
- The $5$-th piece: $10 \quad \longmapsto \quad \phantom{-}2\quad \longmapsto \quad \phantom{-}0 \quad \longmapsto \quad \phantom{-}0 \quad \longmapsto \quad \phantom{-}0$.
- The $6$-th piece: $12 \quad \longmapsto \quad \phantom{-}4\quad \longmapsto \quad \phantom{-}2 \quad \longmapsto \quad -3 \quad \longmapsto \quad \phantom{-}4$.