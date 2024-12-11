Score : $100$ points

## Problem Statement

A Hitachi string is a concatenation of one or more copies of the string `hi`.

For example, `hi` and `hihi` are Hitachi strings, while `ha` and `hii` are not.

Given a string $S$, determine whether $S$ is a Hitachi string.

## Constraints

- The length of $S$ is between $1$ and $10$ (inclusive).
- $S$ is a string consisting of lowercase English letters.

## Input

Input is given from Standard Input in the following format:

> $S$

## Output

If $S$ is a Hitachi string, print `Yes`; otherwise, print `No`.

```input1
hihi
```

```output1
Yes
```

`hihi` is the concatenation of two copies of `hi`, so it is a Hitachi string.

```input2
hi
```

```output2
Yes
```

```input3
ha
```

```output3
No
```