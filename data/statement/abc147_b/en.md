Score : $200$ points

## Problem Statement

Takahashi loves palindromes. Non-palindromic strings are unacceptable to him. Each time he hugs a string, he can change one of its characters to any character of his choice.

Given is a string $S$. Find the minimum number of hugs needed to make $S$ palindromic.

## Constraints

- $S$ is a string consisting of lowercase English letters.
- The length of $S$ is between $1$ and $100$ (inclusive).

## Input

Input is given from Standard Input in the following format:

> $S$

## Output

Print the minimum number of hugs needed to make $S$ palindromic.

```input1
redcoder
```

```output1
1
```

For example, we can change the fourth character to `o` and get a palindrome `redooder`.

```input2
vvvvvv
```

```output2
0
```

We might need no hugs at all.

```input3
abcdabc
```

```output3
2
```