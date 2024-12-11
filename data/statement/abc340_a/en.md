Score: $100$ points

## Problem Statement

Print an arithmetic sequence with first term $A$, last term $B$, and common difference $D$.

You are only given inputs for which such an arithmetic sequence exists.

## Constraints

- $1 \leq A \leq B \leq 100$
- $1 \leq D \leq 100$
- There is an arithmetic sequence with first term $A$, last term $B$, and common difference $D$.
- All input values are integers.

## Input

The input is given from Standard Input in the following format:

> $A$ $B$ $D$

## Output

Print the terms of the arithmetic sequence with first term $A$, last term $B$, and common difference $D$, in order, separated by spaces.

```input1
3 9 2
```

```output1
3 5 7 9
```

The arithmetic sequence with first term $3$, last term $9$, and common difference $2$ is $(3,5,7,9)$.

```input2
10 10 1
```

```output2
10
```

The arithmetic sequence with first term $10$, last term $10$, and common difference $1$ is $(10)$.