Score : $100$ points

## Problem Statement

You are given positive integers $A$ and $B$.

If $A$ is a divisor of $B$, print $A + B$; otherwise, print $B - A$.

## Constraints

- All values in input are integers.
- $1 \leq A \leq B \leq 20$

## Input

Input is given from Standard Input in the following format:

> $A$ $B$

## Output

If $A$ is a divisor of $B$, print $A + B$; otherwise, print $B - A$.

```input1
4 12
```

```output1
16
```

As $4$ is a divisor of $12$, $4 + 12 = 16$ should be printed.

```input2
8 20
```

```output2
12
```

```input3
1 1
```

```output3
2
```

$1$ is a divisor of $1$.