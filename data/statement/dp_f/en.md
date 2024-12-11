Score : $100$ points

## Problem Statement

You are given strings $s$ and $t$.
Find one longest string that is a subsequence of both $s$ and $t$.

## Notes

A *subsequence* of a string $x$ is the string obtained by removing zero or more characters from $x$ and concatenating the remaining characters without changing the order.

## Constraints

- $s$ and $t$ are strings consisting of lowercase English letters.
- $1 \leq |s|, |t| \leq 3000$

## Input

Input is given from Standard Input in the following format:

> $s$
> 
> $t$

## Output

Print one longest string that is a subsequence of both $s$ and $t$.
If there are multiple such strings, any of them will be accepted.

```input1
axyb
abyxb
```

```output1
axb
```

The answer is `axb` or `ayb`; either will be accepted.

```input2
aa
xayaz
```

```output2
aa
```

```input3
a
z
```

```output3

```

The answer is `` (an empty string).

```input4
abracadabra
avadakedavra
```

```output4
aaadara
```