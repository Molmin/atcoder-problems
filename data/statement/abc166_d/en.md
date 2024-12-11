Score : $400$ points

## Problem Statement

Give a pair of integers $(A, B)$ such that $A^5-B^5 = X$.
It is guaranteed that there exists such a pair for the given integer $X$.

## Constraints

- $1 \leq X \leq 10^9$
- $X$ is an integer.
- There exists a pair of integers $(A, B)$ satisfying the condition in Problem Statement.

## Input

Input is given from Standard Input in the following format:

> $X$

## Output

Print $A$ and $B$, with space in between.
If there are multiple pairs of integers $(A, B)$ satisfying the condition, you may print any of them.

> $A$ $B$

```input1
33
```

```output1
2 -1
```

For $A=2$ and $B=-1$, $A^5-B^5 = 33$.

```input2
1
```

```output2
0 -1
```