Score : $100$ points

## Problem Statement

You are given a string $S$ consisting of lowercase English letters and `.`.
Find the string obtained by removing all `.` from $S$.

## Constraints

- $S$ is a string of length between $1$ and $100$, inclusive, consisting of lowercase English letters and `.`.

## Input

The input is given from Standard Input in the following format:

> $S$

## Output

Print the string obtained by removing all `.` from $S$.

```input1
.v.
```

```output1
v
```

Removing all `.` from `.v.` yields `v`, so print `v`.

```input2
chokudai
```

```output2
chokudai
```

There are cases where $S$ does not contain `.`.

```input3
...
```

```output3

```

There are also cases where all characters in $S$ are `.`.