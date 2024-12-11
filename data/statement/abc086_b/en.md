Score : $200$ points

## Problem Statement

AtCoDeer the deer has found two positive integers, $a$ and $b$.
Determine whether the concatenation of $a$ and $b$ in this order is a square number.

## Constraints

- $1$ $\leq$ $a,b$ $\leq$ $100$
- $a$ and $b$ are integers.

## Input

Input is given from Standard Input in the following format:

> $a$ $b$

## Output

If the concatenation of $a$ and $b$ in this order is a square number, print `Yes`; otherwise, print `No`.

```input1
1 21
```

```output1
Yes
```

As $121$ $=$ $11$ × $11$, it is a square number.

```input2
100 100
```

```output2
No
```

$100100$ is not a square number.

```input3
12 10
```

```output3
No
```