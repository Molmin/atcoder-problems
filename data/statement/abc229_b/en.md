Score : $200$ points

## Problem Statement

You are given positive integers $A$ and $B$.<br>
Let us calculate $A+B$ (in decimal). If it does not involve a carry, print `Easy`; if it does, print `Hard`.

## Constraints

- $A$ and $B$ are integers.
- $1 \le A,B \le 10^{18}$

## Input

Input is given from Standard Input in the following format:

> $A$ $B$

## Output

If the calculation does not involve a carry, print `Easy`; if it does, print `Hard`.

```input1
229 390
```

```output1
Hard
```

When calculating $229+390$, we have a carry from the tens digit to the hundreds digit, so the answer is `Hard`.

```input2
123456789 9876543210
```

```output2
Easy
```

We do not have a carry here; the answer is `Easy`.<br>
Note that the input may not fit into a $32$-bit integer.