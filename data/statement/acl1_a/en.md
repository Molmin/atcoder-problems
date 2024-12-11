Score : $300$ points

## Problem Statement

There are $N$ cities on a 2D plane. The coordinate of the $i$-th city is $(x_i, y_i)$. Here $(x_1, x_2, \dots, x_N)$ and $(y_1, y_2, \dots, y_N)$ are both permuations of $(1, 2, \dots, N)$.

For each $k = 1,2,\dots,N$, find the answer to the following question:

Rng is in City $k$.
Rng can perform the following move arbitrarily many times:

- move to another city that has a smaller $x$-coordinate and a smaller $y$-coordinate, or a larger $x$-coordinate and a larger $y$-coordinate, than the city he is currently in.

How many cities (including City $k$) are reachable from City $k$?

## Constraints

- $1 \leq N \leq 200,000$
- $(x_1, x_2, \dots, x_N)$ is a permutation of $(1, 2, \dots, N)$.
- $(y_1, y_2, \dots, y_N)$ is a permutation of $(1, 2, \dots, N)$.
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $x_1$ $y_1$
> 
> $x_2$ $y_2$
> 
> $:$
> 
> $x_N$ $y_N$

## Output

Print $N$ lines. In $i$-th line print the answer to the question when $k = i$.

```input1
4
1 4
2 3
3 1
4 2
``````output1
1
1
2
2
```

Rng can reach City $4$ from City $3$, or conversely City $3$ from City $4$.

```input2
7
6 4
4 3
3 5
7 1
2 7
5 2
1 6
``````output2
3
3
1
1
2
3
2
```