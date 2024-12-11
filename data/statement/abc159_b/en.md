Score : $200$ points

## Problem Statement

A string $S$ of an odd length is said to be a *strong palindrome* if and only if all of the following conditions are satisfied:

- $S$ is a palindrome.
- Let $N$ be the length of $S$. The string formed by the $1$-st through $((N-1)/2)$-th characters of $S$ is a palindrome.
- The string consisting of the $(N+3)/2$-st through $N$-th characters of $S$ is a palindrome.

Determine whether $S$ is a strong palindrome.

## Constraints

- $S$ consists of lowercase English letters.
- The length of $S$ is an odd number between $3$ and $99$ (inclusive).

## Input

Input is given from Standard Input in the following format:

> $S$

## Output

If $S$ is a strong palindrome, print `Yes`;
otherwise, print `No`.

```input1
akasaka
```

```output1
Yes
```

- $S$ is `akasaka`.
- The string formed by the $1$-st through the $3$-rd characters is `aka`.
- The string formed by the $5$-th through the $7$-th characters is `aka`.
All of these are palindromes, so $S$ is a strong palindrome.

```input2
level
```

```output2
No
```

```input3
atcoder
```

```output3
No
```