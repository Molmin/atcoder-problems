Score : $400$ points

## Problem Statement

We have a string $S$ of length $N$ consisting of `A`, `T`, `C`, and `G`.

Strings $T_1$ and $T_2$ of the same length are said to be complementary when, for every $i$ ($1 \leq i \leq l$), the $i$-th character of $T_1$ and the $i$-th character of $T_2$ are complementary. Here, `A` and `T` are complementary to each other, and so are `C` and `G`.

Find the number of non-empty contiguous substrings $T$ of $S$ that satisfies the following condition:

- There exists a string that is a permutation of $T$ and is complementary to $T$.

Here, we distinguish strings that originate from different positions in $S$, even if the contents are the same.

## Constraints

- $1 \leq N \leq 5000$
- $S$ consists of `A`, `T`, `C`, and `G`.

## Input

Input is given from Standard Input in the following format:

> $N$ $S$

## Output

Print the number of non-empty contiguous substrings $T$ of $S$ that satisfies the condition.

```input1
4 AGCT
```

```output1
2
```

The following two substrings satisfy the condition:

- `GC` (the $2$-nd through $3$-rd characters) is complementary to `CG`, which is a permutation of `GC`.
- `AGCT` (the $1$-st through $4$-th characters) is complementary to `TCGA`, which is a permutation of `AGCT`.

```input2
4 ATAT
```

```output2
4
```

The following four substrings satisfy the condition:

- `AT` (the $1$-st through $2$-nd characters) is complementary to `TA`, which is a permutation of `AT`.
- `TA` (the $2$-st through $3$-rd characters) is complementary to `AT`, which is a permutation of `TA`.
- `AT` (the $3$-rd through $4$-th characters) is complementary to `TA`, which is a permutation of `AT`.
- `ATAT` (the $1$-st through $4$-th characters) is complementary to `TATA`, which is a permutation of `ATAT`.

```input3
10 AAATACCGCG
```

```output3
6
```