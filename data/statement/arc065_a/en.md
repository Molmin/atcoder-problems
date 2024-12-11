Score : $300$ points

## Problem Statement

You are given a string $S$ consisting of lowercase English letters.
Another string $T$ is initially empty.
Determine whether it is possible to obtain $S = T$ by performing the following operation an arbitrary number of times:

- Append one of the following at the end of $T$: `dream`, `dreamer`, `erase` and `eraser`.

## Constraints

- $1 \leq |S| \leq 10^5$
- $S$ consists of lowercase English letters.

## Input

The input is given from Standard Input in the following format:

> $S$

## Output

If it is possible to obtain $S = T$, print `YES`. Otherwise, print `NO`.

```input1
erasedream
```

```output1
YES
```

Append `erase` and `dream` at the end of $T$ in this order, to obtain $S = T$.

```input2
dreameraser
```

```output2
YES
```

Append `dream` and `eraser` at the end of $T$ in this order, to obtain $S = T$.

```input3
dreamerer
```

```output3
NO
```