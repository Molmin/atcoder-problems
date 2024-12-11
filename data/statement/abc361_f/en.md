Score : $500$ points

## Problem Statement

How many integers $x$ between $1$ and $N$, inclusive, can be expressed as $x = a^b$ using some positive integer $a$ and a positive integer $b$ **not less than $2$**?

## Constraints

- All input values are integers.
- $1 \le N \le 10^{18}$

## Input

The input is given from Standard Input in the following format:

> $N$

## Output

Print the answer as an integer.

```input1
99
```

```output1
12
```

The integers that satisfy the conditions in the problem statement are $1, 4, 8, 9, 16, 25, 27, 32, 36, 49, 64, 81$: there are $12$.

```input2
1000000000000000000
```

```output2
1001003332
```