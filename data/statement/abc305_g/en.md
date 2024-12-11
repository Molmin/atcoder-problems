Score : $550$ points

## Problem Statement

You are given a set $S=\lbrace s _ 1,s _ 2,\ldots,s _ M\rbrace$ of non-empty strings of length at most $6$ consisting of `a` and `b`.
Find the number of strings $T$ of length $N$ consisting of `a` and `b` that satisfy the following condition:

- $T$ does not contain $s _ i$ as a consecutive substring for any $s _ i\in S$.

Since the answer can be enormous, find it modulo $998244353$.

## Constraints

- $1\leq N\leq10^{18}$
- $1\leq M\leq126$
- $N$ and $M$ are integers.
- $s _ i$ is a non-empty string of length at most $6$ consisting of `a` and `b`.
- $s _ i\neq s _ j\ (1\leq i\lt j\leq M)$

## Input

The input is given from Standard Input in the following format:

> $N$ $M$
> 
> $s _ 1$
> 
> $s _ 2$
> 
> $\vdots$
> 
> $s _ M$

## Output

Print the answer modulo $998244353$ in a single line.

```input1
4 3
aab
bbab
abab
```

```output1
10
```

There are $10$ strings of length $4$ consisting of `a` and `b` that do not contain `aab`, `bbab`, or `abab` as consecutive substrings: `aaaa`, `abaa`, `abba`, `abbb`, `baaa`, `baba`, `babb`, `bbaa`, `bbba`, and `bbbb`. Thus, you should print $10$.

```input2
20 1
aa
```

```output2
17711
```

```input3
1000000007 28
bbabba
bbbbaa
aabbab
bbbaba
baaabb
babaab
bbaaba
aabaaa
aaaaaa
aabbaa
bbaaaa
bbaabb
bbabab
aababa
baaaba
ababab
abbaba
aabaab
ababaa
abbbba
baabaa
aabbbb
abbbab
baaaab
baabbb
ababbb
baabba
abaaaa
```

```output3
566756841
```

Print the answer modulo $998244353$.