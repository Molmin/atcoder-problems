Score : $400$ points

## Problem Statement

Given is a string $S$ consisting of `X` and `.`.

You can do the following operation on $S$ between $0$ and $K$ times (inclusive).

- Replace a `.` with an `X`.

What is the maximum possible number of consecutive `X`s in $S$ after the operations?

## Constraints

- $1 \leq |S| \leq 2 \times 10^5$
- Each character of $S$ is `X` or `.`.
- $0 \leq K \leq 2 \times 10^5$
- $K$ is an integer.

## Input

Input is given from Standard Input in the following format:

> $S$
> 
> $K$

## Output

Print the answer.

```input1
XX...X.X.X.
2
```

```output1
5
```

After replacing the `X`s at the $7$-th and $9$-th positions with `X`, we have `XX...XXXXX.`, which has five consecutive `X`s at $6$-th through $10$-th positions.<br>
We cannot have six or more consecutive `X`s, so the answer is $5$.

```input2
XXXX
200000
```

```output2
4
```

It is allowed to do zero operations.