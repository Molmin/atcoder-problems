Score : $100$ points

## Problem Statement

You are given an odd-length string $S$ consisting of lowercase English letters.

Print the central character of $S$.

What is the central character?
For an odd-length string $T$, its central character is the $\frac{|T|+1}{2}$-th character from the beginning, where $|T|$ is the length of $T$.

## Constraints

- $S$ is an odd-length string consisting of lowercase English letters.
- The length of $S$ is between $1$ and $99$ (inclusive).

## Input

Input is given from Standard Input in the following format:

> $S$

## Output

Print the answer.

```input1
atcoder
```

```output1
o
```

The central character of `atcoder` is `o`.

```input2
a
```

```output2
a
```