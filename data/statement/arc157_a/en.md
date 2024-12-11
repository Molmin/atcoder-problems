Score : $300$ points

## Problem Statement

Determine whether there is a string $S$ of length $N$ consisting of `X` and `Y` that satisfies the following condition.

**Condition:** Among the $(N - 1)$ pairs of consecutive characters in $S$,

- exactly $A$ are `XX`,
- exactly $B$ are `XY`,
- exactly $C$ are `YX`, and
- exactly $D$ are `YY`.

## Constraints

- $1 \leq N \leq 2 \times 10^5$
- $A \geq 0$
- $B \geq 0$
- $C \geq 0$
- $D \geq 0$
- $A + B + C + D = N - 1$

## Input

The input is given from Standard Input in the following format:

> $N$ $A$ $B$ $C$ $D$

## Output

If there is a string $S$ that satisfies the condition, print `Yes`; otherwise, print `No`.

```input1
5 1 1 1 1
```

```output1
Yes
```

For instance, if $S = {}$`XXYYX`, the pairs of consecutive characters are `XX`, `XY`, `YY`, and `YX` from left to right. Each pattern occurs exactly once, so the condition is satisfied.

```input2
5 1 2 1 0
```

```output2
Yes
```

For instance, $S = {}$`XXYXY` satisfies the condition.

```input3
5 0 4 0 0
```

```output3
No
```

No string satisfies the condition.