Score : $100$ points

## Problem Statement

We have a drink that has $A$ kilocalories of energy per $100$ milliliters. How many kilocalories of energy does $B$ milliliters of this drink have?

## Constraints

- $0 \leq A, B \leq 1000$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $A$ $B$

## Output

Print a number representing the answer.

Your output is considered correct when its absolute or relative error from our answer is at most $10^{-6}$.

```input1
45 200
```

```output1
90
```

We have a drink that has $45$ kilocalories of energy per $100$ milliliters. $200$ milliliters of this drink has $90$ kilocalories of energy.

```input2
37 450
```

```output2
166.5
```

The answer may not be an integer.

```input3
0 1000
```

```output3
0
```

```input4
50 0
```

```output4
0
```