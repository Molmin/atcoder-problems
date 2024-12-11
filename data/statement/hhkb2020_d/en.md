Score : $400$ points

## Problem Statement

Given are integers $N$, $A$, and $B$.

We will place a white square whose side is of length $N$ on the coordinate plane so that the vertices are at $(0, 0)$, $(N, 0)$, $(0, N)$, and $(N, N)$.

Then, we will place a blue square whose side is of length $A$ and a red square whose side is of length $B$ so that these squares are inside the white square (including its boundary).

Here, each side of these squares must be parallel to the $x$- or $y$-axis.

Additionally, each vertex of red and blue squares must be at an integer point.

Find the number of ways to place red and blue squares so that they do not strictly overlap (they may share boundary with each other), modulo $1,000,000,007$.

Solve this problem for $T$ test cases in each input file.

## Constraints

- $1 \leq T \leq 10^5$
- $1 \leq N \leq 10^9$
- $1 \leq A \leq N$
- $1 \leq B \leq N$
- All values in input are integers.

## Input

Input is given from Standard Input as follows. The first line of input is in the format below:

> $T$

Then, $T$ test cases follow, each of which is in the format below:

> $N$ $A$ $B$

## Output

For each test case, print the number of ways to place red and blue squares so that they do not strictly overlap, modulo $1,000,000,007$.
Use one line for each test case.

```input1
3
3 1 2
4 2 2
331895368 154715807 13941326
```

```output1
20
32
409369707
```

For example, in the first test case, there are $9$ ways to place the blue squares and $4$ ways to place the red squares, ignoring overlap.

Wherever we place the red square, there are $4$ ways to place the blue square so that it strictly overlaps with the red square.

Thus, there are $9 \times 4 - 4 \times 4 = 20$ ways to place red and blue squares so that they do not strictly overlap.

Note that the squares may share boundary with each other. For example, when the bottom-left vertices of blue and red squares are $(0, 0)$ and $(0, 1)$, respectively, the squares do not strictly overlap.