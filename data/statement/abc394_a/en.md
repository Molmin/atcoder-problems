Score : $100$ points

## Problem Statement

You are given a string $S$ consisting of digits.

Remove all characters from $S$ except for `2`, and then concatenate the remaining characters in their original order to form a new string.

## Constraints

- $S$ is a string consisting of digits with length between $1$ and $100$, inclusive.
- $S$ contains at least one `2`.

## Input

The input is given from Standard Input in the following format:

> $S$

## Output

Print the answer.

```input1
20250222
```

```output1
22222
```

By removing `0`, `5`, and `0` from `20250222` and then concatenating the remaining characters in their original order, the string `22222` is obtained.

```input2
2
```

```output2
2
```

```input3
22222000111222222
```

```output3
22222222222
```