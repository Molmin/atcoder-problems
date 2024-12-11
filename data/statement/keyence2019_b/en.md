Score : $200$ points

## Problem Statement

A string is called a KEYENCE string when it can be changed to `keyence` by removing its contiguous substring (possibly empty) only once.

Given a string $S$ consisting of lowercase English letters, determine if $S$ is a KEYENCE string.

## Constraints

- The length of $S$ is between $7$ and $100$ (inclusive).
- $S$ consists of lowercase English letters.

## Input

Input is given from Standard Input in the following format:

> $S$

## Output

If $S$ is a KEYENCE string, print `YES`; otherwise, print `NO`.

```input1
keyofscience
```

```output1
YES
```

`keyence` is an abbreviation of `key of science`.

```input2
mpyszsbznf
```

```output2
NO
```

```input3
ashlfyha
```

```output3
NO
```

```input4
keyence
```

```output4
YES
```