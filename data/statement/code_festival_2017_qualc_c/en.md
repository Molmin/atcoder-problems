Score : $400$ points

## Problem Statement

We have a string $s$ consisting of lowercase English letters.
Snuke can perform the following operation repeatedly:

- Insert a letter `x` to any position in $s$ of his choice, including the beginning and end of $s$.

Snuke's objective is to turn $s$ into a palindrome.
Determine whether the objective is achievable. If it is achievable, find the minimum number of operations required.

## Notes

A *palindrome* is a string that reads the same forward and backward.
For example, `a`, `aa`, `abba` and  `abcba` are palindromes, while `ab`, `abab` and `abcda` are not.

## Constraints

- $1 \leq |s| \leq 10^5$
- $s$ consists of lowercase English letters.

## Input

Input is given from Standard Input in the following format:

> $s$

## Output

If the objective is achievable, print the number of operations required.
If it is not, print `-1` instead.

```input1
xabxa
```

```output1
2
```

One solution is as follows (newly inserted `x` are shown in bold):

xabxa → xa**x**bxa → xaxbxa**x**

```input2
ab
```

```output2
-1
```

No sequence of operations can turn $s$ into a palindrome.

```input3
a
```

```output3
0
```

$s$ is a palindrome already at the beginning.

```input4
oxxx
```

```output4
3
```

One solution is as follows:

oxxx → **x**oxxx → **x**xoxxx → **x**xxoxxx