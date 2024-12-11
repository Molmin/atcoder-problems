Score : $100$ points

## Problem Statement

You are given a string $S$ of length $N$ consisting of three kinds of characters: `.`, `|`, and `*`.
$S$ contains exactly two `|` and exactly one `*`.

Determine whether the `*` is between the two `|`, and if so, print `in`; otherwise, print `out`.

More formally, determine whether one of the characters before the `*` is `|` and one of the characters after the `*` is `|`.

## Constraints

- $3\leq N\leq 100$
- $N$ is an integer.
- $S$ is a string of length $N$ consisting of `.`, `|`, and `*`.
- $S$ contains exactly two `|`.
- $S$ contains exactly one `*`.

## Input

The input is given from Standard Input in the following format:

> $N$
> 
> $S$

## Output

Print a single line containing `in` if the `*` is between the two `|`, and `out` otherwise.

```input1
10
.|..*...|.
```

```output1
in
```

Between the two `|`, we have `|..*...|`, which contains `*`, so you should print `in`.

```input2
10
.|..|.*...
```

```output2
out
```

Between the two `|`, we have `|..|`, which does not contain `*`, so you should print `out`.

```input3
3
|*|
```

```output3
in
```