Score : $100$ points

## Problem Statement

We have two integers: $A$ and $B$.

Print the largest number among $A + B$, $A - B$, and $A \times B$.

## Constraints

- All values in input are integers.
- $-100 \leq A,\ B \leq 100$

## Input

Input is given from Standard Input in the following format:

> $A$ $B$

## Output

Print the largest number among $A + B$, $A - B$, and $A \times B$.

```input1
-13 3
```

```output1
-10
```

The largest number among $A + B = -10$, $A - B = -16$, and $A \times B = -39$ is $-10$.

```input2
1 -33
```

```output2
34
```

The largest number among $A + B = -32$, $A - B = 34$, and $A \times B = -33$ is $34$.

```input3
13 3
```

```output3
39
```

The largest number among $A + B = 16$, $A - B = 10$, and $A \times B = 39$ is $39$.