Score : $100$ points

## Problem Statement

Three poles stand evenly spaced along a line. Their heights are $a$, $b$ and $c$ meters, from left to right.
We will call the arrangement of the poles *beautiful* if the tops of the poles lie on the same line, that is, $b-a = c-b$.

Determine whether the arrangement of the poles is beautiful.

## Constraints

- $1 \leq a,b,c \leq 100$
- $a$, $b$ and $c$ are integers.

## Input

Input is given from Standard Input in the following format:

> $a$ $b$ $c$

## Output

Print `YES` if the arrangement of the poles is beautiful; print `NO` otherwise.

```input1
2 4 6
```

```output1
YES
```

Since $4-2 = 6-4$, this arrangement of poles is beautiful.

```input2
2 5 6
```

```output2
NO
```

Since $5-2 \neq 6-5$, this arrangement of poles is not beautiful.

```input3
3 2 1
```

```output3
YES
```

Since $1-2 = 2-3$, this arrangement of poles is beautiful.