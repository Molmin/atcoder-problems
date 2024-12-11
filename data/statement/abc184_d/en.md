Score : $400$ points

## Problem Statement

We have a bag containing $A$ gold coins, $B$ silver coins, and $C$ bronze coins.

Until the bag contains $100$ coins of the same color, we will repeat the following operation:

Operation: Randomly take out one coin from the bag. (Every coin has an equal probability of being chosen.) Then, put back into the bag two coins of the same kind as the removed coin.

Find the expected value of the number of times the operation is done.

## Constraints

- $0 \leq A,B,C \leq 99$
- $A+B+C \geq 1$

## Input

Input is given from Standard Input in the following format:

> $A$ $B$ $C$

## Output

Print the expected value of the number of times the operation is done. Your output will be accepted if its absolute or relative error from the correct value is at most $10^{-6}$.

```input1
99 99 99
```

```output1
1.000000000
```

No matter what coin we take out in the first operation, the bag will contain $100$ coins of that kind.

```input2
98 99 99
```

```output2
1.331081081
```

We will do the second operation only if we take out a gold coin in the first operation.
Thus, the expected number of operations is $2\times \frac{98}{98+99+99}+1\times \frac{99}{98+99+99}+1\times \frac{99}{98+99+99}=1.331081081\ldots$

```input3
0 0 1
```

```output3
99.000000000
```

Each operation adds a bronze coin.

```input4
31 41 59
```

```output4
91.835008202
```