Score : $1600$ points

## Problem Statement

For a string $S$, let $f(S)$ be the lexicographically smallest cyclic shift of $S$.
For example, if $S =$`babca`, $f(S) =$`ababc` because this is the smallest among all cyclic shifts (`babca`, `abcab`, `bcaba`, `cabab`, `ababc`).

You are given three integers $X, Y$, and $Z$.
You want to construct a string $T$ that consists of exactly $X$ `a`s, exactly $Y$ `b`s, and exactly $Z$ `c`s.
If there are multiple such strings, you want to choose one that maximizes $f(T)$ lexicographically.

Compute the lexicographically largest possible value of $f(T)$.

## Constraints

- $1 \leq X + Y + Z \leq 50$
- $X, Y, Z$ are non-negative integers.

## Input

Input is given from Standard Input in the following format:

> $X$ $Y$ $Z$

## Output

Print the answer.

```input1
2 2 0
```

```output1
abab
```

$T$ must consist of two `a`s and two `b`s.

- If $T =$`aabb`, $f(T) =$`aabb`.
- If $T =$`abab`, $f(T) =$`abab`.
- If $T =$`abba`, $f(T) =$`aabb`.
- If $T =$`baab`, $f(T) =$`aabb`.
- If $T =$`baba`, $f(T) =$`abab`.
- If $T =$`bbaa`, $f(T) =$`aabb`.

Thus, the largest possible $f(T)$ is `abab`.

```input2
1 1 1
```

```output2
acb
```