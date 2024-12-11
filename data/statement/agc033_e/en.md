Score : $1500$ points

## Problem Statement

Consider a circle whose perimeter is divided by $N$ points into $N$ arcs of equal length, and each of the arcs is painted red or blue. Such a circle is said to *generate a string $S$ from every point* when the following condition is satisfied:

- We will arbitrarily choose one of the $N$ points on the perimeter and place a piece on it.
- Then, we will perform the following move $M$ times: move the piece clockwise or counter-clockwise to an adjacent point.
- Here, whatever point we choose initially, it is always possible to move the piece so that the color of the $i$-th arc the piece goes along is $S_i$, by properly deciding the directions of the moves.

Assume that, if $S_i$ is `R`, it represents red; if $S_i$ is `B`, it represents blue.
Note that the directions of the moves can be decided separately for each choice of the initial point.

You are given a string $S$ of length $M$ consisting of `R` and `B`.
Out of the $2^N$ ways to paint each of the arcs red or blue in a circle whose perimeter is divided into $N$ arcs of equal length, find the number of ways resulting in a circle that generates $S$ from every point, modulo $10^9+7$.

Note that the rotations of the same coloring are also distinguished.

## Constraints

- $2 \leq N \leq 2 \times 10^5$
- $1 \leq M \leq 2 \times 10^5$
- $|S|=M$
- $S_i$ is `R` or `B`.

## Input

Input is given from Standard Input in the following format:

> $N$ $M$
> 
> $S$

## Output

Print the number of ways to paint each of the arcs that satisfy the condition, modulo $10^9+7$.

```input1
4 7
RBRRBRR
```

```output1
2
```

The condition is satisfied only if the arcs are alternately painted red and blue, so the answer here is $2$.

```input2
3 3
BBB
```

```output2
4
```

```input3
12 10
RRRRBRRRRB
```

```output3
78
```