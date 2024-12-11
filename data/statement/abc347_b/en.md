Score: $200$ points

## Problem Statement

You are given a string $S$ consisting of lowercase English letters. How many different non-empty substrings does $S$ have?

A substring is a contiguous subsequence. For example, `xxx` is a substring of `yxxxy` but not of `xxyxx`.

## Constraints

- $S$ is a string of length between $1$ and $100$, inclusive, consisting of lowercase English letters.

## Input

The input is given from Standard Input in the following format:

> $S$

## Output

Print the answer.

```input1
yay
```

```output1
5
```

$S$ has the following five different non-empty substrings:

- `a`
- `y`
- `ay`
- `ya`
- `yay`

```input2
aababc
```

```output2
17
```

```input3
abracadabra
```

```output3
54
```