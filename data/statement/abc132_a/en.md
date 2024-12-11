Score : $100$ points

## Problem Statement

You are given a $4$-character string $S$ consisting of uppercase English letters.
Determine if $S$ consists of exactly two kinds of characters which both appear twice in $S$.

## Constraints

- The length of $S$ is $4$.
- $S$ consists of uppercase English letters.

## Input

Input is given from Standard Input in the following format:

> $S$

## Output

If $S$ consists of exactly two kinds of characters which both appear twice in $S$, print `Yes`; otherwise, print `No`.

```input1
ASSA
```

```output1
Yes
```

$S$ consists of `A` and `S` which both appear twice in $S$.

```input2
STOP
```

```output2
No
```

```input3
FFEE
```

```output3
Yes
```

```input4
FREE
```

```output4
No
```