Score : $200$ points

## Problem Statement

Given is an integer $N$. Find the number of positive integers less than or equal to $N$ that have an odd number of digits (in base ten without leading zeros).

## Constraints

- $1 \leq N \leq 10^5$

## Input

Input is given from Standard Input in the following format:

> $N$

## Output

Print the number of positive integers less than or equal to $N$ that have an odd number of digits.

```input1
11
```

```output1
9
```

Among the positive integers less than or equal to $11$, nine integers have an odd number of digits: $1, 2, \ldots, 9$.

```input2
136
```

```output2
46
```

In addition to $1, 2, \ldots, 9$, another $37$ integers also have an odd number of digits: $100, 101, \ldots, 136$.

```input3
100000
```

```output3
90909
```