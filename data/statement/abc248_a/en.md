Score : $100$ points

## Problem Statement

You are given a string $S$ of length exactly $9$ consisting of digits.
One but all digits from `0` to `9` appear exactly once in $S$.

Print the only digit missing in $S$.

## Constraints

- $S$ is a string of length $9$ consisting of digits.
- All characters in $S$ are distinct.

## Input

Input is given from Standard Input in the following format:

> $S$

## Output

Print the only digit missing in $S$.

```input1
023456789
```

```output1
1
```

The string `023456789` only lacks $1$.
Thus, $1$ should be printed.

```input2
459230781
```

```output2
6
```

The string `459230781` only lacks $6$.
Thus, $6$ should be printed.

Note that the digits in the string may not appear in increasing order.