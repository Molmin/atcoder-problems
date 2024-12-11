Score : $200$ points

## Problem Statement

You are given a string $S$ consisting of lowercase English letters.
Find the lexicographically (alphabetically) smallest lowercase English letter that does not occur in $S$.
If every lowercase English letter occurs in $S$, print `None` instead.

## Constraints

- $1 \leq |S| \leq 10^5$ ($|S|$ is the length of string $S$.)
- $S$ consists of lowercase English letters.

## Input

Input is given from Standard Input in the following format:

> $S$

## Output

Print the lexicographically smallest lowercase English letter that does not occur in $S$.
If every lowercase English letter occurs in $S$, print `None` instead.

```input1
atcoderregularcontest
```

```output1
b
```

The string `atcoderregularcontest` contains `a`, but does not contain `b`.

```input2
abcdefghijklmnopqrstuvwxyz
```

```output2
None
```

This string contains every lowercase English letter.

```input3
fajsonlslfepbjtsaayxbymeskptcumtwrmkkinjxnnucagfrg
```

```output3
d
```