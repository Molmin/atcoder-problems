Score : $200$ points

## Problem Statement

There are $N$ balls placed in a row.
AtCoDeer the deer is painting each of these in one of the $K$ colors of his paint cans.
For aesthetic reasons, any two adjacent balls must be painted in different colors.

Find the number of the possible ways to paint the balls.

## Constraints

- $1 \leq N \leq 1000$
- $2 \leq K \leq 1000$
- The correct answer is at most $2^{31}-1$.

## Input

The input is given from Standard Input in the following format:

> $N$ $K$

## Output

Print the number of the possible ways to paint the balls.

```input1
2 2
```

```output1
2
```

We will denote the colors by $0$ and $1$. There are two possible ways: we can either paint the left ball in color $0$ and the right ball in color $1$, or paint the left in color $1$ and the right in color $0$.

```input2
1 10
```

```output2
10
```

Since there is only one ball, we can use any of the ten colors to paint it. Thus, the answer is ten.