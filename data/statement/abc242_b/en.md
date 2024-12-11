Score : $200$ points

## Problem Statement

You are given a string $S$. Find the lexicographically smallest string $S'$ obtained by permuting the characters of $S$.

Here, for different two strings $s = s_1 s_2 \ldots s_n$ and $t = t_1 t_2 \ldots t_m$, $s \lt t$ holds lexicographically when one of the conditions below is satisfied.

- There is an integer $i\ (1 \leq i \leq \min(n,m))$ such that $s_i \lt t_i$ and $s_j=t_j$ for all integers $j\ (1 \leq j \lt i)$.
- $s_i = t_i$ for all integers $i\ (1 \leq i \leq \min(n,m))$, and $n \lt m$.

## Constraints

- $S$ is a string of length between $1$ and $2 \times 10^5$ (inclusive) consisting of lowercase English letters.

## Input

Input is given from Standard Input in the following format:

> $S$

## Output

Print the lexicographically smallest string $S'$ obtained by permuting the characters in $S$.

```input1
aba
```

```output1
aab
```

Three strings can be obtained by permuting `aba`:

- `aba`
- `aab`
- `baa`

The lexicographically smallest among them is `aab`.

```input2
zzzz
```

```output2
zzzz
```