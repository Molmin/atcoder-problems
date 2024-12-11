Score : $600$ points

## Problem Statement

You are given two strings $S$ and $T$ consisting of lowercase English letters.

Find the minimum positive integer $k$ such that you can choose (not necessarily distinct) $k$ prefixes of $S$ so that their concatenation coincides with $T$.

In other words, find the minimum positive integer $k$ such that
there exists a $k$-tuple $(a_1,a_2,\ldots, a_k)$ of integers between $1$ and $|S|$ such that<br>
$T=S_{a_1}+S_{a_2}+\cdots +S_{a_k}$,
where $S_i$ denotes the substring of $S$ from the $1$-st through the $i$-th characters and $+$ denotes the concatenation of strings.

If it is impossible to make it coincide with $T$, print $-1$ instead.

## Constraints

- $1 \leq |S| \leq 5\times 10^5$
- $1 \leq |T| \leq 5\times 10^5$
- $S$ and $T$ are strings consisting of lowercase English letters.

## Input

Input is given from Standard Input in the following format:

> $S$
> 
> $T$

## Output

Print the minimum positive integer $k$ such that you can choose $k$ prefixes of $S$ so that their concatenation coincides with $T$.
It is impossible to make it coincide with $T$, print $-1$ instead.

```input1
aba
ababaab
```

```output1
3
```

$T=$ `ababaab` can be written as `ab` + `aba` + `ab`, of which `ab` and `aba` are prefixes of $S=$ `aba`.<br>
Since it is unable to express `ababaab` with two or less prefixes of `aba`, print $3$.

```input2
atcoder
ac
```

```output2
-1
```

Since it is impossible to express $T$ as a concatenation of prefixes of $S$, print $-1$.