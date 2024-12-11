Score: $100$ points

## Problem Statement

We have two distinct integers $A$ and $B$.

Print the integer $K$ such that $|A - K| = |B - K|$.

If such an integer does not exist, print `IMPOSSIBLE` instead.

## Constraints

- All values in input are integers.
- $0 \leq A,\ B \leq 10^9$
- $A$ and $B$ are distinct.

## Input

Input is given from Standard Input in the following format:

> $A$ $B$

## Output

Print the integer $K$ satisfying the condition.

If such an integer does not exist, print `IMPOSSIBLE` instead.

```input1
2 16
```

```output1
9
```

$|2 - 9| = 7$ and $|16 - 9| = 7$, so $9$ satisfies the condition.

```input2
0 3
```

```output2
IMPOSSIBLE
```

No integer satisfies the condition.

```input3
998244353 99824435
```

```output3
549034394
```