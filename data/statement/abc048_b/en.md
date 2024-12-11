Score : $200$ points

## Problem Statement

You are given nonnegative integers $a$ and $b$ ($a \leq b$), and a positive integer $x$.
Among the integers between $a$ and $b$, inclusive, how many are divisible by $x$?

## Constraints

- $0 \leq a \leq b \leq 10^{18}$
- $1 \leq x \leq 10^{18}$

## Input

The input is given from Standard Input in the following format:

> $a$ $b$ $x$

## Output

Print the number of the integers between $a$ and $b$, inclusive, that are divisible by $x$.

```input1
4 8 2
```

```output1
3
```

There are three integers between $4$ and $8$, inclusive, that are divisible by $2$: $4$, $6$ and $8$.

```input2
0 5 1
```

```output2
6
```

There are six integers between $0$ and $5$, inclusive, that are divisible by $1$: $0$, $1$, $2$, $3$, $4$ and $5$.

```input3
9 9 2
```

```output3
0
```

There are no integer between $9$ and $9$, inclusive, that is divisible by $2$.

```input4
1 1000000000000000000 3
```

```output4
333333333333333333
```

Watch out for integer overflows.