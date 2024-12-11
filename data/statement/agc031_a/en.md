Score : $200$ points

## Problem Statement

You are given a string $S$ of length $N$.
Among its subsequences, count the ones such that all characters are different, modulo $10^9+7$. Two subsequences are considered different if their characters come from different positions in the string, even if they are the same as strings.

Here, a subsequence of a string is a concatenation of **one or more** characters from the string without changing the order.

## Constraints

- $1 \leq N \leq 100000$
- $S$ consists of lowercase English letters.
- $|S|=N$

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $S$

## Output

Print the number of the subsequences such that all characters are different, modulo $10^9+7$.

```input1
4
abcd
```

```output1
15
```

Since all characters in $S$ itself are different, all its subsequences satisfy the condition.

```input2
3
baa
```

```output2
5
```

The answer is five: `b`, two occurrences of `a`, two occurrences of `ba`. Note that we do not count `baa`, since it contains two `a`s.

```input3
5
abcab
```

```output3
17
```