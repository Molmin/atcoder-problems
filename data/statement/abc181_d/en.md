Score : $400$ points

## Problem Statement

Given is a digit sequence $S$ consisting of the digits from `1` through `9`.

Takahashi, the bee, loves multiples of $8$.

He is trying to make a multiple of $8$ by permuting the digit sequence $S$.

Determine whether it is possible.

## Constraints

- $1 \leq |S| \leq 2 \times 10^5$
- Each character of $S$ is one of the digits from `1` through `9`.

## Input

Input is given from Standard Input in the following format:

> $S$

## Output

If it is possible to make a multiple of $8$ by permuting the digit sequence $S$, print `Yes`; otherwise, print `No`.

```input1
1234
```

```output1
Yes
```

For example, permuting $1234$ into $1432$ results in a multiple of $8$.

```input2
1333
```

```output2
No
```

There is no way to permute $1333$ into a multiple of $8$.

```input3
8
```

```output3
Yes
```