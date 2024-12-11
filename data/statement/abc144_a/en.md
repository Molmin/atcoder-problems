Score : $100$ points

## Problem Statement

Having learned the multiplication table, Takahashi can multiply two integers between $1$ and $9$ (inclusive) together. He cannot do any other calculation.

Given are two integers $A$ and $B$.

If Takahashi can calculate $A \times B$, print the result; if he cannot, print `-1` instead.

## Constraints

- $1 \leq A \leq 20$
- $1 \leq B \leq 20$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $A$ $B$

## Output

If Takahashi can calculate $A \times B$, print the result; if he cannot, print `-1`.

```input1
2 5
```

```output1
10
```

$2 \times 5 = 10$.

```input2
5 10
```

```output2
-1
```

$5\times 10 = 50$, but Takahashi cannot do this calculation, so print `-1` instead.

```input3
9 9
```

```output3
81
```