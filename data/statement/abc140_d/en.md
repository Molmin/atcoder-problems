Score : $400$ points

## Problem Statement

There are $N$ people standing in a queue from west to east.

Given is a string $S$ of length $N$ representing the directions of the people.
The $i$-th person from the west is facing west if the $i$-th character of $S$ is `L`, and east if that character of $S$ is `R`.

A person is happy if the person in front of him/her is facing the same direction.
If no person is standing in front of a person, however, he/she is not happy.

You can perform the following operation any number of times between $0$ and $K$ (inclusive):

Operation: Choose integers $l$ and $r$ such that $1 \leq l \leq r \leq N$, and rotate by $180$ degrees the part of the queue: the $l$-th, $(l+1)$-th, $...$, $r$-th persons. That is, for each $i = 0, 1, ..., r-l$, the $(l + i)$-th person from the west will stand the $(r - i)$-th from the west after the operation, facing east if he/she is facing west now, and vice versa.

What is the maximum possible number of happy people you can have?

## Constraints

- $N$ is an integer satisfying $1 \leq N \leq 10^5$.
- $K$ is an integer satisfying $1 \leq K \leq 10^5$.
- $|S| = N$
- Each character of $S$ is `L` or `R`.

## Input

Input is given from Standard Input in the following format:

> $N$ $K$
> 
> $S$

## Output

Print the maximum possible number of happy people after at most $K$ operations.

```input1
6 1
LRLRRL
```

```output1
3
```

If we choose $(l, r) = (2, 5)$, we have `LLLRLL`, where the $2$-nd, $3$-rd, and $6$-th persons from the west are happy.

```input2
13 3
LRRLRLRRLRLLR
```

```output2
9
```

```input3
10 1
LLLLLRRRRR
```

```output3
9
```

```input4
9 2
RRRLRLRLL
```

```output4
7
```