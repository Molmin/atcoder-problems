Score : $400$ points

## Problem Statement

You are given a string $S$ of length $N$ consisting of `A` and `B`.

You can repeat the following operation zero or more times:

- choose a pair of adjacent characters in $S$ and replace them with `AB`.

Determine whether $S$ can be turned into a palindrome.

What is a palindrome?
A string $T$ is a palindrome if and only if, for every integer $i$ ($1 \le i \le |T|$), the $i$-th character from the beginning and the $i$-th character from the end are the same, where $|T|$ is the length of $T$.

## Constraints

- $2 \leq N \leq 2\times 10^5$
- $S$ is a string of length $N$ consisting of `A` and `B`.

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $S$

## Output

If $S$ can be turned into a palindrome, print `Yes`; otherwise, print `No`.

```input1
3
BBA
```

```output1
Yes
```

Replacing the $2$-nd and $3$-rd characters, `BA`, with `AB` will turn $S$ into `BAB`, a palindrome.

```input2
4
ABAB
```

```output2
No
```

No sequence of operations can turn $S$ into a palindrome.