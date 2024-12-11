Score : $500$ points

## Problem Statement

You are given a string $S$ consisting of lowercase English letters.
Print the number of non-empty strings $T$ that satisfy the following condition, modulo $998244353$.

The concatenation $TT$ of two copies of $T$ is a subsequence of $S$ (not necessarily contiguous).

## Constraints

- $S$ is a string consisting of lowercase English letters whose length is between $1$ and $100$, inclusive.

## Input

The input is given from Standard Input in the following format:

> $S$

## Output

Print the answer.

```input1
ababbaba
```

```output1
8
```

The eight strings satisfying the condition are `a`, `aa`, `ab`, `aba`, `b`, `ba`, `bab`, and `bb`.

```input2
zzz
```

```output2
1
```

The only string satisfying the condition is `z`.
Note that this string contributes to the answer just once, although there are three ways to extract the subsequence `zz` from $S = S_1S_2S_3 =$ `zzz`:  $S_1S_2 =$ `zz`, $S_1S_3 =$ `zz`, and $S_2S_3 =$ `zz`.

```input3
ppppqqppqqqpqpqppqpqqqqpppqppq
```

```output3
580
```