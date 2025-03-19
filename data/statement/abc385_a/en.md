Score : $100$ points

## Problem Statement

You are given three integers $A,B,C$. Determine whether it is possible to divide these three integers into two or more groups so that these groups have equal sums.

## Constraints

- $1 \leq A,B,C \leq 1000$
- All input values are integers.

## Input

The input is given from Standard Input in the following format:

> $A$ $B$ $C$

## Output

If it is possible to divide $A,B,C$ into two or more groups with equal sums, print `Yes`; otherwise, print `No`.

```input1
3 8 5
```

```output1
Yes
```

For example, by dividing into two groups $(3,5)$ and $(8)$, each group can have the sum $8$.

```input2
2 2 2
```

```output2
Yes
```

By dividing into three groups $(2),(2),(2)$, each group can have the sum $2$.

```input3
1 2 4
```

```output3
No
```

No matter how you divide them into two or more groups, it is not possible to make the sums equal.