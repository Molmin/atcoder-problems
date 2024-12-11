Score : $100$ points

## Problem Statement

You are given a string $S$ consisting of lowercase English characters.
The length of $S$ is between $1$ and $3$, inclusive.

Print the string of length $6$ that is a repetition of $S$.

It can be shown that there uniquely exists such a string under the Constraints of this problem.

## Constraints

- $S$ is a string consisting of lowercase English characters of length between $1$ and $3$, inclusive.

## Input

Input is given from Standard Input in the following format:

> $S$

## Output

Print the answer string, which is of length $6$.

```input1
abc
```

```output1
abcabc
```

These are strings that are repetitions of $S =$ `abc`: `abc`, `abcabc`, `abcabcabc`, `abcabcabcabc`, and so on.
Among them, `abcabc` has the length of $6$, so `abcabc` should be printed.

```input2
zz
```

```output2
zzzzzz
```