Score : $1500$ points

## Problem Statement

Given is a string $S$ consisting of `A`,`B`, and `C`.

Consider the (not necessarily contiguous) subsequences $x$ of $S$ that satisfy all of the following conditions:

- `A`, `B`, and `C` all occur the same number of times in $x$.
- No two adjacent characters in $x$ are the same.

Among these subsequences, find one of the longest. Here a subsequence of $S$ is a string obtained by deleting zero or more characters from $S$.

## Constraints

- $1 \leq |S| \leq 10^6$
- $S$ consists of `A`,`B`, and `C`.

## Input

Input is given from Standard Input in the following format:

> $S$

## Output

Print one longest subsequence that satisfies the conditions.
If multiple solutions exist, any of them will be accepted.

```input1
ABBCBCAB
```

```output1
ACBCAB
```

Consider the subsequence `ACBCAB` of $S$. It satisfies the conditions and is one of the longest with these properties, along with `ABCBCA`.
On the other hand, the subsequences `ABCBCAB` and `ABBCCA` do not satisfy the conditions.

```input2
ABABABABACACACAC
```

```output2
BABCAC
```

```input3
ABCABACBCBABABACBCBCBCBCBCAB
```

```output3
ACABACABABACBCBCBCBCA
```

```input4
AAA
```

```output4

```

It is possible that only the empty string satisfies the condition.