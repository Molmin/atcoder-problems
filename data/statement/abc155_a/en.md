Score: $100$ points

## Problem Statement

A triple of numbers is said to be *poor* when two of those numbers are equal but the other number is different from those two numbers.

You will be given three integers $A$, $B$, and $C$. If this triple is poor, print `Yes`; otherwise, print `No`.

## Constraints

- $A$, $B$, and $C$ are all integers between $1$ and $9$ (inclusive).

## Input

Input is given from Standard Input in the following format:

> $A$ $B$ $C$

## Output

If the given triple is poor, print `Yes`; otherwise, print `No`.

```input1
5 7 5
```

```output1
Yes
```

$A$ and $C$ are equal, but $B$ is different from those two numbers, so this triple is poor.

```input2
4 4 4
```

```output2
No
```

$A$, $B$, and $C$ are all equal, so this triple is not poor.

```input3
4 9 6
```

```output3
No
```

```input4
3 3 4
```

```output4
Yes
```