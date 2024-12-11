Score : $500$ points

## Problem Statement

We have a grid with $H$ rows from top to bottom and $W$ columns from left to right. Let $(i, j)$ denote the $i$-th row from the top $(1 \leq i \leq H)$ and $j$-th column from the left $(1 \leq j \leq W)$.

Each square is one of the following: the initial point, a road, and an obstacle.<br>
A square $(i, j)$ is represented by a character $C_{i, j}$. The square is the initial point if $C_{i, j} =$ `S`, a road if $C_{i, j} =$ `.`, and an obstacle if $C_{i, j} =$ `#`. There is exactly one initial point.

Determine whether there is a path of length $4$ or greater that starts at the initial point, repeats moving vertically or horizontally to an adjacent square, and returns to the initial point without going through an obstacle or visiting the same square multiple times except at the beginning and the end.<br>
More formally, determine whether there are an integer $n$ and a sequence of squares $(x_0, y_0), (x_1, y_1), \dots, (x_n, y_n)$ that satisfy the following conditions.

- $n \geq 4$.
- $C_{x_0, y_0} = C_{x_n, y_n} =$ `S`.
- If $1 \leq i \leq n - 1$, then $C_{x_i, y_i} =$ `.`.
- If $1 \leq i \lt j \leq n - 1$, then $(x_i, y_i) \neq (x_j, y_j)$.
- If $0 \leq i \leq n - 1$, then square $(x_i, y_i)$ and square $(x_{i+1}, y_{i+1})$ are vertically or horizontally adjacent to each other.

## Constraints

- $4 \leq H \times W \leq 10^6$
- $H$ and $W$ are integers greater than or equal to $2$.
- $C_{i, j}$ is `S`, `.`, or `#`.
- There is exactly one $(i, j)$ such that $C_{i, j} =$ `S`.

## Input

The input is given from Standard Input in the following format:

> $H$ $W$
> 
> $C_{1, 1} \ldots C_{1, W}$
> 
> $\vdots$
> 
> $C_{H, 1} \ldots C_{H, W}$

## Output

If there is a path that satisfies the conditions in the Problem Statement, print `Yes`; otherwise, print `No`.

```input1
4 4
....
#.#.
.S..
.##.
```

```output1
Yes
```

The path $(3, 2) \rightarrow (2, 2) \rightarrow (1, 2) \rightarrow (1, 3) \rightarrow (1, 4) \rightarrow (2, 4) \rightarrow (3, 4) \rightarrow (3, 3) \rightarrow (3, 2)$ satisfies the conditions.

```input2
2 2
S.
.#
```

```output2
No
```

```input3
5 7
.#...#.
..#.#..
...S...
..#.#..
.#...#.
```

```output3
No
```