Score : $100$ points

## Problem Statement

You are given integers $A$ and $B$, each between $1$ and $3$ (inclusive).

Determine if there is an integer $C$ between $1$ and $3$ (inclusive) such that $A \times B \times C$ is an odd number.

## Constraints

- All values in input are integers.
- $1 \leq A, B \leq 3$

## Input

Input is given from Standard Input in the following format:

> $A$ $B$

## Output

If there is an integer $C$ between $1$ and $3$ that satisfies the condition, print `Yes`; otherwise, print `No`.

```input1
3 1
```

```output1
Yes
```

Let $C = 3$. Then, $A \times B \times C = 3 \times 1 \times 3 = 9$, which is an odd number.

```input2
1 2
```

```output2
No
```

```input3
2 2
```

```output3
No
```