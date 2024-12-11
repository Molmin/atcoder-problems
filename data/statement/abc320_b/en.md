Score : $200$ points

## Problem Statement

You are given a string $S$.
Find the maximum length of a contiguous substring of $S$ that is a palindrome.<br>
Note that there is always a contiguous substring of $S$ that is a palindrome.

## Constraints

- $S$ is a string of length between $2$ and $100$, inclusive, consisting of uppercase English letters.

## Input

The input is given from Standard Input in the following format:

> $S$

## Output

Print the answer.

```input1
TOYOTA
```

```output1
5
```

`TOYOT`, a contiguous substring of `TOYOTA`, is a palindrome of length $5$.<br>
`TOYOTA`, the only length-$6$ contiguous substring of `TOYOTA`, is not a palindrome, so print $5$.

```input2
ABCDEFG
```

```output2
1
```

Every contiguous substring of length $1$ is a palindrome.

```input3
AAAAAAAAAA
```

```output3
10
```