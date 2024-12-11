Score : $400$ points

## Problem Statement

Given is a string $S$ consisting of digits from `1` through `9`.

Find the number of pairs of integers $(i,j)$ ($1 \leq i \leq j \leq |S|$) that satisfy the following condition:

Condition: In base ten, the $i$-th through $j$-th characters of $S$ form an integer that is a multiple of $2019$.

## Constraints

- $1 \leq |S| \leq 200000$
- $S$ is a string consisting of digits from `1` through `9`.

## Input

Input is given from Standard Input in the following format:

> $S$

## Output

Print the number of pairs of integers $(i,j)$ ($1 \leq i \leq j \leq |S|$) that satisfy the condition.

```input1
1817181712114
```

```output1
3
```

Three pairs - $(1,5)$, $(5,9)$, and $(9,13)$ - satisfy the condition.

```input2
14282668646
```

```output2
2
```

```input3
2119
```

```output3
0
```

No pairs satisfy the condition.