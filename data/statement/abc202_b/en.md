Score : $200$ points

## Problem Statement

You are given a string $S$ consisting of `0`, `1`, `6`, `8`, and `9`.

Rotate $S$ $180$ degrees and print the result. In other words, apply the following operations on $S$ and print the resulting string:

- Reverse $S$.
- Replace each `0` with a `0`, each `1` with a `1`, each `6` with a `9`, each `8` with an `8`, and each `9` with a `6`.

## Constraints

- $1 \leq |S| \leq 10^5$
- $S$ consists of `0`, `1`, `6`, `8`, and `9`.

## Input

Input is given from Standard Input in the following format:

> $S$

## Output

Print the result of rotating $S$ $180$ degrees.

```input1
0601889
```

```output1
6881090
```

Rotating `0601889` $180$ degrees results in `6881090`.

```input2
86910
```

```output2
01698
```

```input3
01010
```

```output3
01010
```

$S$ may remain the same.