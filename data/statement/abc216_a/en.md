Score : $100$ points

## Problem Statement

You are given a real number $X.Y$, where $Y$ is a single digit.

Print the following: (quotes for clarity)

- $X$-, if $0 \leq Y \leq 2$;
- $X$, if $3 \leq Y \leq 6$;
- $X$+, if $7 \leq Y \leq 9$.

## Constraints

- $1 \leq X \leq 15$
- $0 \leq Y \leq 9$
- $X$ and $Y$ are integers.

## Input

Input is given from Standard Input in the following format:

> $X.Y$

## Output

Print the answer.

```input1
15.8
```

```output1
15+
```

Here, printing `15 +` will not be accepted: do not print a space between $X$ and `+`, or between $X$ and `-`.

```input2
1.0
```

```output2
1-
```

You will not get inputs such as `1.00` and `1`.

```input3
12.5
```

```output3
12
```