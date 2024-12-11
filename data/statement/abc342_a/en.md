Score: $150$ points

## Problem Statement

You are given a string $S$ consisting of lowercase English letters. The length of $S$ is between $3$ and $100$, inclusive.

All characters but one of $S$ are the same.

Find $x$ such that the $x$-th character of $S$ differs from all other characters.

## Constraints

- $S$ is a string of length between $3$ and $100$, inclusive, consisting of two different lowercase English letters.
- All characters but one of $S$ are the same.

## Input

The input is given from Standard Input in the following format:

> $S$

## Output

Print the answer.

```input1
yay
```

```output1
2
```

The second character of `yay` differs from the first and third characters.

```input2
egg
```

```output2
1
```

```input3
zzzzzwz
```

```output3
6
```