Score : $400$ points

## Problem Statement

Snuke has a string $S$ consisting of three kinds of letters: `a`, `b` and `c`.

He has a phobia for palindromes, and wants to permute the characters in $S$ so that $S$ will not contain a palindrome of length $2$ or more as a substring. Determine whether this is possible.

## Constraints

- $1 \leq |S| \leq 10^5$
- $S$ consists of `a`, `b` and `c`.

## Input

Input is given from Standard Input in the following format:

> $S$

## Output

If the objective is achievable, print `YES`; if it is unachievable, print `NO`.

```input1
abac
```

```output1
YES
```

As it stands now, $S$ contains a palindrome `aba`, but we can permute the characters to get `acba`, for example, that does not contain a palindrome of length $2$ or more.

```input2
aba
```

```output2
NO
```

```input3
babacccabab
```

```output3
YES
```