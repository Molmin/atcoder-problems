Score : $300$ points

## Problem Statement

Find the price of a product before tax such that, when the consumption tax rate is $8$ percent and $10$ percent, the amount of consumption tax levied on it is $A$ yen and $B$ yen, respectively. (Yen is the currency of Japan.)

Here, the price before tax must be a positive integer, and the amount of consumption tax is rounded down to the nearest integer.

If multiple prices satisfy the condition, print the lowest such price; if no price satisfies the condition, print `-1`.

## Constraints

- $1 \leq A \leq B \leq 100$
- $A$ and $B$ are integers.

## Input

Input is given from Standard Input in the following format:

> $A$ $B$

## Output

If there is a price that satisfies the condition, print an integer representing the lowest such price; otherwise, print `-1`.

```input1
2 2
```

```output1
25
```

If the price of a product before tax is $25$ yen, the amount of consumption tax levied on it is:

- When the consumption tax rate is $8$ percent: $\lfloor 25 \times 0.08 \rfloor = \lfloor 2 \rfloor = 2$ yen.
- When the consumption tax rate is $10$ percent: $\lfloor 25 \times 0.1 \rfloor = \lfloor 2.5 \rfloor = 2$ yen.

Thus, the price of $25$ yen satisfies the condition. There are other possible prices, such as $26$ yen, but print the minimum such price, $25$.

```input2
8 10
```

```output2
100
```

If the price of a product before tax is $100$ yen, the amount of consumption tax levied on it is:

- When the consumption tax rate is $8$ percent: $\lfloor 100 \times 0.08 \rfloor = 8$ yen.
- When the consumption tax rate is $10$ percent: $\lfloor 100 \times 0.1 \rfloor = 10$ yen.

```input3
19 99
```

```output3
-1
```

There is no price before tax satisfying this condition, so print `-1`.