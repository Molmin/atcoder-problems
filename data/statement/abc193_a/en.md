Score : $100$ points

## Problem Statement

A shop sells a product whose regular price is $A$ yen (Japanese currency) for $B$ yen. By what percentage of the regular price is this product discounted?

## Constraints

- $A$ and $B$ are integers.
- $1 \leq B &lt; A \leq 10^5$

## Input

Input is given from Standard Input in the following format:

> $A$ $B$

## Output

Print the answer as a decimal.<br>
Your answer will be judged as correct when its absolute or relative error from our answer is at most $10^{-2}$.

```input1
100 80
```

```output1
20.0
```

If a product whose regular price is $100$ yen is sold for $80$ yen, it is discounted by $20$ percent of the regular price.

```input2
7 6
```

```output2
14.285714285714285714
```

```input3
99999 99998
```

```output3
0.00100001000010000100
```