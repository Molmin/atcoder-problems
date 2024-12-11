Score : $200$ points

## Problem Statement

On a non-empty string, a **left shift** moves the first character to the end of the string, and a **right shift** moves the last character to the beginning of the string.

For example, a left shift on `abcde` results in `bcdea`, and two right shifts on `abcde` result in `deabc`.

You are given a non-empty $S$ consisting of lowercase English letters. Among the strings that can be obtained by performing zero or more left shifts and zero or more right shifts on $S$, find the lexicographically smallest string and the lexicographically largest string.

What is the lexicographical order?

Simply speaking, the lexicographical order is the order in which words are listed in a dictionary. As a more formal definition, here is the algorithm to determine the lexicographical order between different strings $S$ and $T$.

Below, let $S_i$ denote the $i$-th character of $S$. Also, if $S$ is lexicographically smaller than $T$, we will denote that fact as $S \lt T$; if $S$ is lexicographically larger than $T$, we will denote that fact as $S \gt T$.

1. Let $L$ be the smaller of the lengths of $S$ and $T$. For each $i=1,2,\dots,L$, we check whether $S_i$ and $T_i$ are the same.
2. If there is an $i$ such that $S_i \neq T_i$, let $j$ be the smallest such $i$. Then, we compare $S_j$ and $T_j$. If $S_j$ comes earlier than $T_j$ in alphabetical order, we determine that $S \lt T$ and quit; if $S_j$ comes later than $T_j$, we determine that $S \gt T$ and quit.
3. If there is no $i$ such that $S_i \neq T_i$, we compare the lengths of $S$ and $T$. If $S$ is shorter than $T$, we determine that $S \lt T$ and quit; if $S$ is longer than $T$, we determine that $S \gt T$ and quit.

## Constraints

- $S$ consists of lowercase English letters.
- The length of $S$ is between $1$ and $1000$ (inclusive).

## Input

Input is given from Standard Input in the following format:

> $S$

## Output

Print two lines. The first line should contain $S_{\min}$, and the second line should contain $S_{\max}$. Here, $S_{\min}$ and $S_{\max}$ are respectively the lexicographically smallest and largest strings obtained by performing zero or more left shifts and zero or more right shifts on $S$.

```input1
aaba
```

```output1
aaab
baaa
```

By performing shifts, we can obtain four strings: `aaab`, `aaba`, `abaa`, `baaa`. The lexicographically smallest and largest among them are `aaab` and `baaa`, respectively.

```input2
z
```

```output2
z
z
```

Any sequence of operations results in `z`.

```input3
abracadabra
```

```output3
aabracadabr
racadabraab
```