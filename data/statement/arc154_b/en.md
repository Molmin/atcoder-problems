Score : $400$ points

## Problem Statement

You are given strings $S$ and $T$ of length $N$ consisting of lowercase English letters.

You can repeat the following operation any number of times (possibly zero).

- Erase the **first** character of $S$ and insert the same character at any position of $S$.

Determine whether it is possible to make $S$ equal $T$, and if it is possible, find the minimum number of operations needed.

## Constraints

- $1 \le N \le 2 \times 10^5$
- $S$ and $T$ are strings of length $N$ consisting of lowercase English letters.

## Input

The input is given from Standard Input in the following format:

> $N$
> 
> $S$
> 
> $T$

## Output

If it is impossible to make $S$ equal $T$, print `-1`. If it is possible, print the minimum number of operations needed.

```input1
4
abab
abba
```

```output1
2
```

You can make $S$ equal $T$ in two operations, as follows.

- Erase the first character of $S$, and insert that character `a` at the end of $S$, making $S$ `baba`.
- Erase the first character of $S$, and insert that character `b` between the $2$-nd and $3$-rd characters of $S$, making $S$ `abba`.

It is impossible to make $S$ equal $T$ in one or fewer operations, so the answer is $2$.

```input2
3
arc
cra
```

```output2
2
```