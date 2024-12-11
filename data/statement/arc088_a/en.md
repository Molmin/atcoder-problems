Score : $300$ points

## Problem Statement

As a token of his gratitude, Takahashi has decided to give his mother an integer sequence.
The sequence $A$ needs to satisfy the conditions below:

- $A$ consists of integers between $X$ and $Y$ (inclusive).
- For each $1\leq i \leq |A|-1$, $A_{i+1}$ is a multiple of $A_i$ and strictly greater than $A_i$.

Find the maximum possible length of the sequence.

## Constraints

- $1 \leq X \leq Y \leq 10^{18}$
- All input values are integers.

## Input

Input is given from Standard Input in the following format:

> $X$ $Y$

## Output

Print the maximum possible length of the sequence.

```input1
3 20
```

```output1
3
```

The sequence $3,6,18$ satisfies the conditions.

```input2
25 100
```

```output2
3
```

```input3
314159265 358979323846264338
```

```output3
31
```