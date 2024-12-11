Score : $100$ points

## Problem Statement

$X$ and $A$ are integers between $0$ and $9$ (inclusive).

If $X$ is less than $A$, print $0$; if $X$ is not less than $A$, print $10$.

## Constraints

- $0 \leq X, A \leq 9$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $X$ $A$

## Output

If $X$ is less than $A$, print $0$; if $X$ is not less than $A$, print $10$.

```input1
3 5
```

```output1
0
```

$3$ is less than $5$, so we should print $0$.

```input2
7 5
```

```output2
10
```

$7$ is not less than $5$, so we should print $10$.

```input3
6 6
```

```output3
10
```

$6$ is not less than $6$, so we should print $10$.