Score : $350$ points

## Problem Statement

A positive integer not less than $10$ whose top digit (the most significant digit) in decimal representation is strictly larger than every other digit in that number is called a **Snake number**.
For example, $31$ and $201$ are Snake numbers, but $35$ and $202$ are not.

Find how many Snake numbers exist between $L$ and $R$, inclusive.

## Constraints

- $10 \leq L \leq R \leq 10^{18}$
- All input values are integers.

## Input

The input is given from Standard Input in the following format:

> $L$ $R$

## Output

Print the answer.

```input1
97 210
```

```output1
6
```

The Snake numbers between $97$ and $210$, inclusive, are $97$, $98$, $100$, $200$, $201$, and $210$: there are six.

```input2
1000 9999
```

```output2
2025
```

```input3
252509054433933519 760713016476190692
```

```output3
221852052834757
```