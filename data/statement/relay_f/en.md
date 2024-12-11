Score : $100$ points

## Problem Statement

We have a cord whose length is a positive integer. We will perform the following condition until the length of the cord becomes at most $2$:

- Operation:
  Cut the rope at two positions to obtain three cords, each with a length of a positive integer.
  Among these, discard one with the longest length and one with the shortest length, and keep the remaining one.

Let $f(N)$ be the maximum possible number of times to perform this operation, starting with a cord with the length $N$.

You are given a positive integer $X$. Find the maximum integer $N$ such that $f(N)=X$.

## Constraints

- $1 \leq X \leq 40$

## Input

The input is given from Standard Input in the following format:

> $X$

## Output

Print the value of the maximum integer $N$ such that $f(N)=X$.

```input1
2
```

```output1
14
```