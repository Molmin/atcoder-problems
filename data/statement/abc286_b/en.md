Score : $200$ points

## Problem Statement

You are given a string $S$ of length $N$.

Find the string obtained by replacing all contiguous occurrences of `na` in $S$ with `nya`.

## Constraints

- $N$ is an integer between $1$ and $1000$, inclusive.
- $S$ is a string of length $N$ consisting of lowercase English letters.

## Input

The input is given from Standard Input in the following format:

> $N$
> 
> $S$

## Output

Print the answer.

```input1
4
naan
```

```output1
nyaan
```

Replacing all contiguous occurrences of `na` in `naan` with `nya` results in the string `nyaan`.

```input2
4
near
```

```output2
near
```

$S$ may not contain a contiguous `na`.

```input3
8
national
```

```output3
nyationyal
```