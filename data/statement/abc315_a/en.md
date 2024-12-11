Score : $100$ points

## Problem Statement

You are given a string $S$ consisting of lowercase English letters.<br>
Remove all occurrences of `a`, `e`, `i`, `o`, `u` from $S$ and print the resulting string.<br>
$S$ contains at least one character other than `a`, `e`, `i`, `o`, `u`.

## Constraints

- $S$ is a string of length between $1$ and $100$, inclusive, consisting of lowercase English letters.
- $S$ contains at least one character other than `a`, `e`, `i`, `o`, `u`.

## Input

The input is given from Standard Input in the following format:

> $S$

## Output

Print the answer.

```input1
atcoder
```

```output1
tcdr
```

For $S =$ `atcoder`, remove the $1$-st, $4$-th, and $6$-th characters to get `tcdr`.

```input2
xyz
```

```output2
xyz
```

```input3
aaaabbbbcccc
```

```output3
bbbbcccc
```