Score : $200$ points

## Problem Statement

A string $S$ is said to be a substring of a string $T$ when there is a pair of integers $i$ and $j$ ($1 \leq i \leq j \leq |T|)$ that satisfy the following condition.

- The extraction of the $i$-th through $j$-th characters of $T$ without changing the order equals $S$.

Let $T$ be the concatenation of $10^5$ copies of `oxx`.<br>
Given a string $S$, print `Yes` if $S$ is a substring of $T$, and `No` otherwise.

## Constraints

- $S$ is a string consisting of `o` and `x`.
- The length of $S$ is between $1$ and $10$ (inclusive).

## Input

Input is given from Standard Input in the following format:

> $S$

## Output

If $S$ satisfies the condition, print `Yes`; otherwise, print `No`.

```input1
xoxxoxxo
```

```output1
Yes
```

$T$ begins like this: `oxxoxxoxxoxx`...
Since the extraction of $3$-rd through $10$-th characters of $T$ equals $S$, $S$ is a substring of $T$, so `Yes` should be printed.

```input2
xxoxxoxo
```

```output2
No
```

Since there is no way to extract from $T$ a string that equals $S$, $S$ is not a substring of $T$, so `No` should be printed.

```input3
ox
```

```output3
Yes
```