Score : $100$ points

## Problem Statement

You are given two different strings $S$ and $T$.<br>
If $S$ is lexicographically smaller than $T$, print `Yes`; otherwise, print `No`.

What is the lexicographical order?

Simply speaking, the lexicographical order is the order in which words are listed in a dictionary. As a more formal definition, here is the algorithm to determine the lexicographical order between different strings $S$ and $T$.

Below, let $S_i$ denote the $i$-th character of $S$. Also, if $S$ is lexicographically smaller than $T$, we will denote that fact as $S \lt T$; if $S$ is lexicographically larger than $T$, we will denote that fact as $S \gt T$.

1. Let $L$ be the smaller of the lengths of $S$ and $T$. For each $i=1,2,\dots,L$, we check whether $S_i$ and $T_i$ are the same.
2. If there is an $i$ such that $S_i \neq T_i$, let $j$ be the smallest such $i$. Then, we compare $S_j$ and $T_j$. If $S_j$ comes earlier than $T_j$ in alphabetical order, we determine that $S \lt T$ and quit; if $S_j$ comes later than $T_j$, we determine that $S \gt T$ and quit.
3. If there is no $i$ such that $S_i \neq T_i$, we compare the lengths of $S$ and $T$. If $S$ is shorter than $T$, we determine that $S \lt T$ and quit; if $S$ is longer than $T$, we determine that $S \gt T$ and quit.

Note that many major programming languages implement lexicographical comparison of strings as operators or functions in standard libraries. For more detail, see your language's reference.

## Constraints

- $S$ and $T$ are different strings, each of which consists of lowercase English letters and has a length of between $1$ and $10$ (inclusive).

## Input

Input is given from Standard Input in the following format:

> $S$ $T$

## Output

If $S$ is lexicographically smaller than $T$, print `Yes`; otherwise, print `No`.

```input1
abc atcoder
```

```output1
Yes
```

`abc` and `atcoder` begin with the same character, but their second characters are different. Since `b` comes earlier than `t` in alphabetical order, we can see that `abc` is lexicographically smaller than `atcoder`.

```input2
arc agc
```

```output2
No
```

```input3
a aa
```

```output3
Yes
```