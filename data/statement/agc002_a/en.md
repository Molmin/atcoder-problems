## Problem Statement

You are given two integers $a$ and $b$ ($a \leq b$). Determine if the product of the integers $a$, $a+1$, $\cdots$, $b$ is positive, negative or zero.

## Constraints

- $a$ and $b$ are integers.
- $-10^9 \leq a \leq b \leq 10^9$

## Partial Score

- In test cases worth $100$ points, $-10 \leq a \leq b \leq 10$.

## Input

The input is given from Standard Input in the following format:

> $a$ $b$

## Output

If the product is positive, print `Positive`. If it is negative, print `Negative`. If it is zero, print `Zero`.

```input1
1 3
```

```output1
Positive
```

$1 \times 2 \times 3=6$ is positive.

```input2
-3 -1
```

```output2
Negative
```

$(-3) \times (-2) \times (-1)=-6$ is negative.

```input3
-1 1
```

```output3
Zero
```

$(-1) \times 0 \times 1=0$.