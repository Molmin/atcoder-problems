Score : $400$ points

## Problem Statement

Given is a string $s$ of length $N$.
Let $s_i$ denote the $i$-th character of $s$.

Snuke will transform $s$ by the following procedure.

- Choose an **even length** (not necessarily contiguous) subsequence $x=(x_1, x_2, \ldots, x_{2k})$ of $(1,2, \ldots, N)$ ($k$ may be $0$).
- Swap $s_{x_1}$ and $s_{x_{2k}}$.
- Swap $s_{x_2}$ and $s_{x_{2k-1}}$.
- Swap $s_{x_3}$ and $s_{x_{2k-2}}$.
- $\vdots$
- Swap $s_{x_{k}}$ and $s_{x_{k+1}}$.

Among the strings that $s$ can become after the procedure, find the lexicographically smallest one.

What is the lexicographical order?

Simply speaking, the lexicographical order is the order in which words are listed in a dictionary. As a more formal definition, here is the algorithm to determine the lexicographical order between different strings $S$ and $T$.

Below, let $S_i$ denote the $i$-th character of $S$. Also, if $S$ is lexicographically smaller than $T$, we will denote that fact as $S \lt T$; if $S$ is lexicographically larger than $T$, we will denote that fact as $S \gt T$.

1. Let $L$ be the smaller of the lengths of $S$ and $T$. For each $i=1,2,\dots,L$, we check whether $S_i$ and $T_i$ are the same.
2. If there is an $i$ such that $S_i \neq T_i$, let $j$ be the smallest such $i$. Then, we compare $S_j$ and $T_j$. If $S_j$ comes earlier than $T_j$ in alphabetical order, we determine that $S \lt T$ and quit; if $S_j$ comes later than $T_j$, we determine that $S \gt T$ and quit.
3. If there is no $i$ such that $S_i \neq T_i$, we compare the lengths of $S$ and $T$. If $S$ is shorter than $T$, we determine that $S \lt T$ and quit; if $S$ is longer than $T$, we determine that $S \gt T$ and quit.

## Constraints

- $1 \leq N \leq 2 \times 10^5$
- $s$ is a string of length $N$ consisting of lowercase English letters.

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $s$

## Output

Print the lexicographically smallest possible string $s$ after the procedure by Snuke.

```input1
4
dcab
```

```output1
acdb
```

- When $x=(1,3)$, the procedure just swaps $s_{1}$ and $s_{3}$.
- The $s$ after the procedure is `acdb`, the lexicographically smallest possible result.

```input2
2
ab
```

```output2
ab
```

- When $x=()$, the $s$ after the procedure is `ab`, the lexicographically smallest possible result.
- Note that $x$ may have a length of $0$.

```input3
16
cabaaabbbabcbaba
```

```output3
aaaaaaabbbbcbbbc
```

```input4
17
snwfpfwipeusiwkzo
```

```output4
effwpnwipsusiwkzo
```