Score : $2000$ points

## Problem Statement

You are given an $H \times W$ grid.
The square at the top-left corner will be represented by $(0, 0)$, and the square at the bottom-right corner will be represented by $(H-1, W-1)$.

Of those squares, $N$ squares $(x_1, y_1), (x_2, y_2), ..., (x_N, y_N)$ are painted black, and the other squares are painted white.

Let the shortest distance between white squares $A$ and $B$ be the minimum number of moves required to reach $B$ from $A$ **visiting only white squares**, where one can travel to an adjacent square sharing a side (up, down, left or right) in one move.

Since there are $H \times W - N$ white squares in total, there are $_{(H \times W-N)}C_2$ ways to choose two of the white squares.

For each of these $_{(H \times W-N)}C_2$ ways, find the shortest distance between the chosen squares, then find the sum of all those distances, modulo $1$ $000$ $000$ $007=10^9+7$.

## Constraints

- $1 \leq H, W \leq 10^6$
- $1 \leq N \leq 30$
- $0 \leq x_i \leq H-1$
- $0 \leq y_i \leq W-1$
- If $i \neq j$, then either $x_i \neq x_j$ or $y_i \neq y_j$.
- There is at least one white square.
- For every pair of white squares $A$ and $B$, it is possible to reach $B$ from $A$ visiting only white squares.

## Input

Input is given from Standard Input in the following format:

> $H$ $W$
> 
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

Print the sum of the shortest distances, modulo $10^9+7$.

```input1
2 3
1
1 1
```

```output1
20
```

We have the following grid (`.`: a white square, `#`: a black square).

```output1
...
.#.
```

Let us assign a letter to each white square as follows:

```output1
ABC
D#E
```

Then, we have:

- dist(A, B) = $1$
- dist(A, C) = $2$
- dist(A, D) = $1$
- dist(A, E) = $3$
- dist(B, C) = $1$
- dist(B, D) = $2$
- dist(B, E) = $2$
- dist(C, D) = $3$
- dist(C, E) = $1$
- dist(D, E) = $4$

where dist(A, B) is the shortest distance between A and B. The sum of these distances is $20$.

```input2
2 3
1
1 2
```

```output2
16
```

Let us assign a letter to each white square as follows:

```output2
ABC
DE#
```

Then, we have:

- dist(A, B) = $1$
- dist(A, C) = $2$
- dist(A, D) = $1$
- dist(A, E) = $2$
- dist(B, C) = $1$
- dist(B, D) = $2$
- dist(B, E) = $1$
- dist(C, D) = $3$
- dist(C, E) = $2$
- dist(D, E) = $1$

The sum of these distances is $16$.

```input3
3 3
1
1 1
```

```output3
64
```

```input4
4 4
4
0 1
1 1
2 1
2 2
```

```output4
268
```

```input5
1000000 1000000
1
0 0
```

```output5
333211937
```