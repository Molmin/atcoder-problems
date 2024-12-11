Score : $100$ points

## Problem Statement

Is it possible to get a sum of $B$ when throwing a die with six faces $1,2,\ldots,6$ $A$ times?

## Constraints

- $1 \leq A \leq 100$
- $1 \leq B \leq 1000$
- $A$ and $B$ are integers.

## Input

Input is given from Standard Input in the following format:

> $A$ $B$

## Output

If it is possible to get a sum of $B$, print `Yes`; otherwise, print `No`.

```input1
2 11
```

```output1
Yes
```

There are two ways to get a sum of $11$ when throwing a $6$-faced die twice:

- getting $6$ in the first throw and $5$ in the second throw;
- getting $5$ in the first throw and $6$ in the second throw.

```input2
2 13
```

```output2
No
```

There is no way to get a sum of $13$ when throwing a $6$-faced die twice.

```input3
100 600
```

```output3
Yes
```