Score : $200$ points

## Problem Statement

You are given a string $S$ consisting of uppercase English letters. Find the length of the longest *ACGT string* that is a substring (see Notes) of $S$.

Here, a ACGT string is a string that contains no characters other than `A`, `C`, `G` and `T`.

## Notes

A substring of a string $T$ is a string obtained by removing zero or more characters from the beginning and the end of $T$.

For example, the substrings of `ATCODER` include `TCO`, `AT`, `CODER`, `ATCODER` and `` (the empty string), but not `AC`.

## Constraints

- $S$ is a string of length between $1$ and $10$ (inclusive).
- Each character in $S$ is an uppercase English letter.

## Input

Input is given from Standard Input in the following format:

> $S$

## Output

Print the length of the longest *ACGT string* that is a substring of $S$.

```input1
ATCODER
```

```output1
3
```

Among the ACGT strings that are substrings of `ATCODER`, the longest one is `ATC`.

```input2
HATAGAYA
```

```output2
5
```

Among the ACGT strings that are substrings of `HATAGAYA`, the longest one is `ATAGA`.

```input3
SHINJUKU
```

```output3
0
```

Among the ACGT strings that are substrings of `SHINJUKU`, the longest one is `` (the empty string).