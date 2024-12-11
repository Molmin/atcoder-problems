Score : $300$ points

## Problem Statement

Given is a positive integer $L$.
Find the maximum possible volume of a rectangular cuboid whose sum of the dimensions (not necessarily integers) is $L$.

## Constraints

- $1 \leq L \leq 1000$
- $L$ is an integer.

## Input

Input is given from Standard Input in the following format:

> $L$

## Output

Print the maximum possible volume of a rectangular cuboid whose sum of the dimensions (not necessarily integers) is $L$.
Your output is considered correct if its absolute or relative error from our answer is at most $10^{-6}$.

```input1
3
```

```output1
1.000000000000
```

For example, a rectangular cuboid whose dimensions are $0.8$, $1$, and $1.2$ has a volume of $0.96$.

On the other hand, if the dimensions are $1$, $1$, and $1$, the volume of the rectangular cuboid is $1$, which is greater.

```input2
999
```

```output2
36926037.000000000000
```