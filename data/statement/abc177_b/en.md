Score : $200$ points

## Problem Statement

Given are two strings $S$ and $T$.

Let us change some of the characters in $S$ so that $T$ will be a substring of $S$.

At least how many characters do we need to change?

Here, a substring is a consecutive subsequence. For example, `xxx` is a substring of `yxxxy`, but not a substring of `xxyxx`.

## Constraints

- The lengths of $S$ and $T$ are each at least $1$ and at most $1000$.
- The length of $T$ is at most that of $S$.
- $S$ and $T$ consist of lowercase English letters.

## Input

Input is given from Standard Input in the following format:

> $S$
> 
> $T$

## Output

Print the minimum number of characters in $S$ that need to be changed.

```input1
cabacc
abc
```

```output1
1
```

For example, changing the fourth character `a` in $S$ to `c` will match the second through fourth characters in $S$ to $T$.

Since $S$ itself does not have $T$ as its substring, this number of changes - one - is the minimum needed.

```input2
codeforces
atcoder
```

```output2
6
```