Score : $300$ points

## Problem Statement

Given are three positive integers $A$, $B$, and $C$. Compute the following value modulo $998244353$:

$\sum_{a=1}^{A} \sum_{b=1}^{B} \sum_{c=1}^{C} abc$

## Constraints

- $1 \leq A, B, C \leq 10^9$

## Input

Input is given from standard input in the following format:

> $A$ $B$ $C$

## Output

Print the value modulo $998244353$.

```input1
1 2 3
```

```output1
18
```

We have: $(1 \times 1 \times 1) + (1 \times 1 \times 2) + (1 \times 1 \times 3) + (1 \times 2 \times 1) + (1 \times 2 \times 2) + (1 \times 2 \times 3) = 1 + 2 + 3 + 2 + 4 + 6 = 18$.

```input2
1000000000 987654321 123456789
```

```output2
951633476
```

Be sure to compute the value modulo $998244353$.